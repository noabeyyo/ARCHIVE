let baseFont;
let letters = [];
let smileImg;
let floorY; 
let floorTop; 
let gravity = 0.6;
let bounce = 0.3;
let friction = 0.9;
let hoverColors;

let trailPoints = [];
let trailDuration = 1000;
let maxTrailPoints = 120;
let brushColor;
let lastColorChangeTime = 0;

let floorWidth = 826;
let floorHeight = 63;
let floorMargin = 100;

// 🎯 מיקום X ידני לכל אות + סדר z (מי מעל מי)
// עכשיו אפשר לתת ערכי x חופפים!
let letterPositions = [
  { char: "N", x: 0, z: 1 },
  { char: "O", x: 51, z: 2 },    // צמוד/חופף ל-N
  { char: "A", x: 100, z: 3 },    // צמוד/חופף ל-O
  { char: " ", x: 150, z: 0 },   // רווח
  { char: "B", x: 170, z: 4 },
  { char: "E", x: 217, z: 5 },
  { char: "Y", x: 258, z: 6 },
  { char: "O", x: 300, z: 7 }
];
let smileXOffset = 358;
let smileZ = 5;

function preload() {
  baseFont = loadFont("NeueMontreal-Bold.otf");
  smileImg = loadImage("smile.svg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(baseFont);
  textAlign(LEFT, CENTER);
  textSize(76);
  noStroke();

  hoverColors = [
    "#A78F06", "#F9A47A", "#F40101",
    "#BB8CFE", "#FA7800", "#D4AC8E",
    "#D8F300", "#6BAADF"
  ];

  brushColor = color(random(hoverColors));
  createLetters();
}

function createLetters() {
  letters = [];
  let y = height / 2 - floorMargin;

  // חשב רוחב כולל
  let maxX = 0;
  for (let pos of letterPositions) {
    if (pos.char !== " ") {
      maxX = Math.max(maxX, pos.x + textWidth(pos.char));
    }
  }
  maxX = Math.max(maxX, smileXOffset + 48);

  let centerOffset = width / 2 - maxX / 2;

  // צור אותיות עם z-index
  for (let pos of letterPositions) {
    if (pos.char === " ") continue;
    let letter = new PhysicsLetter(pos.char, centerOffset + pos.x, y);
    letter.zIndex = pos.z;
    letters.push(letter);
  }

  // הוסף סמיילי
  let smile = new HoverImage(smileImg, centerOffset + smileXOffset, y + 2, 44);
  smile.zIndex = smileZ;
  letters.push(smile);

  floorY = height / 2 + floorMargin;
  floorTop = floorY - floorHeight;
}

function draw() {
  background("#C3C3C3");

  noFill();
  noStroke();
  rectMode(CENTER);
  rect(width / 2, floorTop + floorHeight / 2, floorWidth, floorHeight);

  // עדכון כל האובייקטים
  for (let l of letters) {
    if (l.update) l.update();
  }

  // 🔥 התנגשויות רק בין אותיות שנפלו (active=true)
  for (let i = 0; i < letters.length; i++) {
    let l1 = letters[i];
    if (!(l1 instanceof PhysicsLetter)) continue;
    if (!l1.active) continue; // דלג על אותיות סטטיות!
    
    for (let j = i + 1; j < letters.length; j++) {
      let l2 = letters[j];
      if (!(l2 instanceof PhysicsLetter)) continue;
      if (!l2.active) continue; // דלג על אותיות סטטיות!
      
      handleCollision(l1, l2);
    }
  }

  // מיון לפי z-index ואז ציור
  let sortedLetters = [...letters].sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0));
  for (let l of sortedLetters) {
    if (l.display) l.display();
  }

  if (millis() - lastColorChangeTime > 5000) {
    brushColor = color(random(hoverColors));
    lastColorChangeTime = millis();
  }

  updateTrail();
  drawTrail();
}

class PhysicsLetter {
  constructor(char, x, y) {
    this.char = char;
    this.x = x;
    this.y = y;
    this.origX = x;
    this.origY = y;
    this.w = textWidth(char);
    this.h = 76;
    this.vx = 0;
    this.vy = 0;
    this.active = false; // מתחיל כסטטי
    this.angle = 0;
    this.angularVelocity = 0;
    this.zIndex = 0;

    this.currentColor = color(0);
    this.targetColor = color(0);
    this.hovering = false;
    this.lastHoverTime = 0;
  }

  update() {
    let cx = this.x + this.w / 2;
    let cy = this.y;
    let d = dist(mouseX, mouseY, cx, cy);
    let isNowHover = d < 100;

    if (isNowHover && !this.hovering) {
      this.targetColor = color(random(hoverColors));
      this.lastHoverTime = millis();
      this.hovering = true;
      if (!this.active) this.triggerFall();
    }

    if (!isNowHover && this.hovering) {
      this.hovering = false;
      this.lastHoverTime = millis();
    }

    if (this.hovering) {
      this.currentColor = this.targetColor;
    } else {
      if (millis() - this.lastHoverTime > 500) {
        this.currentColor = lerpColor(this.currentColor, color(0), 0.1);
      } else {
        this.currentColor = this.targetColor;
      }
    }

    // פיזיקה רק כשנפלה
    if (this.active) {
      this.vy += gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= friction;
      this.vy *= friction;
      this.angle += this.angularVelocity;

      let left = width / 2 - floorWidth / 2;
      let right = width / 2 + floorWidth / 2;
      if (this.x + this.w / 2 > left && this.x - this.w / 2 < right) {
        if (this.y + this.h / 2 >= floorTop + floorHeight) {
          this.y = floorTop + floorHeight - this.h / 2;
          this.vy *= -bounce;
          this.angularVelocity *= -bounce;
          this.resetLetter();
        }
      }

      if (this.x < 0) { this.x = 0; this.vx *= -bounce; }
      if (this.x + this.w > width) { this.x = width - this.w; this.vx *= -bounce; }
      if (this.y + this.h / 2 > height) { this.y = height - this.h / 2; this.vy *= -bounce; }

      let md = dist(mouseX, mouseY, this.x + this.w/2, this.y);
      if (md < 100) {
        let angle = atan2(this.y - mouseY, this.x + this.w/2 - mouseX);
        let force = map(md, 0, 100, 5, 0);
        this.vx += cos(angle) * force;
        this.vy += sin(angle) * force;
        this.angularVelocity += random(-0.05, 0.05);
      }
    }
  }

  display() {
    push();
    translate(this.x + this.w / 2, this.y);
    rotate(this.angle);
    fill(this.currentColor);
    textSize(this.h);
    text(this.char, -this.w / 2, 0);
    pop();
  }

  triggerFall() {
    this.active = true;
    this.vx = random(-2, 2);
    this.vy = random(-5, -2);
    this.angularVelocity = random(-0.05, 0.05);
  }

  resetLetter() {
    this.x = this.origX;
    this.y = this.origY;
    this.vx = 0;
    this.vy = 0;
    this.angle = 0;
    this.angularVelocity = 0;
    this.active = false;
    this.currentColor = color(0);
  }
}

function handleCollision(a, b) {
  let dx = (a.x + a.w/2) - (b.x + b.w/2);
  let dy = (a.y + a.h/2) - (b.y + b.h/2);
  let overlapX = (a.w + b.w)/2 - abs(dx);
  let overlapY = (a.h + b.h)/2 - abs(dy);

  if (overlapX > 0 && overlapY > 0) {
    if (overlapX < overlapY) {
      let shift = overlapX / 2;
      if (dx > 0) { a.x += shift; b.x -= shift; }
      else { a.x -= shift; b.x += shift; }
      let temp = a.vx;
      a.vx = b.vx * 0.8;
      b.vx = temp * 0.8;
    } else {
      let shift = overlapY / 2;
      if (dy > 0) { a.y += shift; b.y -= shift; }
      else { a.y -= shift; b.y += shift; }
      let temp = a.vy;
      a.vy = b.vy * 0.8;
      b.vy = temp * 0.8;
    }
  }
}

class HoverImage {
  constructor(img, x, y, size) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.size = size;
    this.zIndex = 0;
  }
  update() {}
  display() {
    imageMode(CENTER);
    image(this.img, this.x + this.size / 2, this.y, this.size, this.size);
  }
}

function mouseMoved() {
  trailPoints.push({
    x: mouseX,
    y: mouseY,
    born: millis(),
    col: brushColor
  });
  if (trailPoints.length > maxTrailPoints) trailPoints.shift();
}

function updateTrail() {
  for (let p of trailPoints) p.y += 1.2;
  let now = millis();
  trailPoints = trailPoints.filter(p => now - p.born < trailDuration);
}

function drawTrail() {
  if (trailPoints.length < 2) return;
  noFill();
  beginShape();
  for (let p of trailPoints) {
    let age = millis() - p.born;
    let alpha = map(age, 0, trailDuration, 255, 0);
    stroke(red(p.col), green(p.col), blue(p.col), alpha);
    strokeWeight(4);
    curveVertex(p.x, p.y);
  }
  endShape();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createLetters();
}

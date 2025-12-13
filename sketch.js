let files = [
  "https://static.wixstatic.com/media/517ef0_004a59ae4d0649b0a15a5eb7f5f48f46~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_7b9c1e031f094ce6960a5dc692197f57~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_1098425285ea4162adde434b1b28491e~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_56ce88554eca40a3994efe6a059db4c0~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_b2187c9aa35e470791172e4fc821e5dd~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_68f6f276dd0c4ac087c40269df12ce8e~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_9f81d68f57da40c89052280e41576fad~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_35d4b1942e5c44e591b32e6c6443e13f~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_089d397b190e47e8bcea341b70a71ff6~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_738283faa5ab4d6795b131d23f00bbc0~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_9099b8ed9a46476faf03bb09f9520dd6~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_503e1c45557f447eabcb97304702ad18~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_a9031755bf7c43168f80cb80378809cc~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_85d8a0a9efe0476fb3acb2aa684ebcdc~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_6ae2965fa89f42b9ab4fe8f7f1139211~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_390949b84d9747e0bd4c18197b70f0ee~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_ef820c8b89184fcb916b9e0b88efe30c~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_fa8abd5f11414b4ea58f9abaf84702b0~mv2.jpg",

  "https://static.wixstatic.com/media/517ef0_b1eecc1ecead468d82dd35f4fde2f691~mv2.gif",
  "https://static.wixstatic.com/media/517ef0_fd3e7a8e19b94d159702273b95d6978c~mv2.gif",
  "https://static.wixstatic.com/media/517ef0_39c5d1ecc1cc437e9eee55c1a38b2dc7~mv2.gif",

  "https://static.wixstatic.com/media/517ef0_e6a2155780214c6d9d11aa01c235ccd5~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_cea8668ee8404a32a41c8c3c9ab6345b~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_4eae7175caf942318726eaeb780e01d1~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_985a38c90b584029992f7f1f5806987d~mv2.jpg",

  "https://static.wixstatic.com/media/517ef0_6efb4852598742bd93564f8ec5ddc3e7~mv2.gif",
  "https://static.wixstatic.com/media/517ef0_994f6e6b482242149c6dbc61f3b1c52b~mv2.gif",
  "https://static.wixstatic.com/media/517ef0_e3ee087cb3994c75a5d042d34956df12~mv2.gif",
  "https://static.wixstatic.com/media/517ef0_28bddc36e416488d917bfb6e12fd6dd3~mv2.gif",
  "https://static.wixstatic.com/media/517ef0_daee5f7ebc66487ca59ec830e9945192~mv2.gif",
  "https://static.wixstatic.com/media/517ef0_3cb91107a094452490cd029b7439126a~mv2.gif",

  "https://static.wixstatic.com/media/517ef0_1e6f385beea340b8abc11b2e0ffcaff3~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_f13d78e41353420e8a80b4572a7d71b6~mv2.gif",
  "https://static.wixstatic.com/media/517ef0_ec4c5620345646709f544c829e96283b~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_ac7e3016218746139ac3e4b96ed151e1~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_4e866e2730d64905ab04c4645727c45d~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_efd4110ef61e4df8bf7da2ff5e92d7b3~mv2.gif",

  "https://static.wixstatic.com/media/517ef0_e39b745a58b34d1298d2a3809fe98dd0~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_5bc8bc00277e480da5bf2997384e9ec8~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_f8752a80f94f4393bc34aeb1883d9749~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_5f25e66b661942ca8536230ec1aa4c49~mv2.png",

  "https://static.wixstatic.com/media/517ef0_740dec5eefd5498f84f83e12bd1998fa~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_772fd6ac53934b729b54febf2e98a980~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_e43b6db6aecd4d3cba4dffd6efcd3e4d~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_0925628b65a046c9b8e70d03154d6897~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_eddd0d02c5e04efcb7feb504a0430c13~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_04c344e4315c4fa9b5bee38ca36bbd56~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_bdd597dc0884484ea528e87994df551d~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_eb681ec65bcd4a67aa73baff6351893a~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_cddc4462265a4ec288982b44f073190d~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_142714fe096f49969fa8ef32020d956f~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_8d0994389152441ca650a4101974b396~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_c5f8da97e232479ba299ea31f0cca8cb~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_0cd9cfffaf9c40dd9dcd7059d5c86ebd~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_485e937042da433197a3b0336dd1b38b~mv2.jpg",

  "https://static.wixstatic.com/media/517ef0_0dd88fb4019247d2857222e83f1a2924~mv2.gif",
  "https://static.wixstatic.com/media/517ef0_1060e14628684c4ea11fc9b1d681b09d~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_2be9611830574b069668b28e555e8705~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_fbf5d6d0480a45a1aa47ff4aaef09a14~mv2.gif",
  "https://static.wixstatic.com/media/517ef0_c24a94d9041f4c29ac04ab18984c4696~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_7dedfbdc6271460ca151d8ed75bc58af~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_1bc29d2226c14810bcf09ecf0ab0d500~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_dc9a2c6d92014d17bba6dc93759adc72~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_b4dfdb8eefe942eaabdba3b0476af0ab~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_5949a043e57940e5bf6f9cb7ac509af5~mv2.jpg",
  "https://static.wixstatic.com/media/517ef0_333feb6b63a241869ffe7fd4ef440350~mv2.jpg"
];



// ================= GLOBALS =================
let placed = [];
let angleX = 0, angleY = 0;
let targetX = 0, targetY = 0;

let cameraZ = 0;
let targetZ = -800;
let zoomSpeed = 0.15;

let palette = [
  "#A78F06", "#F9A47A",
  "#BB8CFE", "#FA7800",
  "#D4AC8E", "#D8F300",
  "#6BAADF"
];

// loading
let loadIndex = 0;
let LOAD_INTERVAL = 8;
let START_LOADING_AFTER = 5000;
let startTime;

// front group
let frontIndices = [];
let frontCount = 25;
let lastFrontChange = 0;
let frontChangeInterval = 1000;

// ================= SETUP =================
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  startTime = millis();

  // create placeholders immediately
  for (let i = 0; i < files.length; i++) {
    createPlaceholder();
  }
}

// ================= PLACEHOLDERS =================
function createPlaceholder() {
  let radius = 2400;
  let minDistance = 650;
  let attempts = 300;
  let pos = null;

  for (let i = 0; i < attempts; i++) {
    let theta = random(TWO_PI);
    let phi = random(PI);
    let r = random(radius * 0.35, radius);

    let x = r * sin(phi) * cos(theta);
    let y = r * sin(phi) * sin(theta);
    let z = r * cos(phi) * 0.65;

    let ok = true;
    for (let p of placed) {
      if (dist(x, y, z, p.x, p.y, p.z) < minDistance) {
        ok = false;
        break;
      }
    }

    if (ok) {
      pos = createVector(x, y, z);
      break;
    }
  }

  if (!pos) {
    pos = createVector(
      random(-radius, radius),
      random(-radius, radius),
      random(-radius, radius)
    );
  }

  let w = 220;
  let h = w / random(0.7, 1.4);

  placed.push({
    x: pos.x,
    y: pos.y,
    z: pos.z,
    w,
    h,
    img: null,
    color: color(random(palette)),
    alpha: 0,
    bgAlpha: 255,
    phase: random(TWO_PI)
  });

  if (frontIndices.length < frontCount) {
    frontIndices.push(placed.length - 1);
  }
}

// ================= IMAGE LOADING =================
function loadNextImage() {
  if (loadIndex >= files.length) return;

  const index = loadIndex;
  const file = files[index];
  loadIndex++;

  loadImage(file, img => {
    placed[index].img = img;
  });
}

// ================= DRAW =================
function draw() {
  background("#C3C3C3");

  // start loading AFTER delay
  if (
    millis() - startTime > START_LOADING_AFTER &&
    frameCount % LOAD_INTERVAL === 0
  ) {
    loadNextImage();
  }

  let speed = 0.025;
  targetX = map(mouseY, 0, height, -0.9, 0.9);
  targetY = map(mouseX, 0, width, -0.9, 0.9);
  angleX = lerp(angleX, targetX, 0.08);
  angleY = lerp(angleY, targetY, 0.08);

  cameraZ = lerp(cameraZ, targetZ, zoomSpeed);
  translate(0, 0, cameraZ);

  rotateX(angleX * speed * 300);
  rotateY(angleY * speed * 300);

  if (millis() - lastFrontChange > frontChangeInterval) {
    let removeIdx = floor(random(frontIndices.length));
    let newIdx;
    do {
      newIdx = floor(random(placed.length));
    } while (frontIndices.includes(newIdx));
    frontIndices[removeIdx] = newIdx;
    lastFrontChange = millis();
  }

  placed.sort((a, b) => a.z - b.z);

  for (let i = 0; i < placed.length; i++) {
    let p = placed[i];
    push();

    let breath = sin(frameCount * 0.02 + p.phase) * 20;
    translate(p.x, p.y, p.z + breath);

    rotateY(-angleY * speed * 300);
    rotateX(-angleX * speed * 300);

    let scaleFactor = map(p.z, -2500, 2500, 0.4, 1.45);
    scale(scaleFactor);

    let isFront = frontIndices.includes(i);
    p.alpha = lerp(p.alpha, isFront && p.img ? 255 : 0, 0.12);
    p.bgAlpha = lerp(p.bgAlpha, p.img ? 0 : 255, 0.12);

    // placeholder
    if (p.bgAlpha > 2) {
      fill(red(p.color), green(p.color), blue(p.color), p.bgAlpha);
      plane(p.w, p.h);
    }

    // image
    if (p.img && p.alpha > 2) {
      tint(255, p.alpha);
      texture(p.img);
      plane(p.w, p.h);
    }

    pop();
  }
}

// ================= INPUT =================
function mouseWheel(e) {
  targetZ += e.delta * 0.3;
  targetZ = constrain(targetZ, -2000, 500);
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

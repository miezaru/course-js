'use strict';

const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Error loading, image not found'));
    });
  });
};

const loadNPause = async function () {
  try {
    // Load img 1
    let img = await createImg('./img/img-1.jpg');
    console.log('Image 1 loaded successfully');
    await wait(2);
    img.style.display = 'none';

    // Load img 2
    img = await createImg('./img/img-2.jpg');
    console.log('Image 2 loaded successfully');
    await wait(2);
    img.style.display = 'none';

    // Load img 3
    img = await createImg('./img/img-3.jpg');
    console.log('Image 3 loaded successfully');
    await wait(2);
    img.style.display = 'none';
  } catch {
    console.error('Error loading');
  }
};

// loadNPause();

// PART 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImg(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch {
    console.error('Error loading');
  }
};

const testArr = ['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg'];

loadAll(testArr);

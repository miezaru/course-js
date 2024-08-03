'use strict';

/*
const imagesContainer = document.querySelector('.images');
let curImg = '';

const createImg = function (imgPath) {
  return new Promise(
    function (resolve) {
      const img = document.createElement('img');
      img.src = imgPath;
      curImg = img;
      return resolve(img);
    },
    function () {
      return new Error('Error loading');
    }
  );
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const loadImages = function () {
  createImg('./img/img-1.jpg')
    .then(img => {
      img.addEventListener('load', function () {
        imagesContainer.appendChild(img);
      });

      return wait(2);
    })
    .then(() => (curImg.style.display = 'none'))
    .then(() => createImg('./img/img-2.jpg'))
    .then(img => {
      img.addEventListener('load', function () {
        imagesContainer.appendChild(img);
      });

      return wait(2);
    })
    .then(() => (curImg.style.display = 'none'))
    .then(() => createImg('./img/img-3.jpg'))
    .then(img => {
      img.addEventListener('load', function () {
        imagesContainer.appendChild(img);
      });

      return wait(2);
    })
    .then(() => (curImg.style.display = 'none'));
};

loadImages();
 */

const imgContainer = document.querySelector('.images');
let currentImg;

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

createImg('./img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded successfully');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImg('./img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded successfully');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImg('./img/img-3.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 3 loaded successfully');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));

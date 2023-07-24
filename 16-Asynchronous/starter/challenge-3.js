'use strict';
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

// Part 1
const loadNPause = async function (imgPath) {
  try {
    const img = await createImage(imgPath);
    imgGlobal = img;
    await wait(2);
    imgGlobal.style.display = 'none';
    return;
  } catch (err) {
    console.error(`This is a manual error: ${err}`);
  }
};

/* (async function () {
  await loadNPause('./img/img-1.jpg');
  await loadNPause('./img/img-2.jpg');
  await loadNPause('./img/img-3.jpg');
})(); */

// Part 2

const data = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
const loadAll = async function (imgArr) {
  try {
    const imgs = await imgArr.map(async img => await createImage(img));
    const settle = await Promise.all(imgs);
    settle.forEach(el => (el.className = 'parallel'));
    console.log(settle);
  } catch (err) {
    console.error(err);
  }
};

loadAll(data);

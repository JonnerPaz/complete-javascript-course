'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const url = 'https://restcountries.com/v3.1/';

// new api url https://countries-api-836d.onrender.com/countries/

///////////////////////////////////////

const htmlTemplate = function (response, className = '') {
  const [data] = response;
  const languages = Object.values(data.languages);
  const [currencies] = Object.values(data.currencies);
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${data.population}</p>
        <p class="country__row"><span>🗣️</span>${languages.join(', ')}</p>
        <p class="country__row"><span>💰</span>${currencies.name}</p>
      </div>
    </article>        
`;
  // countriesContainer.style.opacity = 1;
  return countriesContainer.insertAdjacentHTML('beforeend', html);
};

const getCountryXmlhttp = function (country) {
  // first call
  const request = new XMLHttpRequest();
  request.open('GET', `${url}/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    htmlTemplate(data);

    // second call (neighbour)
    const neighbour = data.borders?.[0];

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `${url}/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      htmlTemplate(data, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('venezuela');

//////////////////////////////////////////////////////

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg}`);
    return response.json();
  });
};

const getCountryFetch = function (country) {
  getJSON(`${url}/name/${country}`, 'Country not found')
    .then(data => {
      htmlTemplate(data);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found');

      // second call
      return getJSON(`${url}/alpha/${neighbour}`, 'Country not found');
    })
    // chaining promises solves callback hell
    .then(data => htmlTemplate(data, 'neighbour'))
    .catch(err => renderError(`Something went wrong: ${err}`))
    .finally(() => (countriesContainer.style.opacity = 1));
};

// getCountryFetch('venezuela');

// btn.addEventListener('click', function () {
//   getCountryFetch('venezuela');
// });

// creating promises manually
/* const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening...');
  setTimeout(function () {
    const random = Math.random();
    // console.log(random);
    if (random >= 0.5) {
      resolve('You win');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 2000);
}); */

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};

/* wait(1)
  .then(() => {
    console.log('I waited for 1 second');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
  }); */

// Promisifying geolocation api
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // One way to do it
    /* navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(new Error(err))
    ); */

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

/* getPosition()
  .then(pos => console.log(pos))
  .catch(pos => console.error(pos)); */

const promis = new Promise((resolve, reject) => resolve('hola'));

// Async functions

const whereAmI2 = async function () {
  try {
    // Getting position
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;
    console.log(lat, lng);

    // Reverse geocoding
    const apiGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!apiGeo.ok) throw new Error('Problem getting location country');
    const dataGeo = await apiGeo.json();

    // Resolving data
    const res = await fetch(`${url}/name/${dataGeo.country}`);
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    htmlTemplate(data);
    countriesContainer.style.opacity = 1;
    // Same as above. Async - await are syntax suggar
    // fetch(`${url}/name/${country}`).then(res => console.log(res));
    return 'helol';
  } catch (err) {
    renderError(`There was an error: ${err}`);
    // Reject promise returned from async function
    throw err;
  }
};

// Old way
/* whereAmI2()
  .then(lol => console.log(lol))
  .catch(err => console.error(err)); */

// new way
/* (async function () {
  try {
    const executer = await whereAmI2();
    console.log(executer);
  } catch (err) {
    console.error(err);
  }
})(); */

const get3Countries = async function (c1, c2, c3) {
  try {
    /* const [data1] = await getJSON(`${url}/name/${c1}`);
    const [data2] = await getJSON(`${url}/name/${c2}`);
    const [data3] = await getJSON(`${url}/name/${c3}`); */

    // This way all request will run on parallel. receives and returns and array
    // If 1 of the promises rejects, all of them will reject as well
    const data = await Promise.all([
      getJSON(`${url}/name/${c1}`),
      getJSON(`${url}/name/${c2}`),
      getJSON(`${url}/name/${c3}`),
    ]);
    console.log(data.flatMap(country => country[0].capital));
  } catch (err) {
    console.error(err);
  }
};

// get3Countries('venezuela', 'peru', 'Brazil');

// Settle as soons as 1 of the request settles. Like Array.any
(async function () {
  // You only get an arr of 1 element of the following, not all of them
  const res = await Promise.race([
    getJSON(`${url}/name/italy`),
    getJSON(`${url}/name/venezuela`),
    getJSON(`${url}/name/argentina`),
  ]);
  console.log(res[0]);
});

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took to long'));
    }, s * 1000);
  });
};

/* Promise.race([getJSON(`${url}/name/argentina`), timeout(5)])
  .then(res => console.log(res))
  .catch(err => console.error(err)); */

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('1'),
  Promise.reject('2'),
  Promise.resolve('3'),
]).then(c => console.log(c));

// Promise.any
Promise.any([
  Promise.resolve('1'),
  Promise.reject('2'),
  Promise.resolve('3'),
]).then(c => console.log(c));

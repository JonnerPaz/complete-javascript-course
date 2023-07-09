'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// new api url https://countries-api-836d.onrender.com/countries/

///////////////////////////////////////

const getCountry = function (country) {
  const url = 'https://restcountries.com/v3.1/';
  const request = new XMLHttpRequest();
  request.open('GET', `${url}/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // Not calling functions
    //   console.log(this.responseText); // As request is being the event handler, no need to bind it
    const [data] = JSON.parse(this.responseText);
    const languages = Object.values(data.languages);
    const [currencies] = Object.values(data.currencies);

    const html = `
            <article class="country">
              <img class="country__img" src="${data.flags.png}" />
              <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${data.population}</p>
                <p class="country__row"><span>🗣️</span>${languages.join(
                  ', '
                )}</p>
                <p class="country__row"><span>💰</span>${currencies.name}</p>
              </div>
            </article>        
      `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountry('venezuela');
getCountry('portugal');
getCountry('portugal');

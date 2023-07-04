'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map, mapEvent;

// if user allows map tracking
if (navigator.geolocation) {
  // Recibes succesfull callback and error callback
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      const coords = [latitude, longitude];

      map = L.map('map').setView(coords, 15);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Handling clicks on map
      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus(); // Once the map is clicked, cursos will be focused here
      });
    },
    function () {
      alert('Could not get your position');
    }
  );
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // reseting inputs
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';

  // Display marker
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng], {
    riseOnHover: true,
  })
    .addTo(map)
    .bindPopup(
      L.popup({
        minWidth: 100,
        maxWidth: 250,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('workouts')
    .openPopup();
});

inputType.addEventListener('change', function (e) {
  inputElevation.closest('.form__row').classList.toggle('.form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('.form__row--hidden');
});

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

class App {
  #map;
  #mapEvent;

  constructor() {
    this.#getPosition(); // Due to constructor being called at create a new object

    // Attaching this to load once the object is created
    form.addEventListener('submit', this.#newWorkout.bind(this));
    inputType.addEventListener('change', this.#toggleElevationField); // this doesnt use bind because it is not using this in its function
  }

  #getPosition() {
    // if user allows map tracking
    if (navigator.geolocation) {
      // Recibes succesfull callback and error callback
      navigator.geolocation.getCurrentPosition(
        this.#loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
    }
  }

  #loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this.#showForm.bind(this));
  }

  #showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus(); // Once the map is clicked, cursos will be focused here
  }

  #toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('.form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('.form__row--hidden');
  }

  #newWorkout(e) {
    e.preventDefault();

    // reseting inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // Display marker
    const { lat, lng } = this.#mapEvent.latlng;
    L.marker([lat, lng], {
      riseOnHover: true,
    })
      .addTo(this.#map)
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
  }
}

const app = new App();

'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    // this.date = ...
    // this.id = ...
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()} - ${this.date.getHours()}:${this.date.getMinutes()}`;
  }

  click() {
    this.clicks++;
    console.log(this.clicks);
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

// ///////////////////////////////////////////////
// APPLICATION ARCHITECTURE

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const btnReset = document.querySelector('.btn__reset');
const inputTypeFilter = document.querySelector('.form__input--filter');
const inputSort = document.querySelector('.form__input--sort');
const btnMarkersAll = document.querySelector('.btn__show--markers');
const alertModal = document.querySelector('.alert__container');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.alert__btn');
const alertMessage = document.querySelector('.alert__header');

class App {
  #map;
  #mapZoomLevel = 14;
  #mapEvent;
  #workouts = [];
  #editingWorkout = null;

  #userCoords = null;
  #currentPath = null;
  constructor() {
    // Get user's position
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    // Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    btnReset.addEventListener('click', this.reset);
    inputTypeFilter.addEventListener('change', this._filterAndSort.bind(this));
    inputSort.addEventListener('change', this._filterAndSort.bind(this));
    btnMarkersAll.addEventListener('click', this._showAllMarkers.bind(this));
    btnCloseModal.addEventListener('click', this._hideAlert.bind(this));
    overlay.addEventListener('click', this._hideAlert.bind(this));
    this._filterAndSort();
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    this.#userCoords = coords;

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    this.#editingWorkout = null;
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    // Clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    this.#editingWorkout = null;
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    let originalWorkout;
    // Get data from form
    let lat, lng;

    if (this.#editingWorkout) {
      originalWorkout = this.#workouts.find(
        work => work.id === this.#editingWorkout
      );
      [lat, lng] = originalWorkout.coords;
    } else {
      ({ lat, lng } = this.#mapEvent.latlng);
    }

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;
    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        this._showAlert('Inputs have to be positive numbers!');
        return;
      }

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      // Check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        this._showAlert('Inputs have to be positive numbers!');
        return;
      }

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    ///////////////////////////////////////////////////

    if (this.#editingWorkout) {
      workout.id = originalWorkout.id;
      workout.date = originalWorkout.date;

      workout._setDescription();

      originalWorkout.marker.remove();

      this._renderWorkoutMarker(workout);

      const index = this.#workouts.findIndex(
        work => work.id === this.#editingWorkout
      );
      this.#workouts[index] = workout;
    } else {
      // Add new object to workout array
      this.#workouts.push(workout);

      // Render workout  on map as marker
      this._renderWorkoutMarker(workout);
    }

    // Render workout on list
    // this._renderWorkout(workout);
    this._filterAndSort();

    // Hide form + clear input fields
    this._hideForm();

    // Set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    workout.marker = L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <button class="workout__delete" data-id="${workout.id}">
            <img class="workout__delete--icon" src="bin.svg" alt="bin" />
          </button>
          <button class="workout__edit" data-id="${workout.id}">
            <img class="workout__edit--icon" src="edit.svg" alt="edit" />
          </button>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;
    if (workout.type === 'running')
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
        `;
    if (workout.type === 'cycling')
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
        `;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    if (e.target.closest('.workout__delete')) {
      this._deleteWorkout(workout.id);
      return;
    }

    if (e.target.closest('.workout__edit')) {
      this.#editingWorkout = workout.id;
      this._fillFormForEdit(workout);
      return;
    }

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    if (this.#currentPath) {
      this.#currentPath.remove();
    }

    if (this.#userCoords) {
      const lineCoords = [this.#userCoords, workout.coords];

      this.#currentPath = L.polyline(lineCoords, {
        color: 'grey',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10',
      }).addTo(this.#map);
    }

    this._hideForm();

    // using the public interface
    // workout.click();
  }

  _filterAndSort() {
    const filterValue = inputTypeFilter.value;
    const sortValue = inputSort.value;
    const cadenceOpt = document.querySelectorAll('.option--cadence');
    const elevationOpt = document.querySelectorAll('.option--elevation');
    cadenceOpt.forEach(opt => (opt.hidden = true));
    elevationOpt.forEach(opt => (opt.hidden = true));

    // filtering
    let filteredWorkouts = this.#workouts.slice();

    if (filterValue !== 'all') {
      filteredWorkouts = filteredWorkouts.filter(
        work => work.type === filterValue
      );
    }
    if (filterValue === 'running') {
      cadenceOpt.forEach(opt => (opt.hidden = false));
      elevationOpt.forEach(opt => (opt.hidden = true));
    }
    if (filterValue === 'cycling') {
      cadenceOpt.forEach(opt => (opt.hidden = true));
      elevationOpt.forEach(opt => (opt.hidden = false));
    }

    // sorting

    const [field, direction] = sortValue.split('_');

    const modifier = direction === 'desc' ? 1 : -1;

    filteredWorkouts.sort((a, b) => {
      if (field === 'date') {
        return (new Date(a.date) - new Date(b.date)) * modifier;
      }
      return (a[field] - b[field]) * modifier;
    });

    // if (sortValue === 'date_desc') {
    // filteredWorkouts.sort((a, b) => new Date(a.date) - new Date(b.date));
    //  // filteredWorkouts.sort((a, b) => a.date - b.date);
    // }
    // if (sortValue === 'date_asc') {
    //   // filteredWorkouts.sort((a, b) => new Date(a.date) - new Date(b.date));
    //   filteredWorkouts.sort((a, b) => b.date - a.date);
    // }
    // if (sortValue === 'distance_desc') {
    //   filteredWorkouts.sort((a, b) => a.distance - b.distance);
    // }
    // if (sortValue === 'distance_asc') {
    //   filteredWorkouts.sort((a, b) => b.distance - a.distance);
    // }
    // if (sortValue === 'duration_desc') {
    //   filteredWorkouts.sort((a, b) => a.duration - b.duration);
    // }
    // if (sortValue === 'duration_asc') {
    //   filteredWorkouts.sort((a, b) => b.duration - a.duration);
    // }
    // if (sortValue === 'cadence_desc') {
    //   filteredWorkouts.sort((a, b) => a.cadence - b.cadence);
    // }
    // if (sortValue === 'cadence_asc') {
    //   filteredWorkouts.sort((a, b) => b.cadence - a.cadence);
    // }
    // if (sortValue === 'elevation_desc') {
    //   filteredWorkouts.sort((a, b) => a.elevationGain - b.elevationGain);
    // }
    // if (sortValue === 'elevation_asc') {
    //   filteredWorkouts.sort((a, b) => b.elevationGain - a.elevationGain);
    // }
    // clearing and rendering
    this._clearWorkoutList();

    filteredWorkouts.forEach(work => this._renderWorkout(work));
  }

  _showAllMarkers() {
    const workoutCoords = this.#workouts.map(work => work.coords);
    if (workoutCoords.length === 0) return;
    this.#map.fitBounds(workoutCoords, {
      padding: [70, 70],
      animate: true,
      duration: 1,
    });
  }

  _clearWorkoutList() {
    document.querySelectorAll('.workout').forEach(el => el.remove());
  }

  _fillFormForEdit(workout) {
    form.classList.remove('hidden');
    inputType.value = workout.type;
    inputDistance.value = workout.distance;
    inputDuration.value = workout.duration;

    if (workout.type === 'running') {
      inputCadence.value = workout.cadence;
      inputElevation.closest('.form__row').classList.add('form__row--hidden');
      inputCadence.closest('.form__row').classList.remove('form__row--hidden');
    }

    if (workout.type === 'cycling') {
      inputElevation.value = workout.elevationGain;
      inputElevation
        .closest('.form__row')
        .classList.remove('form__row--hidden');
      inputCadence.closest('.form__row').classList.add('form__row--hidden');
    }
  }

  _deleteWorkout(id) {
    const workout = this.#workouts.find(work => work.id === id);
    if (workout && workout.marker) workout.marker.remove();
    this.#workouts = this.#workouts.filter(work => work.id !== id);
    if (this.#editingWorkout === id) {
      this._hideForm();
    }
    this._setLocalStorage();
    const element = document.querySelector(`[data-id="${id}"]`);
    if (element) element.remove();
  }

  _setLocalStorage() {
    const workoutsToSave = this.#workouts.map(work => {
      const workCopy = { ...work };

      delete workCopy.marker;
      return workCopy;
    });
    localStorage.setItem('workouts', JSON.stringify(workoutsToSave));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;

    this.#workouts = data.map(work => {
      let restoredWorkout;
      if (work.type === 'running') {
        restoredWorkout = new Running(
          work.coords,
          work.distance,
          work.duration,
          work.cadence
        );
      }
      if (work.type === 'cycling') {
        restoredWorkout = new Cycling(
          work.coords,
          work.distance,
          work.duration,
          work.elevationGain
        );
      }
      if (restoredWorkout) {
        restoredWorkout.id = work.id;
        restoredWorkout.date = new Date(work.date);
        restoredWorkout.clicks = work.clicks;
        return restoredWorkout;
      }
      return work;
    });
    // this.#workouts.forEach(work => this._renderWorkout(work));
  }

  _showAlert(msg) {
    alertMessage.textContent = msg;
    alertModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }

  _hideAlert() {
    alertModal.classList.add('hidden');
    overlay.classList.add('hidden');
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();

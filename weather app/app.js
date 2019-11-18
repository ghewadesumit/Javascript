const forecast =  new Forecast();
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    // update details template
    console.log('data is',data);
    const { cityDets, weather } = data;
    details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    //ternary Operator
    let timesrc = weather.IsDayTime ? 'img/day.svg': 'img/night.svg';

    let weatherIcon = `img/icons/${weather.WeatherIcon}.svg`;
    time.setAttribute('src',timesrc);
    icon.setAttribute('src',weatherIcon);
    console.log(data);
}

cityForm.addEventListener('submit', (oEvent) => {
    oEvent.preventDefault();
    const city = cityForm.city.value.trim();
    console.log(city);
    cityForm.reset();
    forecast.updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    //
    localStorage.setItem('city',city);

})

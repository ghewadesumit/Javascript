class Forecast{
    constructor(){
        this.key = '4XwbjtLDzsq9YbIS4FfTCU67d6I0nYnI';
        this.weatherURI = "http://dataservice.accuweather.com/currentconditions/v1/";
        this.cityURI = "http://dataservice.accuweather.com/locations/v1/cities/search";
    }

    async updateCity(city){
        console.log('Inside update city');
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return { cityDets, weather }
    }
    //Get City Information
    async getCity(city){
        console.log('Inside get city');

        const query = `?apikey=${this.key}&q=${city}`;

        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        console.log(data);
        return data[0];
    }

async getWeather(id){
    const query = `${id}?apikey=${this.key}`;

    const response = await fetch(this.weatherURI + query);
    const weatherData = await response.json();
    return weatherData[0];
}

}
 // const searchForm = document.querySelector('.change-location');

// searchForm.addEventListener('submit',(oEvent)=>{
//     oEvent.preventDefault();
//     const city = searchForm.city.value.trim();
//     searchForm.reset();
//     console.log(city);
//     getCity(city)
//     .then(data => {
//         console.log('Weather Id is',data);
//         return getWeather(data);
//     })
//     .then(data => console.log('Weather for data is',data))
//     .catch(err => console.log(err));
// })

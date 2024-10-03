const urls = ['https://api.open-meteo.com/v1/forecast?latitude=58.026795&longitude=7.436844&current_weather=true','https://api.open-meteo.com/v1/forecast?latitude=58.819667&longitude=7.472926&current_weather=true',
    'https://api.open-meteo.com/v1/forecast?latitude=71.170694&longitude=25.783975&current_weather=true','https://api.open-meteo.com/v1/forecast?latitude=60.789705&longitude=10.681352&current_weather=true',
'https://api.open-meteo.com/v1/forecast?latitude=60.376357&longitude=5.316981&current_weather=true']


async function getData() {


    try {
        const fetchweather = urls.map(url => fetch(url).then(response => response.json()));

        const results = await Promise.all(fetchweather);

        console.log(results);

        data = results

    } catch (error) {
        console.error("Noe gikk galt", error.message);
    }
}

async function newWeather(){
        await getData();
        console.log(data);

        const Mandal = document.getElementById("Mandal");
        const Bortelid = document.getElementById("Bortelid");
        const Nordkapp = document.getElementById("Nordkapp");
        const Gjovik = document.getElementById("Gjovik");
        const Bergen = document.getElementById("Bergen");

        Mandal.textContent = "Temperature: " + data[0].current_weather.temperature;
        Bortelid.textContent = "Temperature: " + data[1].current_weather.temperature;
        Nordkapp.textContent = "Temperature: " + data[2].current_weather.temperature;
        Gjovik.textContent = "Temperature: " + data[3].current_weather.temperature;
        Bergen.textContent = "Temperature: " + data[4].current_weather.temperature;



}
newWeather();
setInterval(newWeather, 10000);

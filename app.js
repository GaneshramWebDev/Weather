let valuesearchs=document.querySelector('.valueSearch');
let city=document.getElementById('city');
let temp=document.querySelector('.temperature');
let desc=document.querySelector('.description');
let clouds=document.getElementById('clouds');
let humidity=document.getElementById('Humidity');
let pressure=document.getElementById('Pressure');
let form=document.querySelector('form');
let fig=document.querySelector('.caption');
let symbol=document.querySelector('.flagyy');
let symbol2=document.querySelector('.flaggy2');
let span=document.querySelector('.numy');
let main=document.querySelector('main');


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(valuesearchs.value.trim() !==""){
    searchWeather();
    }
})


let id= 'e667cbfa99f9cf51d9ef134f01acd772';
let url='https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
const searchWeather =()=>{
    fetch(url + '&q=' + valuesearchs.value)
    .then(responsive => responsive.json())
    .then(data => {
        console.log(data);
        if(data.cod===200){
            fig.innerText=data.name;
            symbol.src=`https://flagsapi.com/${data.sys.country}/shiny/32.png`;
            symbol2.src='https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png';
            span.innerHTML = `${data.main.temp} <i class="fa-solid fa-c"></i>`;
            desc.innerText = data.weather[0].description;
                clouds.innerText = data.clouds.all;
                humidity.innerText = data.main.humidity;
                pressure.innerText = data.main.pressure; 

        }else{
            main.classList.add('error');
            setTimeout(() => {
               main.classList.remove('error'); 
            }, 1000);
        }
        
    })
}

window.onload=()=>{
gsap.fromTo('main',
    {x:-300,opacity:0},
    {x:0,opacity:1,duration:2,ease:'power2.out'}
);
};
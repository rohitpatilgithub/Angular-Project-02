import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormsModule } from '@angular/forms';
import { Weather } from '../../models/class/weatherClass';
import gsap from 'gsap';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  private weatherSubscription: Subscription | undefined;
  data: any[] = [];
  weatherData: Weather = new Weather();
  city = 'Pune';
  val = 'C';

  constructor(private weatherService: WeatherService) {}
  
  onCityChange() {
    this.fetchWeather();
  }

  fetchWeather(){
    this.weatherService.getWeather(this.city).subscribe(
      (data:any)=>{
        this.weatherData.city = data.location.name;
        this.weatherData.region = data.location.region;
        this.weatherData.country = data.location.country;
        this.weatherData.temperatureC = data.current.temp_c;
        this.weatherData.temperatureF = data.current.temp_c;
        this.weatherData.condition = data.current.condition.text;
        this.weatherData.iconUrl = `https:${data.current.condition.icon}`;
        this.weatherData.humidity = data.current.humidity;
        this.weatherData.windSpeed = data.current.wind_kph;

        if (data && data.location && data.location.localtime) {
          const [rawDate, rawTime] = data.location.localtime.split(' '); // Split "YYYY-MM-DD HH:MM"
          this.weatherData.date = rawDate; // Assign date
          this.weatherData.time = rawTime; // Assign time
        }
    },
    (error) => {
      console.error('Error fetching weather:', error);
    })
  }

  fetchTemp(){
    if(this.val === 'C'){
      console.log("Celcius")
    } else if(this.val === 'F'){
      console.log("Farenhite")
    }
    else{
      console.log("Void")
    }
  }

  // fetchWeather() {
  //   this.weatherSubscription = this.weatherService
  //     .getWeather(this.city)
  //     .subscribe({
  //       next: (data: any) => {
  //         this.weatherData.city = data.location.name;
  //         this.weatherData.region = data.location.region;
  //         this.weatherData.country = data.location.country;
  //         this.weatherData.temperature = data.current.temp_c;
  //         this.weatherData.condition = data.current.condition.text;
  //         this.weatherData.iconUrl = `https:${data.current.condition.icon}`;
  //         this.weatherData.humidity = data.current.humidity;
  //         this.weatherData.windSpeed = data.current.wind_kph;

  //         if (data?.location?.localtime) {
  //           const [rawDate, rawTime] = data.location.localtime.split(' ');
  //           this.weatherData.date = rawDate;
  //           this.weatherData.time = rawTime;
  //         }
  //       },
  //       error: (error) => {
  //         console.error('Error fetching weather:', error);
  //       },
  //       complete: () => {
  //         console.log('Weather fetch complete.');
  //       },
  //     });
  // }

  ngOnInit(): void {
    this.fetchWeather();
    var tl = gsap.timeline();
    tl.from('#container', {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 1,
    });
    tl.from('#nav h1', {
      opacity: 0,
      y: -10,
      duration: 1,
      stagger: 0.5,
    });
    tl.from('#content1 h1, #content1 select, #content1 h2, #content1 input', {
      opacity: 0,
      y: -10,
      duration: 1,
      stagger: 0.5,
    });
    tl.from('#content2 p', {
      opacity: 0,
      x: 50,
      duration: 0.6,
      stagger: 0.5,
    });
  }

  // ngOnDestroy() {
  //   this.weatherSubscription?.unsubscribe();
  // }
}

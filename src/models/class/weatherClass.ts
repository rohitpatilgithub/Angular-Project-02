export class Weather {
  city: string;
  region: string;
  country: string;
  temperatureC: number;
  temperatureF: number;
  condition: string;
  iconUrl: string;
  humidity: number;
  windSpeed: number;
  date:string;
  time:string

  constructor() {
    this.city = '';
    this.region = '';
    this.country = '';
    this.temperatureC = 0;
    this.temperatureF = 0;
    this.condition = '';
    this.iconUrl = '';
    this.humidity = 0;
    this.windSpeed = 0;
    this.date = '';
    this.time = ''
  }
}
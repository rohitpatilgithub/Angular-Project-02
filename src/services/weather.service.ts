import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from '../environments/environment/';
import { environment } from '../environments/environment.development';
import { weatherResponse } from '../models/interface/weatherResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private http = inject(HttpClient);

  getWeather(city:string):Observable<weatherResponse>{
    const url = `${environment.API_URL}${city}`
    return this.http.get<weatherResponse>(url);
  }
}
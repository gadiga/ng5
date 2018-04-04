import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

/**
 * REST API provider is openweathermap.org
 */
@Injectable()
export class WeatherService {

  private dailyUrl: string = "http://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1";

  constructor(private _http: HttpClient) { }

  dailyForecast() {
    return this._http.get(this.dailyUrl)
        .map(result => result);
  }

}

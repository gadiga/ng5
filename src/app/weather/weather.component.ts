import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../weather.service";
import { Chart } from 'chart.js';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  chart = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.dailyForecast()
        .subscribe(res => {
          console.log(res);
          let temp_min = res['list'].map(resp => resp.temp.max);
          let temp_max = res['list'].map(resp => resp.temp.min);
          let allDates = res['list'].map(resp => resp.dt);

          let weatherDates = [];
          allDates.forEach(dt => {
            let jsDate = new Date(dt * 1000);
            weatherDates.push(jsDate.toLocaleTimeString("en", {year: "numeric", month: "short", day: "numeric"}));
          });

          this.chart = new Chart("canvas", {
            type: "line",
            data: {
              labels: weatherDates,
              datasets: [
                {
                  data: temp_max,
                  borderColor: "#3cba9f",
                  fill: false
                },
                {
                  data: temp_min,
                  borderColor: "#ff0000",
                  fill: false
                }
              ]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [
                  {display: true}
                ],
                yAxes: [
                  {display: true}
                ]
              }
            }
          });
        });
  }

}

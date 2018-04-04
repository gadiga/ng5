import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {WeatherComponent} from "./weather/weather.component";

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"about/:id", component: AboutComponent},
  {path:"weather", component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

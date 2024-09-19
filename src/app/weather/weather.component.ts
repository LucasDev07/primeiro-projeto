import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { FormBuilder, ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  
  constructor(private builder: FormBuilder, private weatherService: WeatherService) { }

  locationsForm = this.builder.group({
    city: ['',Validators.required]

  })

  weatherData: any;
  locations: any;
  selectedLocation: any;


  obterRegioes() {

    let city = String(this.locationsForm.get('city')?.value);

    /*subscrive: é usado para se inscrever em um Observable. 
    Isso permite que sejam recebidas notificações assíncronas quando 
    o Observable emite novos valores, 
    encontra um erro ou completa sua execução.*/
    this.weatherService.getLatLon(city).subscribe(data => {

      this.locations = data;
      
      console.log(data);
    })
  }

  obterClima(location: any) {

    this.selectedLocation = location;

    this.weatherService.getWeather(location.lat, location.lon).subscribe(data => {
        this.weatherData = data;

        console.log(data);
    })
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

  name:string = "Diego"
  car = {
    name: "320 BMW Brabona",
    year: 2024,
    brand: "bmw"

  }


}

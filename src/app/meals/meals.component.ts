import { Component } from '@angular/core';
import { NavbarMealsComponent } from "../navbar-meals/navbar-meals.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-meals',
  imports: [RouterOutlet , NavbarMealsComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css'
})
export class MealsComponent {


}
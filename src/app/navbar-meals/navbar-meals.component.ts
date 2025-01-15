import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type mealsTypes = 'seafood'|'pasta'|'breakfast';

@Component({
  selector: 'app-navbar-meals',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-meals.component.html',
  styleUrl: './navbar-meals.component.css'
})
export class NavbarMealsComponent {

}

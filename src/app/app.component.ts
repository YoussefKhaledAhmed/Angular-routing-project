import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from "./home/home.component";
// import { AboutComponent } from "./about/about.component";
// import { BreakfastComponent } from "./breakfast/breakfast.component";
// import { MealsComponent } from "./meals/meals.component";
// import { TeamComponent } from "./team/team.component";
// import { ContactsComponent } from "./contacts/contacts.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , NavbarComponent , FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-second-assignment';
}

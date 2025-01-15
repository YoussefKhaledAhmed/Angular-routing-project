import { Component, Input } from '@angular/core';
import { MealInterface } from '../models/meal.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
 @Input({required: true}) meal:MealInterface = {} as MealInterface;
}

import { Component, Input } from '@angular/core';
import { TeamChildComponent } from "../team-child/team-child.component";

@Component({
  selector: 'app-team',
  imports: [TeamChildComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  @Input() parentVar: boolean = true;
}

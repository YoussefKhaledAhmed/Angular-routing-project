import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-team-child',
  imports: [],
  templateUrl: './team-child.component.html',
  styleUrl: './team-child.component.css'
})
export class TeamChildComponent {
  ParentAppearDisAppear: boolean = false;
  @Output() childEvent: EventEmitter<boolean> = new EventEmitter();
  sendVal(){
    if(this.ParentAppearDisAppear){
      this.childEvent.emit(this.ParentAppearDisAppear);
      this.ParentAppearDisAppear = false;
    }else{
      this.childEvent.emit(this.ParentAppearDisAppear);
      this.ParentAppearDisAppear = true;   
    }
    
  }
}

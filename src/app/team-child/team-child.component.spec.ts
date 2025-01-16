import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamChildComponent } from './team-child.component';

describe('TeamChildComponent', () => {
  let component: TeamChildComponent;
  let fixture: ComponentFixture<TeamChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMealsComponent } from './navbar-meals.component';

describe('NavbarMealsComponent', () => {
  let component: NavbarMealsComponent;
  let fixture: ComponentFixture<NavbarMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarMealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

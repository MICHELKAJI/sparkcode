import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModaleComponent } from './menu-modale.component';

describe('MenuModaleComponent', () => {
  let component: MenuModaleComponent;
  let fixture: ComponentFixture<MenuModaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuModaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuModaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

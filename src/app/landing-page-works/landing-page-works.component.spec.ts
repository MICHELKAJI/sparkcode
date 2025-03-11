import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageWorksComponent } from './landing-page-works.component';

describe('LandingPageWorksComponent', () => {
  let component: LandingPageWorksComponent;
  let fixture: ComponentFixture<LandingPageWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageWorksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

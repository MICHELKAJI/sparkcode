import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSectionPageLandingComponent } from './service-section-page-landing.component';

describe('ServiceSectionPageLandingComponent', () => {
  let component: ServiceSectionPageLandingComponent;
  let fixture: ComponentFixture<ServiceSectionPageLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceSectionPageLandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceSectionPageLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannarSectionProjectComponent } from './bannar-section-project.component';

describe('BannarSectionProjectComponent', () => {
  let component: BannarSectionProjectComponent;
  let fixture: ComponentFixture<BannarSectionProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannarSectionProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannarSectionProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageBlogComponent } from './landing-page-blog.component';

describe('LandingPageBlogComponent', () => {
  let component: LandingPageBlogComponent;
  let fixture: ComponentFixture<LandingPageBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

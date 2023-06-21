import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingRightContainerComponent } from './onboarding-right-container.component';

describe('OnboardingRightContainerComponent', () => {
  let component: OnboardingRightContainerComponent;
  let fixture: ComponentFixture<OnboardingRightContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingRightContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingRightContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

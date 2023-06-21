import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingLeftContainerComponent } from './onboarding-left-container.component';

describe('OnboardingLeftContainerComponent', () => {
  let component: OnboardingLeftContainerComponent;
  let fixture: ComponentFixture<OnboardingLeftContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingLeftContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingLeftContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-onboarding-right-container',
  templateUrl: './onboarding-right-container.component.html',
  styleUrls: ['./onboarding-right-container.component.scss'],
})
export class OnboardingRightContainerComponent implements OnInit {
  signUpForm!: FormGroup;
  label = 'Submit';
  isButtonDisabled$!: Observable<boolean>;

  ngOnInit(): void {}

  functioncall(event: any): void {
    console.log('signup form', this.signUpForm);
    if (this.signUpForm.valid) {
      console.log('User created');
    } else {
      console.log('Form invalid');
    }
  }
}

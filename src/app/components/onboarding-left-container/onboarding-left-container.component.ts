import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-onboarding-left-container',
  templateUrl: './onboarding-left-container.component.html',
  styleUrls: ['./onboarding-left-container.component.scss'],
})
export class OnboardingLeftContainerComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() caseKeys!: string;
  case: string;

  constructor() {
    // Assign default values to the properties if necessary
    this.title = '';
    this.subtitle = '';
    this.caseKeys = '';
    this.case = '';
  }
  ngOnInit(): void {
    if (this.caseKeys == 'login') {
      this.case = 'If you don’t have an account register';
    } else {
      this.case = 'If you already have an account ';
    }
  }
}

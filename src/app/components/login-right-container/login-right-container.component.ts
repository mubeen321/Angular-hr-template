import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-right-container',
  templateUrl: './login-right-container.component.html',
  styleUrls: ['./login-right-container.component.scss'],
})
export class LoginRightContainerComponent implements OnInit {
  label = 'Login';

  constructor() {}

  ngOnInit(): void {}

  functioncall(event: any): void {
    console.log('signin form');
  
  }
}

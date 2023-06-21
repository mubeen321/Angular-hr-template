import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hr-dashboard';
  status = false;
addToggle()
{
  this.status = !this.status;       
}

}

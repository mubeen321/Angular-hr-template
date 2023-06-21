import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navOptions = [
    {
      text: 'Home',
      href: '/',
      isActive: true,
    },
    {
      text: 'Contact',
      href: '/login',
      isActive: false,
    },
    {
      text: 'About',
      href: '/about',
      isActive: false,
    },
    {
      text: 'Pricing',
      href: '/pricing',
      isActive: false,
    },
  ];

  activeNavOption = this.navOptions[0];

  ngOnInit() {
    this.navOptions.forEach((navOption) => {
      navOption.isActive = navOption === this.activeNavOption;
    });
  }

  onNavOptionClick(navOption: any) {
    this.activeNavOption = navOption;
    this.navOptions.forEach((navOption) => {
      navOption.isActive = navOption === this.activeNavOption;
    });
  }
}

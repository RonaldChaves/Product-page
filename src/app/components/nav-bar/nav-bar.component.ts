import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  collapse(): any {

    if (this.show == true)
      return this.show = false;

    if (this.show == false)
      return this.show = true;
  }

}

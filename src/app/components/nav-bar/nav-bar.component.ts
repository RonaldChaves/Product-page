import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  show: boolean = false;
  isSticky: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  collapse(): void {
    this.show = !this.show;
  }

  //function to add 'fixed' class at navbar
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isSticky = scrollTop > 100; // Altere '100' para o valor desejado
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brownie',
  templateUrl: './brownie.component.html',
  styleUrl: './brownie.component.css'
})
export class BrownieComponent {
 
  @Input()
  id: string = '';
  @Input()
  type: string = '';
}

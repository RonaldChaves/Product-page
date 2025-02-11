import { Component, Input, OnInit } from '@angular/core';
import { dataBakery } from '../../data/data'
import { Bakery } from '../../models/dataBakery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  @Input()
  id: string = '';
  @Input()
  type: string = '';
  @Input()
  text: string = '';
  @Input()
  title: string = '';
  @Input()
  subtitle: string = '';
  @Input()
  img: string = '';

  data: Bakery = [{ id: '', type: '', text: '', title: '', subtitle: '', img: '' },
  { id: '', type: '', text: '', title: '', subtitle: '', img: '' },
  { id: '', type: '', text: '', title: '', subtitle: '', img: '' },
  { id: '', type: '', text: '', title: '', subtitle: '', img: '' },
  { id: '', type: '', text: '', title: '', subtitle: '', img: '' },
  { id: '', type: '', text: '', title: '', subtitle: '', img: '' },
  ]

  ngOnInit() {
    this.setValues();
  }

  setValues() {
    const result = dataBakery.map(article => article);

    for (let i = 0; i < this.data.length; i++) {
      this.data[i].id = result[i].id;
      this.data[i].type = result[i].type;
      this.data[i].text = result[i].text;
      this.data[i].title = result[i].title;
      this.data[i].subtitle = result[i].subtitle;
      this.data[i].img = result[i].img;
    }
  }
}

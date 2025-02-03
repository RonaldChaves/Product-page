import { Component, OnInit } from '@angular/core';
import { dataBakery } from '../../data/data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-components-page',
  templateUrl: './components-page.component.html',
  styleUrl: './components-page.component.css'
})
export class ComponentsPageComponent implements OnInit {

  idData: string = '';
  typeData: string = '';
  stockData: string = '';
  textData: string = '';
  titleData: string = '';
  subtiltleData: string = '';
  imgData: string = '';
  descriptionData: string = '';

  private type: string | null = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    var TYPE = this.type;
    this.route.paramMap.subscribe(value => TYPE = value.get("type"));

    this.setValuesToComponent(TYPE);
  }

  setValuesToComponent(type: string | null) {
    const result = dataBakery.filter(article => article.type == type)[0];

    this.idData = result.id;
    this.typeData = result.type;
    this.stockData = result.stock;
    this.textData = result.text;
    this.titleData = result.title;
    this.subtiltleData = result.subtitle;
    this.descriptionData = result.description;
    this.imgData = result.img;
  }


}

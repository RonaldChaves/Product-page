import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  ngOnInit() { }

  constructor() { }

  returnTextInput(name: string, mail: string, subject: string, mensage: string): void {
    var nameInput: HTMLInputElement | null | any = document.querySelector('.nameInput');
    var mailInput: HTMLInputElement | null | any = document.querySelector('.emailInput');
    var subjectInput: HTMLInputElement | null | any = document.querySelector('.subjectInput');
    var mensageInput: HTMLInputElement | null | any = document.querySelector('.mensageInput');

    console.log(`name: ${name} \n email: ${mail} \n Subject: ${subject} \n Mensage: ${mensage}`);

    nameInput.value = '';
    mailInput.value = '';
    subjectInput.value = '';
    mensageInput.value = '';
  }
}

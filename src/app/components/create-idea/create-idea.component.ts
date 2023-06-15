import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.component.html',
  styleUrls: ['./create-idea.component.scss'],
})
export class CreateIdeaComponent implements OnInit {
  dynamicVar = '';
  ideaForm = new FormGroup({
    title: new FormControl<string>(this.dynamicVar, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  submit() {
    console.log(this.ideaForm.value);
  }
}

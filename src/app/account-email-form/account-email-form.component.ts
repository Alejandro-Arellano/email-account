import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-email-form',
  templateUrl: './account-email-form.component.html',
  styleUrls: ['./account-email-form.component.less']
})
export class AccountEmailFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  submit(){

  }

  ngOnInit(): void {
  }

}

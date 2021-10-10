import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(private utilService: UtilService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      emailAddress: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  submitForm(): void {

  }

}

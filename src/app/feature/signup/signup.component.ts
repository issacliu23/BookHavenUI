import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/http-services/user.service';
import { UtilService } from 'src/app/services/util.service';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(private utilService: UtilService, private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      emailAddress: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  submitForm(): void {
    if(this.password?.value === this.confirmPassword?.value) {
      let user: AppUser = new AppUser();
      user.email = this.email?.value;
      user.password = this.password?.value;
      this.userService.register(user).subscribe(data => {
        if(data) {
          alert("User has successfully signed up");
          this.utilService.openDialog(LoginDialogComponent,'auto',user);
        }
      });
    }
   
  }


  get email() {
    return this.signupForm.get('emailAddress');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

}

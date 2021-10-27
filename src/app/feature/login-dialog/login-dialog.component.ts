import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppUser } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/http-services/user.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  loginForm: FormGroup;
  hidePassword: boolean = true;
  constructor(private userService: UserService, private utilService: UtilService, private formBuilder:FormBuilder, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    if(this.data) {
      this.loginForm.get('email')?.setValue(this.data.email);
    }
  }
 
  login() {
    let user: AppUser = new AppUser();
    user.email =  this.loginForm.get('email')?.value;
    user.password = this.loginForm.get('password')?.value;
    console.log(user);
    this.userService.login(user).subscribe(data => {
      if(data.access_token) {
        this.utilService.storeToken(data.access_token);
        this.utilService.storeSessionItem('username', user.email);
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
        // this.utilService.closeDialog();
      }
    })
  }

 
}

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private utilService: UtilService) {
   }

  ngOnInit(): void {
  }

}

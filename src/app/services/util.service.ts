import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ComponentType } from '@angular/cdk/portal';
import { Router } from "@angular/router";
import { AppUser } from "../core/models/user.model";

/**
 * Injectable decorator
 */
@Injectable()
/**
 * class to handle all utilities need application wide
 */
export class UtilService {

  constructor(private dialog: MatDialog) { }

  openDialog(dialogComponent: ComponentType<any>, width?: string, data?: any): MatDialogRef<any, any> {
    const config = {
      width: width? width:'auto',
      closeOnNavigation: true,
      data: data
    };
   
    return this.dialog.open(dialogComponent, config);
  }

  closeDialog = () => {
    return this.dialog.closeAll();
  }

  storeSessionItem(key: any, value: any) {
    sessionStorage.setItem(key, value);
  }

  getSessionItem(key: any) {
    return sessionStorage.getItem(key);
  }

  storeToken(token: any) {
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }


}

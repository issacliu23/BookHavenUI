import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ComponentType } from '@angular/cdk/portal';
import { Router } from "@angular/router";

/**
 * Injectable decorator
 */
@Injectable()
/**
 * class to handle all utilities need application wide
 */
export class UtilService {

  constructor(private dialog: MatDialog) { }

  openDialog(dialogComponent: ComponentType<any>, width?: string): MatDialogRef<any, any> {
    const config = {
      width: width? width:'auto',
      closeOnNavigation: true

    };
   
    return this.dialog.open(dialogComponent, config);
  }

  closeDialog = () => {
    return this.dialog.closeAll();
  }


}

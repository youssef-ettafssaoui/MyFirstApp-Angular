import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';



@NgModule({
  declarations: [
    // This component will be accessible from other components declared in the same module.
    AuthModalComponent
  ],
  imports: [
    CommonModule
  ],
  // The exports option is an array of components
  exports: [
    AuthModalComponent
  ]
})
export class UserModule { }

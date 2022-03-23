import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountEmailFormComponent } from './account-email-form/account-email-form.component';

const routes: Routes = [
  { path: '', component: AccountEmailFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

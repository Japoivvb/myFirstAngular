import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { AltaUserComponent } from './alta-user/alta-user.component';

const routes: Routes = [
  {path:'',component: IniciComponent}, 
  {path:'alta',component: AltaUserComponent},
  {path:'alta/:nomUser',component: AltaUserComponent}
  // { path: '**', component: AppComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',loadChildren:()=>import('./Pages/home/home.module').then(m=>m.HomeModule)},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'projects',loadChildren:()=>import('./Pages/projects/projects.module').then(m=>m.ProjectsModule)},
  {path:'services',loadChildren:()=>import('./Pages/services/services.module').then(m=>m.ServicesModule)},
  {path:'experience',loadChildren:()=>import('./Pages/experience/experience.module').then(m=>m.ExperienceModule)},
  {path:'contact',loadChildren:()=>import('./Pages/contact/contact.module').then(m=>m.ContactModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

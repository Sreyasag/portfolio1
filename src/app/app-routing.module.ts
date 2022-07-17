import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './content/projects/projects.component';
import { ServicesComponent } from './content/services/services.component';
import { TestimonyComponent } from './content/testimony/testimony.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'', component:ServicesComponent},
  {path:'projects',component:ProjectsComponent },
  {path:'testimony', component:TestimonyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

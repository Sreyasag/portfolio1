import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { ServicesComponent } from './content/services/services.component';
import { TestimonyComponent } from './content/testimony/testimony.component';
import { MainComponent } from './main/main.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: ServicesComponent },
      { path: 'testimony', component: TestimonyComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  { path: 'projects', component: ProjectComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

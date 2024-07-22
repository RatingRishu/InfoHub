import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'content', component: ContentBodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './body/body.component';
import { FrontendTopicsComponent } from './frontend-topics/frontend-topics.component';
import { AngularComponent } from './FrontendTopics/angular/angular.component';
import { HtmlComponent } from './FrontendTopics/html/html.component';
import { CssComponent } from './FrontendTopics/css/css.component';
import { BootstrapComponent } from './FrontendTopics/bootstrap/bootstrap.component';
import { JavascriptComponent } from './FrontendTopics/javascript/javascript.component';
import { ReactComponent } from './FrontendTopics/react/react.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'content', component: ContentBodyComponent},
  {path: 'frontendTopics', component: FrontendTopicsComponent},
  {path: 'frontendTopics/angular', component: AngularComponent},
  {path: 'frontendTopics/html', component: HtmlComponent},
  {path: 'frontendTopics/css', component: CssComponent},
  {path: 'frontendTopics/bootstrap', component: BootstrapComponent},
  {path: 'frontendTopics/javascript', component: JavascriptComponent},
  {path: 'frontendTopics/react', component: ReactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

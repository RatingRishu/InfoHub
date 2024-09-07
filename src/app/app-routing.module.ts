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
import { BackendTopicsComponent } from './backend-topics/backend-topics.component';
import { WebapiComponent } from './BackendTopics/webapi/webapi.component';
import { DatabaseComponent } from './BackendTopics/database/database.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ParentOnchangeComponent } from './life-cycle-hooks/parent-onchange/parent-onchange.component';
import { ChildOnchangeComponent } from './life-cycle-hooks/child-onchange/child-onchange.component';
import { LibrariesTopicComponent } from './libraries-topic/libraries-topic.component';
import { AOSComponent } from './Libraries-Topics/aos/aos.component';
import { PrimeNgComponent } from './Libraries-Topics/prime-ng/prime-ng.component';
import { MatterJsComponent } from './Libraries-Topics/matter-js/matter-js.component';
import { G2PlotComponent } from './Libraries-Topics/g2-plot/g2-plot.component';
import { ThreeJsComponent } from './Libraries-Topics/three-js/three-js.component';
import { GASPComponent } from './Libraries-Topics/gasp/gasp.component';
import { PlacementPrepComponent } from './placement-prep/placement-prep.component';
import { CloudComputingComponent } from './cloud-computing/cloud-computing.component';
import { MongoDBComponent } from './BackendTopics/mongo-db/mongo-db.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'content', component: ContentBodyComponent},
  {path: 'frontend', component: FrontendTopicsComponent},
  {path: 'frontend/angular', component: AngularComponent},
  {path: 'frontend/html', component: HtmlComponent},
  {path: 'frontend/css', component: CssComponent},
  {path: 'frontend/bootstrap', component: BootstrapComponent},
  {path: 'frontend/javascript', component: JavascriptComponent},
  {path: 'frontend/react', component: ReactComponent},
  {path: 'backend', component: BackendTopicsComponent},
  {path: 'backend/webapi', component: WebapiComponent},
  {path: 'backend/database', component: DatabaseComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'parent', component: ParentOnchangeComponent},
  {path: 'child', component: ChildOnchangeComponent},
  {path: 'librariestopics', component: LibrariesTopicComponent},
  {path: 'librariestopics/aos', component: AOSComponent},
  {path: 'librariestopics/primeng', component: PrimeNgComponent},
  {path: 'librariestopics/matterjs', component: MatterJsComponent},
  {path: 'librariestopics/g2plot', component: G2PlotComponent},
  {path: 'librariestopics/threejs', component: ThreeJsComponent},
  {path: 'librariestopics/gasp', component: GASPComponent},
  {path: 'placementprep' , component: PlacementPrepComponent},
  {path: 'cloudcomputing' , component: CloudComputingComponent},
  {path: 'backend/mongodb' , component: MongoDBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

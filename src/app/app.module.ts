import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { ContentBodyComponent } from './content-body/content-body.component';
import { FrontendTopicsComponent } from './frontend-topics/frontend-topics.component';
import { HtmlComponent } from './FrontendTopics/html/html.component';
import { AngularComponent } from './FrontendTopics/angular/angular.component';
import { ReactComponent } from './FrontendTopics/react/react.component';
import { JavascriptComponent } from './FrontendTopics/javascript/javascript.component';
import { CssComponent } from './FrontendTopics/css/css.component';
import { BootstrapComponent } from './FrontendTopics/bootstrap/bootstrap.component';
import { BackendTopicsComponent } from './backend-topics/backend-topics.component';
import { WebapiComponent } from './BackendTopics/webapi/webapi.component';
import { DatabaseComponent } from './BackendTopics/database/database.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ParentOnchangeComponent } from './life-cycle-hooks/parent-onchange/parent-onchange.component';
import { ChildOnchangeComponent } from './life-cycle-hooks/child-onchange/child-onchange.component';
import { ContactPopupComponent } from './Popup-Components/contact-popup/contact-popup.component';
import { LibrariesTopicComponent } from './libraries-topic/libraries-topic.component';
import { AOSComponent } from './Libraries-Topics/aos/aos.component';
import { PrimeNgComponent } from './Libraries-Topics/prime-ng/prime-ng.component';
import { MatterJsComponent } from './Libraries-Topics/matter-js/matter-js.component';
import { G2PlotComponent } from './Libraries-Topics/g2-plot/g2-plot.component';
import { ThreeJsComponent } from './Libraries-Topics/three-js/three-js.component';
import { GASPComponent } from './Libraries-Topics/gasp/gasp.component';
import { PlacementPrepComponent } from './placement-prep/placement-prep.component';
import { DefaultComponent } from './default/default.component';
import { CloudComputingComponent } from './cloud-computing/cloud-computing.component';
import { MongoDBComponent } from './BackendTopics/mongo-db/mongo-db.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    BodyComponent,
    HomeComponent,
    ContentBodyComponent,
    FrontendTopicsComponent,
    HtmlComponent,
    AngularComponent,
    ReactComponent,
    JavascriptComponent,
    CssComponent,
    BootstrapComponent,
    BackendTopicsComponent,
    WebapiComponent,
    DatabaseComponent,
    ContactusComponent,
    ParentOnchangeComponent,
    ChildOnchangeComponent,
    ContactPopupComponent,
    LibrariesTopicComponent,
    AOSComponent,
    PrimeNgComponent,
    MatterJsComponent,
    G2PlotComponent,
    ThreeJsComponent,
    GASPComponent,
    PlacementPrepComponent,
    DefaultComponent,
    CloudComputingComponent,
    MongoDBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

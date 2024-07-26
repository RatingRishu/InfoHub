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
    ContactusComponent
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

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
    AngularComponent
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

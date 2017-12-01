import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ImageService} from './services/image.service';
//new
import {ContactService} from './services/contact.service';
//new
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { ImageListComponent } from './galleries/image-list/image-list.component';
import { ImageComponent } from './galleries/image-list/image.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {Routes, RouterModule} from '@angular/router';
import { BooksComponent } from './books/books.component';
const appRoutes: Routes = [
  { path: '', redirectTo:'/galleries', pathMatch: 'full'},
  { path: 'galleries', component: GalleriesComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'books', component:  BooksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleriesComponent,
    ImageListComponent,
    ImageComponent,
    ContactComponent,
    AboutComponent,
    BooksComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,HttpModule, HttpClientModule
  ], 
   
  providers: [ImageService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
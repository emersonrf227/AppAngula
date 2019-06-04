import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HeaderComponent} from './components/Header/Header.component';
import {LoadingComponent} from './components/Loading/Loading.component';




import {UserListPages} from './pages/UserList/UserList.pages';
import {UsersPages} from './pages/Users/Users.pages';
import {UsersPages2} from './pages/UsersX/Users.pages';
import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListPages,
    UsersPages,
    UsersPages2,
    LoadingComponent
    
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

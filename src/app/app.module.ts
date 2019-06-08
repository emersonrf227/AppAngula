import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HeaderComponent} from './components/Header/Header.component';
import {LoadingComponent} from './components/Loading/Loading.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




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
    LoadingComponent,
  
    
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

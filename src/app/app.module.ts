import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import {FormsModule}from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDUoFXoCqFdaOLUKn0VGkCvIg8Or9pjQQc",
      authDomain: "ges-chat.firebaseapp.com",
      databaseURL: "https://ges-chat.firebaseio.com",
      projectId: "ges-chat",
      storageBucket: "ges-chat.appspot.com",
      messagingSenderId: "697883101772"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

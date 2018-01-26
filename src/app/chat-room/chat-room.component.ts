import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  user:string='';
  messages: FirebaseListObservable<any[]>;
  text: string='';
  constructor(private af: AngularFireDatabase,private afAuth: AngularFireAuth) {
    this.messages = af.list('/messages');
  }
  send() {
    const message: any = {user: this.user, text: this.text };
    this.messages.push(message);
    this.text  = '';
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user)=>this.user = user.displayName)
  }

}

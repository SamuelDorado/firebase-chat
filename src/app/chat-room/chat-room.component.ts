import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  private messagesCollection: AngularFirestoreCollection<any>;
  user:string='';
  messages: Observable<any[]>;
  text: string='';
  constructor(private afs: AngularFirestore,private afAuth: AngularFireAuth) {
    this.messagesCollection = afs.collection<any>('messages');
    this.messages = this.messagesCollection.valueChanges();
  }
  send() {
    const id = this.afs.createId();
    const message: any = { id, user: this.user, text: this.text };
    this.messagesCollection.add(message);
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user)=>this.user = user.displayName)
  }

}

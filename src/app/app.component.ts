import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {

    const config = {
      apiKey: 'AIzaSyC2LPe1RXgi6KBLrqAemXSDXXowzyyFmGk',
      authDomain: 'post-a0a5a.firebaseapp.com',
      databaseURL: 'https://post-a0a5a.firebaseio.com/',
      projectId: 'post-a0a5a',
      storageBucket: 'post-a0a5a.appspot.com',
      messagingSenderId: '89186648840'
    };
    firebase.initializeApp(config);
  }
}

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secondhand';
  shops = this.store.collection('shops').valueChanges({ idField: 'id' });
  shoplist
  constructor(private db: AngularFireDatabase, private store: AngularFirestore) { }

  async ngOnInit() {
    await this.shops.subscribe(hi => {
      this.shoplist = hi
    }
    )
    console.log(this.shoplist);

  }
}
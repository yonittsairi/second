import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Contact } from './../../model/contact.model';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'formedit',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup
  contact: Contact = {};
  data: any = []
  constructor(private fb: FormBuilder, private db: AngularFireDatabase, private store: AngularFirestore) { }


  ngOnInit(): void {

    this.form = this.fb.group({
      // name: this.contact.name,
      // phone: this.contact.phone,
      // email: this.contact.address,

    })
    // const ref = this.db.list("shops")
    // ref.valueChanges().subscribe((data) => this.data = data)
  }
  onAddContact = () => {


    this.store.collection('shops').add(this.contact)


  }

  onDelete(id) {
    this.store.collection('shops').doc(id).delete();
  }
  onUpdate(shop) {
    this.store.collection('shops').doc(shop.id).update(shop);
  }


}
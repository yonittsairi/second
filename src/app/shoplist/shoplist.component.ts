import { Component, Input, OnInit } from '@angular/core';
import { Contact } from './../../model/contact.model';

@Component({
  selector: 'shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.scss']
})
export class ShoplistComponent implements OnInit {
  constructor() { }
  @Input() shops: Contact[] = []

  ngOnInit(): void {

  }

}

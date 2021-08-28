
import { getLocaleCurrencyName } from '@angular/common';
import { EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Item } from 'src/app/models/item';
import { environment } from '../environment';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();

  env = environment;

  constructor() { }

  ngOnInit(): void {

  }

  onDelete(item: Item) {
    this.deleteItem.emit(item);
  }

  onToggle(item: Item) {
    item.compiled = !item.compiled;
    this.toggleItem.emit(item);
  }
}

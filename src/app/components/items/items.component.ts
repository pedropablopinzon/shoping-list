import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;
  status = false;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    try {
      //this.items = [];
      //this.items = this.itemService.getItems();
      this.itemService.getItems().subscribe(data => {
        this.status = true;
        this.items = data;
        this.getTotal();
      }, (err) => {
        console.error(err)
      })
    } catch (err) {
      console.error(err);
    }
  }

  deleteItem(item: Item) {
    this.items = this.items.filter(x => x.id != item.id);
    this.itemService.deleteItem(item).subscribe();
    this.getTotal();
  }

  toggleItem(item: Item) {
    this.itemService.togglerItem(item).subscribe();
    this.getTotal();

  }

  getTotal() {
    this.total = this.items
      .filter(item => !item.compiled)
      .map(item => item.quantity * item.price)
      .reduce((acc, item) => acc += item, 0);
  }

}

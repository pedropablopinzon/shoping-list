import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  id:number=0;
  title: string = '';
  price: number = 0;
  quantity: number = 0;

  constructor(private itemServie: ItemService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.price = this.price;
    item.quantity = this.quantity;
    item.compiled = false;

    //this.itemServie.addItem(item);
    this.itemServie.addItem(item).subscribe(i => {
      this.router.navigate(['/']);
    });
    
  }
}

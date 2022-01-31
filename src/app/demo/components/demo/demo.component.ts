import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';
  items = ['nicolas', 'alexis', 'kemberly'];
  objeto = {};
  power = 10;
  
ngOnInit() {
  //code
}

  addItem() {
    this.items.push(this.title);
  }
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}

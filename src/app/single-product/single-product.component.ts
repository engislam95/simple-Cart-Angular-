import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import {CounterService} from '.././counter.service'

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input() itemm;
  // @Input() counter;
 
  // @Output() sendId = new EventEmitter<number>();
  // @Output() removeId = new EventEmitter<number>();

  constructor( private counte:CounterService) { }

count=0 ; 
ngOnInit() {
  this.counte.currentCount.subscribe((count)=>{
    this.count=count ;
})
}   
 Send()
  {
    this.counte.onSend(++this.count) ;
  }
  Remove()
  {
    this.counte.onRemove(--this.count) ;
  }

  

}


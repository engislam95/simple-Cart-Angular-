import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {CounterService} from '.././counter.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  @Input() counter;
  public content = [{
    pName: "First",
    pPrice: "$10.9",
    pmg: "../../assets/img/elements/g4.jpg"
  },
  {
    pName: "Second ",
    pPrice: "$20.7",
    pmg: "../../assets/img/elements/g3.jpg"
  },
  {
    pName: "Third",
    pPrice: "$25.2",
    pmg: "../../assets/img/elements/g5.jpg"
  },
  {
    pName: "Forth",
    pPrice: "$30.9",
    pmg: "../../assets/img/elements/a2.jpg"
  }]



  
  //  onRecieve(id)
  // {
  //   this.count ++  ;
    
  // }
  // onDelete(id)
  // {
  //   if(this.count !== 0)
  //   {
  //     this.count-- ;
  //   }
    
  // }
  constructor(private countt : CounterService) {}
    
   count :number ; 

  ngOnInit() {
    this.countt.currentCount.subscribe((count)=>{
      this.count=count ;
    })
  }


}

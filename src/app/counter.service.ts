import { Injectable  } from '@angular/core';
import{BehaviorSubject} from 'rxjs' ; 

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

private id =new BehaviorSubject(0);

// transfere el (id) as observable 34an aadr 23ml 3leh subscribe 
currentCount = this.id.asObservable(); 
 
onSend(count:number)
{
  this.id.next(count);
  // console.log(this.id.next(count)) ;
}
onRemove(count:number)
{
  
    this.id.next(count) ;
     console.log(this.id.next(count)) ;
  
}

}
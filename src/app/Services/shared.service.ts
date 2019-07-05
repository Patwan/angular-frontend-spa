import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
	
	//All children
	private children = new BehaviorSubject;
 	checkAll$ = this.children.asObservable();

 	//Edit Single Child
 	private singleChild = new BehaviorSubject;
	 edit$ = this.singleChild.asObservable();
	 
	//Updated data after edit method
 	private update = new BehaviorSubject;
 	updates$ = this.update.asObservable();

	childData(data:any){
	   this.children.next(data);
	}

	editData(data:any){
		this.singleChild.next(data);
	}

	updatedData(data:any){
		this.update.next(data);
	}

	constructor(private Token : TokenService) { }
}

import { Component } from '@angular/core';
export class Person{
  id:number | undefined;
  UserName:string | undefined;
  Email:string | undefined;
  MobileNumber:number | undefined;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bindings';
  //Object Creation of Person class
  person:Person=new Person();
  tabledataArr:any[]=[];
  isHideTable:boolean=false;


 
  
  onSave(){
    this.tabledataArr.push(this.person);
    this.person=new Person();
    this.isHideTable=true;
  }
  
  

 



 
  
 
}

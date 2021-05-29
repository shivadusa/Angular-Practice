import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Interpolation Example
  title = 'Welcome to Interpolation Binding';
  Number1=10;
  Number2=20;
  addTwoNumbers(){
    return this.Number1+this.Number2;
  }

  //Property Binding Example
  property='Welcome to Property Binding';
  imgurl="https://static.javatpoint.com/tutorial/angular7/images/angular-7-logo.png";
  isdisabled=false;
  classes='special';
  
  //Attribute Binding
 href='https://www.google.com/';
 updateLink='https://www.youtube.com/'
 
 //Event Binding
 onSave($event:any){
   console.log("save button is clicked",$event);
 }

  //Event Binding
  fullName='Welcome to Two-way Data Binding';
  //Arry practice
  employeeIds:number[]=[];

 

  constructor(){
    this.getEmployeesdata();
  }


   // A Angular Practice
 
  getEmployeesdata(){
    this.employeeIds.push(10);
    this.employeeIds.push(100);
    this.employeeIds.push(105);
  }

  //Directives
  //ngIf Directive Example
  topic="Welcome to Directives";
  visible:boolean=false;

  onShow(){
    this.visible=true
  }

  onHide(){
    this.visible=false;
  }

    //ngFor Directive Example
   public subjects=["Angular","HTML","CSS","JAVASCRIPT"];

    //ngSwitch Directive Example
    myChoice='one';


    button1:boolean=true;
   

   /* one(){
      this.button1=false;
      
    }
    two(){
      
      this.button1=true;
    }*/
    hideAndShow(){
      this.button1=!this.button1;
    }

    add=1;
    
    

    increase(){
      this.add=this.add+1;
    }

    decrease(){
       this.add=this.add-1;
    }

    //Task-2 
    /*firstandlastvalue=""
    secondandfourthvalue=""
    all=""*/


    placeId1:string='';
    placeId2:string='';
    placeId3:string='';
    placeId4:string='';
    placeId5:string='';

    myFunc1(num1:any){
     this.placeId1=num1;
    }
    myFunc5(num5:any){
      this.placeId1=num5;
     }
     myFunc2(num2:any){
      this.placeId4=num2;
     }
     myFunc4(num4:any){
      this.placeId2=num4;
     }
     myFunc3(num3:any){
      this.placeId1=num3;
      this.placeId2=num3;
      this.placeId4=num3;
      this.placeId5=num3;
     }

     
  


}
}




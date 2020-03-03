import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usercount';
  userelements=[];
  no_of_users:number=0;
  on_user_added(Userdata:{firstname:string,lastname:string}){
    
    this.userelements.push({
      firstname:Userdata.firstname,
      lastname:Userdata.lastname
    });
    this.no_of_users=this.no_of_users+1;
  }
  on_remove_user(del_data:{firstname:string,lastname:string}){
    console.log(del_data)
    console.log("needtodelelements:"+del_data.firstname)
    for(var i=0;i<this.userelements.length;i++)
    {
      if(this.userelements[i]["firstname"]==del_data.firstname)
      {
        this.userelements.splice(i,1);
      }
    }
    this.no_of_users=this.no_of_users-1;
    console.log("after delete"+this.userelements)
  }
}

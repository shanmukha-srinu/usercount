import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  focus=false;
  @Input() element:{firstname:string,lastname:string};
  @Output() deleteuser;
  del_firstname='';
  del_lastname='';
  
  constructor() { }
  removeuser(deleteuser){
    console.log(this.deleteuser)
    deleteuser.emit(
      {
        firstname:this.del_firstname,
        lastname:this.del_lastname
      }
    )
  
  }
  delete_ele(firstname,lastname){
    console.log("ele to be deleted "+firstname+" "+lastname)
    this.deleteuser=new EventEmitter<{firstname:string,lastname:string}>();
    console.log()
    this.removeuser(this.deleteuser);
}

  ngOnInit(): void {
  }

}

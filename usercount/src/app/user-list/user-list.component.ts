import { Component, OnInit,Input, Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  focus=false;
  @Input() element:{firstname:string,lastname:string};
  @Output() deleteuser=new EventEmitter<{firstname:string,lastname:string}>();;
  del_firstname='';
  del_lastname='';
  @ViewChild('temp', { static: false }) temp: ElementRef;
  constructor() { }
  removeuser(deleteuser,firstname,lastname){
    console.log("reached to removeuser. element are :"+ firstname+" "+lastname)
    var temp1;
    var temp2;

    temp1=firstname;
    temp2=lastname;
    console.log(temp1+temp2)
    deleteuser.emit(
      {
        'firstname': temp1,
        'lastname':temp2
      }
      
    );
  
  }
  delete_ele(firstname,lastname){
    console.log("ele to be deleted "+firstname+" "+lastname+ " in delete_ele")
    
    this.removeuser(this.deleteuser,firstname,lastname);
}

  ngOnInit(): void {
  }

}

import { Component, OnInit, Output,EventEmitter,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }
  @Output() usercreated= new EventEmitter<{firstname:string,lastname:string}>();
  @ViewChild('Userfirstname', { static: false }) Userfirstname: ElementRef;
  @ViewChild('Userlastname', { static: false }) Userlastname: ElementRef;
  on_add_user(){
    this.usercreated.emit({
      firstname:this.Userfirstname.nativeElement.value,
      lastname:this.Userlastname.nativeElement.value
    });

  }
  ngOnInit(): void {
  }

}

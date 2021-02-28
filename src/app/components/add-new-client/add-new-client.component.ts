import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons}
      from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-new-client',
  templateUrl: './add-new-client.component.html',
  styleUrls: ['./add-new-client.component.scss']
})
export class AddNewClientComponent implements OnInit {
clients:any=[
  {
  name:"عاصم الجزيرى",
  mobile:"01013875831",
  profileImage:"assets/imgs/clientPhoto.svg",
  price:"00"
},
{
  name:"عاصم الجزيرى",
  mobile:"01013875831",
  profileImage:"assets/imgs/clientPhoto.svg",
  price:"00"
},
{
  name:"عاصم الجزيرى",
  mobile:"01013875831",
  profileImage:"assets/imgs/clientPhoto.svg",
  price:"00"
},
{
  name:"عاصم الجزيرى",
  mobile:"01013875831",
  profileImage:"assets/imgs/clientPhoto.svg",
  price:"00"
},
{
  name:"عاصم الجزيرى",
  mobile:"01013875831",
  profileImage:"assets/imgs/clientPhoto.svg",
  price:"00"
},
{
  name:"عاصم الجزيرى",
  mobile:"01013875831",
  profileImage:"assets/imgs/clientPhoto.svg",
  price:"00"
},
{
  name:"عاصم الجزيرى",
  mobile:"01013875831",
  profileImage:"assets/imgs/clientPhoto.svg",
  price:"00"
},
{
  name:"عاصم الجزيرى",
  mobile:"01013875831",
  profileImage:"assets/imgs/clientPhoto.svg",
  price:"00"
},
{
  name:"عاصم الجزيرى",
  mobile:"01013875831",
  profileImage:"assets/imgs/clientPhoto.svg",
  price:"00"
},
{
  name:"عاصم الجزيرى",
  mobile:"01013875831",
  profileImage:"assets/imgs/clientPhoto.svg",
  price:"00"
},

{
  name:"عاصم الجزيرى",
  mobile:"01013875831",
  profileImage:"assets/imgs/clientPhoto.svg",
  price:"00"
},
];
closeResult = '';

  constructor(private modalService: NgbModal) { }
  open(content) {
    this.modalService.open(content, {
      windowClass: 'custom-addClient-modal'
    }).result.then(
      result => {
        this.closeResult = `Closed with: ${result}`
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

}

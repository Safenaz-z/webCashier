import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import {NgbModal, ModalDismissReasons}
      from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-bill-header',
  templateUrl: './bill-header.component.html',
  styleUrls: ['./bill-header.component.scss']
})
export class BillHeaderComponent implements OnInit {


  @ViewChild('tabs', {static: false}) tabGroup: MatTabGroup;
  closeResult = '';
public demo1TabIndex = 1;

constructor(private modalService: NgbModal) {

}

toggleClientsList(){
  var addingClient = document.getElementById("clientList");
  // var basicbill=document.getElementById("basicbill");
  if (addingClient.style.display === "none") {
    addingClient.style.display = "block";
    // basicbill.style.display="none"
    if (!this.tabGroup || !(this.tabGroup instanceof MatTabGroup)) {
      return;
    }
    else{
      const tabCount = 2;
      this.demo1TabIndex = (this.demo1TabIndex+ 1) % tabCount;
    }
  } else {
    addingClient.style.display = "none";
    // basicbill.style.display="block"
     }
}
open(content) {
  this.modalService.open(content, {
    windowClass: 'custom-deliver-modal'
  }).result.then(
    result => {
      this.closeResult = `Closed with: ${result}`
    },
    reason => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    }
  );
}
openDiscountModal(content){
  this.modalService.open(content, {
    windowClass: 'custom-discount-modal'
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

import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-confirm-diamog',
  templateUrl: './confirm-diamog.component.html',
  styleUrls: ['./confirm-diamog.component.scss']
})
export class ConfirmDiamogComponent implements OnInit {
  public title ="Are you sure?";
  public message ="Do you want to remove this item ";
  public confirm ="Confirm";
  public Cancel ="Cancel";

  constructor(public dialogRef: MatDialogRef <ConfirmDiamogComponent>) { }

  ngOnInit(): void {
  }

}

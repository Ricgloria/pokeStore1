import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {EndBuyDialogInterface} from '../../interfaces/end-buy-dialog-interface';

@Component({
  selector: 'app-end-buy',
  templateUrl: './end-buy.component.html',
  styleUrls: ['./end-buy.component.css']
})
export class EndBuyComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EndBuyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EndBuyDialogInterface
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.dialogRef.close();
  }
}

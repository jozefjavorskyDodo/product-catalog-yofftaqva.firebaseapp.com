

import { Component } from "@angular/core";
import { Inject } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatDialogRef } from "@angular/material/dialog";


export interface DialogData {
  edited_product_card_name: string;
  edited_product_card_price: number;
  edited_product_card_description: string;
};


@Component({
  selector: "app-product-detail-page",
  templateUrl: "./product-detail-page.component.html",
  styleUrls: ["./product-detail-page.component.css"]
})


export class ProductDetailPageComponent {
  id_of_selected_products: string = '';
  _products_$: any = [];
  edited_product_card_name: string = '';
  edited_product_card_price: number = Number();
  edited_product_card_description: string = '';

  constructor(
    private _router_: Router,
    private _product_service_: ProductsService,
    public dialog: MatDialog
  ) { };

  ngOnInit() {
    this.id_of_selected_products = String(this._router_.url.split('/')[2]);
    this._product_service_
      .get_products()
      .subscribe((data_chunk) => {
        this._products_$ = data_chunk;
      });
  };

  openDialog_EditPrdctCardName(): void {
    const dialogRef = this.dialog.open(EditPrdctCardNameDialog, {
      data: { edited_prdct_card_name: this.edited_product_card_name }
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.edited_product_card_name = result;
    });
  };

  openDialog_EditPrdctCardPrice(): void {
    const dialogRef = this.dialog.open(EditPrdctCardPriceDialog, {
      data: { edited_prdct_card_price: this.edited_product_card_price }
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.edited_product_card_price = result;
    });
  };

  openDialog_EditPrdctCardDesc(): void {
    const dialogRef = this.dialog.open(EditPrdctCardDescDialog, {
      data: { edited_prdct_card_price: this.edited_product_card_description }
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.edited_product_card_description = result;
    });
  };
};


@Component({
  selector: "edit-prdct-card-name-dialog",
  templateUrl: "edit-prdct-card-name-dialog.html"
})


export class EditPrdctCardNameDialog {
  constructor(
    public dialogRef: MatDialogRef<EditPrdctCardNameDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { };

  onNoClick(): void {
    this.dialogRef.close();
  };
};


@Component({
  selector: "edit-prdct-card-price-dialog",
  templateUrl: "edit-prdct-card-price-dialog.html"
})


export class EditPrdctCardPriceDialog {
  constructor(
    public dialogRef: MatDialogRef<EditPrdctCardPriceDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { };

  onNoClick(): void {
    this.dialogRef.close();
  };
};


@Component({
  selector: "edit-prdct-card-desc-dialog",
  templateUrl: "edit-prdct-card-desc-dialog.html"
})


export class EditPrdctCardDescDialog {
  constructor(
    public dialogRef: MatDialogRef<EditPrdctCardDescDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { };

  onNoClick(): void {
    this.dialogRef.close();
  };
};


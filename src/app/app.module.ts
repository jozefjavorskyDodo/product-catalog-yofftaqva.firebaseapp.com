

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { ProductDetailPageComponent } from "./product-detail-page/product-detail-page.component";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { products_to_render } from "./redux/reducer_file";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { EditPrdctCardNameDialog } from "./product-detail-page/product-detail-page.component";
import { EditPrdctCardPriceDialog } from "./product-detail-page/product-detail-page.component";
import { EditPrdctCardDescDialog } from "./product-detail-page/product-detail-page.component";


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: "product/:id", component: ProductDetailPageComponent },
      { path: "**", component: MainPageComponent }
    ]),
    HttpClientModule,
    StoreModule.forRoot({ selected_category: products_to_render }),
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductDetailPageComponent,
    EditPrdctCardNameDialog,
    EditPrdctCardPriceDialog,
    EditPrdctCardDescDialog
  ],
  bootstrap: [AppComponent]
})


export class AppModule { };


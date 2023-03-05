

import { Component } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import {
  category_select_box_1st_option,
  category_select_box_2nd_option,
  category_select_box_3rd_option,
  category_select_box_4th_option,
  category_select_box_5th_option,
  category_select_box_6th_option,
  category_select_box_7th_option,
  category_select_box_8th_option
} from "../redux/actions_file";


@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})


export class MainPageComponent {
  products$: any = [];
  selected_category$: Observable<string>;

  constructor(
    private products_service: ProductsService,
    private store: Store<{ selected_category: string }>
  ) {
    this.selected_category$ = store.select("selected_category");
  };

  ngOnInit() {
    this.products_service
      .get_products()
      .subscribe((fetched_data_chunk) => {
        this.products$ = fetched_data_chunk;
      });
  };

  category_select_box_1st_option() {
    this.store.dispatch(category_select_box_1st_option());
  };
  category_select_box_2nd_option() {
    this.store.dispatch(category_select_box_2nd_option());
  };
  category_select_box_3rd_option() {
    this.store.dispatch(category_select_box_3rd_option());
  };
  category_select_box_4th_option() {
    this.store.dispatch(category_select_box_4th_option());
  };
  category_select_box_5th_option() {
    this.store.dispatch(category_select_box_5th_option());
  };
  category_select_box_6th_option() {
    this.store.dispatch(category_select_box_6th_option());
  };
  category_select_box_7th_option() {
    this.store.dispatch(category_select_box_7th_option());
  };
  category_select_box_8th_option() {
    this.store.dispatch(category_select_box_8th_option());
  };
};




import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})


export class ProductsService {
  constructor(private http: HttpClient) { };

  get_products(): Observable<JSON> {
    return this.http
      .get<JSON>(
        "https://json.extendsclass.com/bin/4470936cbcb8",
        { headers: new HttpHeaders({ "Security-key": "         " }) }
      )
  };
};


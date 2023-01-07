import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {Product} from "../../model/Product";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product = <Product>{};
  regex: RegExp = new RegExp('[0-9a-f\-]+$');

  constructor(private productService: ProductsService, private router: Router) {

  }

  ngOnInit() {
    let href = this.router.url;
    let match = href.match(this.regex);
    this.getProduct(match![0]);
  }

  getProduct(uuid: string) {
    this.productService.getProduct(uuid).subscribe((data: HttpResponse<Product>) => {
      this.product = data.body!;
      this.product.createdAt = this.product.createdAt.split('T').join(" ").split('.')[0]
      // if (this.product.editedAt != null) {
      //   this.product.editedAt = this.product.editedAt.split('T').join(" ").split('.')[0]
      // }
    })};

}

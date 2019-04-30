import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { CestaInterface } from '../../models/producto';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {

  listadoProducto: any = [];

  public producto;
  public cesta: CestaInterface = {

    precio: '',
    producto: ''

  }

  constructor(private productsService: ProductsService) {


  }

  ngOnInit() {

    this.productsService.getProducts().subscribe(
      res => {
        this.listadoProducto = res;
      },
      err => console.error(err)
    );
  }

  addCesta() {

    this.productsService.addCesta(this.cesta).subscribe()
    console.log(this.cesta);

  }




}

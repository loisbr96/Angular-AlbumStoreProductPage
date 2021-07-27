import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { Album } from '../album';

@Component({
  selector: 'app-product-traklisting',
  templateUrl: './product-traklisting.component.html',
  styleUrls: ['./product-traklisting.component.css']
})
export class ProductTraklistingComponent implements OnInit {
  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}

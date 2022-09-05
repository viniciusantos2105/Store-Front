import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { ProductDTO } from 'src/app/models/productDTO';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-handbags',
  templateUrl: './product-handbags.component.html',
  styleUrls: ['./product-handbags.component.css']
})
export class ProductHandbagsComponent implements AfterViewInit {

  products: Product[] = [];

  filter: ProductDTO = {
    id: '',
    name: 'Bolsa',
    quantity: '',
    price: ''
  }

  constructor(private service: ProductService) { }

  ngAfterViewInit() {
    this.findFilter();
  }

  displayedColumns: string[] = ['id', 'name', 'quantity', 'price'];
  dataSource = new MatTableDataSource<Product>(this.products);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  findFilter():void{
    this.service.findFilter(this.filter).subscribe((resposta) =>{
      this.products = resposta;
      this.dataSource = new MatTableDataSource<Product>(this.products);
      this.dataSource.paginator = this.paginator;
      if(this.products.length == 0){
        this.service.message('Não existem produtos com essa descrição')
      }
    })
  }
}

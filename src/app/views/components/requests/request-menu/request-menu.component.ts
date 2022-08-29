import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-request-menu',
  templateUrl: './request-menu.component.html',
  styleUrls: ['./request-menu.component.css']
})
export class RequestMenuComponent implements OnInit {

  products: Product[] = [];

  displayedColumns: string[] = ['id', 'name', 'quantity', 'price', 'action'];
  dataSource = new MatTableDataSource<Product>(this.products);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
  }

  constructor(private service: ProductService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.products = resposta;
    })
  }


}

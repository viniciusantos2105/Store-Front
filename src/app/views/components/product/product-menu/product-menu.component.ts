import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {

  constructor(private service: ProductService,
    private router: Router) { }

  products: Product[] = [];

  displayedColumns: string[] = ['id', 'name', 'quantity', 'price'];
  dataSource = new MatTableDataSource<Product>(this.products);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.load();
  }

  load(){
    const HAS_RELOAD = 'hasReload';  // Ao invés de passar a string 'hasRealod' diretamente é melhor criar uma constante para evitar erros de digitação
    sessionStorage.setItem(HAS_RELOAD, 'false');
  }

  createNavigate():void{
    this.router.navigate(['product/create'])
  }

  updateQuantityNavigate():void{
    this.router.navigate(['product/addStock'])
  }

  updatePriceNavigate():void{
    this.router.navigate(['product/attPrice'])
  }

  backNavigate():void{
    this.router.navigate(['operator/logado'])
  }

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

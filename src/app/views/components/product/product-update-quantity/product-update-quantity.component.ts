import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update-quantity',
  templateUrl: './product-update-quantity.component.html',
  styleUrls: ['./product-update-quantity.component.css']
})
export class ProductUpdateQuantityComponent implements OnInit {

  product: Product = {
    id: '',
    name: '',
    quantity: 0,
    price: 0
  }

  quantity = new FormControl(0, [Validators.min(1)])
  id = new FormControl(0, [Validators.min(1)])

  constructor(private router: Router,
    private service: ProductService) { }

  ngOnInit(): void {
  }

  back():void{
    this.router.navigate(['product'])
  }

  updateQuantity():void{
    this.service.updateQuantity(this.product).subscribe(resposta =>{
      this.service.message('Quantidade do produto atualizado com sucesso!!!')
    })
  }
}

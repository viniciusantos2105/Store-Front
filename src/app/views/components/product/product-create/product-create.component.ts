import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id: '',
    name: '',
    quantity: 0,
    price: 0
  }
  
  name = new FormControl('', [Validators.minLength(2)])
  quantity = new FormControl(0, [Validators.min(1)])
  price = new FormControl(0, [Validators.min(1)])

  constructor(private service: ProductService,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  create():void{
    this.service.create(this.product).subscribe((resposta)=>{
      this.service.message('Produto criado com sucesso!!!')
    })
  }
}
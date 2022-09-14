import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update-price',
  templateUrl: './product-update-price.component.html',
  styleUrls: ['./product-update-price.component.css']
})
export class ProductUpdatePriceComponent implements OnInit {

  product: Product = {
    id: '',
    name: '',
    quantity: 0,
    price: 0
  }

  price = new FormControl(0, [Validators.min(1)])
  id = new FormControl(0, [Validators.min(1)])
  x = 0;

  constructor(private router: Router,
    private service: ProductService) { }

  ngOnInit(): void {
    this.load();
  }

  back():void{
    this.router.navigate(['product'])
  }

  load() {
  const HAS_RELOAD = 'hasReload';  // Ao invés de passar a string 'hasRealod' diretamente é melhor criar uma constante para evitar erros de digitação
  const hasReload = sessionStorage.getItem(HAS_RELOAD);
  if (hasReload == 'false') {
    sessionStorage.setItem(HAS_RELOAD, 'true');
    location.reload();
  }
}

  updatePrice():void{
    this.service.updatePrice(this.product).subscribe(resposta =>{
      this.service.message('Preço do produto atualizado com sucesso!!!')
      this.router.navigate(['product'])
    })
  }
}

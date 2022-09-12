import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { RequestDTO } from 'src/app/models/requestDTO';
import { AuthService } from 'src/app/services/auth.service';
import { ClientService } from 'src/app/services/client.service';
import { ProductService } from 'src/app/services/product.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-sale',
  templateUrl: './request-sale.component.html',
  styleUrls: ['./request-sale.component.css']
})
export class RequestSaleComponent implements OnInit {

  id_tec = ''

  requestDTO: RequestDTO = {
    id: '',
    quantity: 0,
    address: '',
    number: ''
  }

  product: Product = {
    id: '',
    name: '',
    quantity: 0,
    price: 0
  }

  name = new FormControl('', [Validators.minLength(2)])
  quantity = new FormControl(0, [Validators.min(1)])
  price = new FormControl(0, [Validators.min(1)])
  address = new FormControl('', [Validators.minLength(8)])
  number = new FormControl('', [Validators.minLength(1)])

  constructor(private service: RequestService,
    private productService: ProductService,
    private clientService: ClientService,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.findById();
    this.client();
  }

  sale(): void{
    this.service.sale(this.requestDTO).subscribe(resposta =>{
      this.service.message('Compra realizada com sucesso')
      this.router.navigate(['request'])
    }, err =>{
      console.log(err)
      if (err.error.error.match('Endereço não encontrado')) {
        this.service.message(err.error.error)
      }
    })
  }

  client(): void{
    this.clientService.getClient(`${this.auth.getToken()}`).subscribe(resposta =>{
      this.requestDTO.address = resposta.address.cep
      this.requestDTO.number = resposta.address.number
    })
  }

    getClientPost(): void{
    this.clientService.getClientPost(`${this.auth.getUsername()}`).subscribe(resposta =>{
      this.requestDTO.address = resposta.address.cep
      this.requestDTO.number = resposta.address.number
    })
  }

  findById(): void{
    this.productService.findById(this.id_tec).subscribe(resposta =>{
      this.product = resposta;
      this.requestDTO.id = resposta.id
    })
  }

  cancel():void{
    this.router.navigate(['request'])
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { Product } from 'src/app/models/product';
import { Request } from 'src/app/models/request';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-requests-specific-operator',
  templateUrl: './requests-specific-operator.component.html',
  styleUrls: ['./requests-specific-operator.component.css']
})
export class RequestsSpecificOperatorComponent implements OnInit {

  id_tec = ''

  request: Request = {
    id: '',
    quantidade: 0,
    price: 0,
    time: '',
    client: {
      id: '',
      username: '',
      name: '',
      cpf: '',
      email: '',
      password: '',
      address: {
        cep: '',
        rua: '',
        bairro: '',
        cidade: '',
        estado: '',
        number: ''
      }
    },
    product: {
      id: '',
      name: '',
      quantity: 0,
      price: 0
    },
    address: {
      cep: '',
      rua: '',
      bairro: '',
      cidade: '',
      estado: '',
      number: ''
    }
  }

  product: Product = {
    id: '',
    name: '',
    quantity: 0,
    price: 0
  }

  address: Address = {
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
    number: ''
  }

  hour : String = '';
  date : String = '';

  constructor(private service: RequestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id_tec = this.route.snapshot.paramMap.get('id')!
    this.getRequest()
  }

  getRequest():void{
    this.service.findSpecific(this.id_tec).subscribe(resposta =>{
      this.request = resposta;
      this.address = resposta.address
      this.date = resposta.time.substring(0, 10)
      this.hour = resposta.time.substring(10, 16)
      this.product = resposta.product
    })
  }

  backNavigate():void{
    this.router.navigate(['request/allPurchases'])
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { RequestDTO } from 'src/app/models/requestDTO';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request-sale',
  templateUrl: './request-sale.component.html',
  styleUrls: ['./request-sale.component.css']
})
export class RequestSaleComponent implements OnInit {

  requestDTO: RequestDTO = {
    id: '',
    quantity: 0,
    address: '',
    number: ''
  }

  constructor(private service: RequestService) { }

  ngOnInit(): void {
  }

  sale(): void{
    this.service.sale(this.requestDTO).subscribe(resposta =>{
      this.service.message('Compra realizada com sucesso')
    })
  }
}

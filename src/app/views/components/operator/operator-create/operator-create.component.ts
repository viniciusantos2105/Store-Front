import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operator } from 'src/app/models/operator';
import { OperatorService } from 'src/app/services/operator.service';

@Component({
  selector: 'app-operator-create',
  templateUrl: './operator-create.component.html',
  styleUrls: ['./operator-create.component.css']
})
export class OperatorCreateComponent implements OnInit {

  operator: Operator = {
    id: '',
    username: 'vinicius002',
    password:  '1234',
    responsibility: 'ADMIN'
  }

  constructor(private router : Router,
    private service : OperatorService) { }

  ngOnInit(): void {
  }

  cancel(): void{
    this.router.navigate(['register'])
  }

  create(): void{
    this.service.create(this.operator).subscribe((resposta)=>{
      this.router.navigate(['register'])
      this.service.message('Operador criado com sucesso!!!')
    })
  }
}

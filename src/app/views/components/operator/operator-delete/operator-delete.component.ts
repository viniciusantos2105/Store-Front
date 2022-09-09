import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Operator } from 'src/app/models/operator';
import { OperatorService } from 'src/app/services/operator.service';

@Component({
  selector: 'app-operator-delete',
  templateUrl: './operator-delete.component.html',
  styleUrls: ['./operator-delete.component.css']
})
export class OperatorDeleteComponent implements OnInit {

  
  operator: Operator = {
    id: '',
    username: '',
    password: '',
    responsibility: ''
  } 

  id = new FormControl('', [Validators.minLength(1)])

  constructor(private service: OperatorService,
    private router: Router) { }

  ngOnInit(): void {
  }

  dismiss(): void{
    this.service.deleteOperator(this.operator.id).subscribe(resposta => {
      this.service.message('Operador demitido com sucesso')
    })
  }

  backNavigate():void{
    this.router.navigate(['operator'])
  }

  errorValidId(){
    if(this.id.invalid){
      return 'O id não pode ser nulo!';
    }
    return false;
  }
}

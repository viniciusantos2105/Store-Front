import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Operator } from 'src/app/models/operator';
import { OperatorService } from 'src/app/services/operator.service';

@Component({
  selector: 'app-operator-update-responsibility',
  templateUrl: './operator-update-responsibility.component.html',
  styleUrls: ['./operator-update-responsibility.component.css']
})
export class OperatorUpdateResponsibilityComponent implements OnInit {

  operator: Operator = {
    id: '',
    username: '',
    password: '',
    responsibility: ''
  } 

  id = new FormControl('', [Validators.minLength(1)])
  responsibility = new FormControl('', [Validators.minLength(4)])

  constructor(private service: OperatorService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  update():void{
    this.service.updateResponsibility(this.operator).subscribe(resposta =>{
      this.service.message('Operador atualizado')
    })
  }

  backNavigate():void{
    this.router.navigate(['operator-menu'])
  }

  errorValidId(){
    if(this.id.invalid){
      return 'O id não pode ser nulo!';
    }
    return false;
  }

  errorValidResponsibility(){
    if(this.responsibility.invalid){
      return 'Escolha um cargo!';
    }
    return false;
  }
}

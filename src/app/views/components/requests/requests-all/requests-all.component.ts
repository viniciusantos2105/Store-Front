import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Request } from 'src/app/models/request';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-requests-all',
  templateUrl: './requests-all.component.html',
  styleUrls: ['./requests-all.component.css']
})
export class RequestsAllComponent implements OnInit {

  requests: Request[] = [];

  constructor(private service: RequestService,
    private router: Router) { }

  displayedColumns: string[] = ['id', 'quantidade', 'price', 'product', 'address', 'time', 'action'];
  dataSource = new MatTableDataSource<Request>(this.requests);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.findAll();
  }

  backNavigate(){
    this.router.navigate(['request'])
  }

  navigateSpecificPurchase(){
    this.router.navigate(['request/purchases/:id'])
  }

  findAll():void{
    this.service.findAllSales().subscribe(resposta =>{
      this.requests = resposta;
      this.dataSource = new MatTableDataSource<Request>(this.requests);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateOperator(){
    this.router.navigate(['operator/logado'])
  }

}

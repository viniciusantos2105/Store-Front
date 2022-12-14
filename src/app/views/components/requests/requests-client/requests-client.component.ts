import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Request } from 'src/app/models/request';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-requests-client',
  templateUrl: './requests-client.component.html',
  styleUrls: ['./requests-client.component.css']
})
export class RequestsClientComponent implements OnInit {

  requests: Request[] = [];

  constructor(private service: RequestService,
    private router: Router) { }

  displayedColumns: string[] = ['id', 'quantidade', 'price', 'product', 'address', 'time', 'action'];
  dataSource = new MatTableDataSource<Request>(this.requests);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.findPurchase();
  }

  backNavigate(){
    this.router.navigate(['request'])
  }

  navigateSpecificPurchase(){
    this.router.navigate(['request/purchases/:id'])
  }

  findPurchase():void{
    this.service.clientRequests().subscribe(resposta =>{
      this.requests = resposta;
      this.dataSource = new MatTableDataSource<Request>(this.requests);
      this.dataSource.paginator = this.paginator;
    })
  }
}

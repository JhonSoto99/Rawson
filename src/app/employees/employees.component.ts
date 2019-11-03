import { Component, OnInit } from '@angular/core';
import {finalize, retry} from 'rxjs/operators';
import {environment} from '../../environments/environment.prod';

/*-- Services --*/
import { ApiService} from '../Api.service';
import {APIRoutes} from '../Api.route';

/*-- Interfaces --*/
import {IEmployees} from '../interfaces/employees.interface';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  /*-- Globals Vars --*/
  dataEmployees: IEmployees[] = [];
  loadingEmployees = false;

  constructor(
    private API: ApiService,
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.loadingEmployees = true;
    this.API.getHttp(APIRoutes.EMPLOYEES).pipe(
      retry(1),
      finalize(() => {
        console.log('finish loading get employees');
        this.loadingEmployees = false;
      })
    ).subscribe(res => {
      if(!environment.production) console.log('SUCCESS GET EMPLOYEES', res);
      this.dataEmployees = res;
    }, err => {
      if(!environment.production) console.log('FAIL GET EMPLOYEES', err);
    });
  }

}

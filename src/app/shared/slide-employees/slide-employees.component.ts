import { Component, OnInit, Input } from '@angular/core';

/*-- Interfaces --*/
import {IEmployees} from '../../interfaces/employees.interface';

@Component({
  selector: 'app-slide-employees',
  templateUrl: './slide-employees.component.html',
  styleUrls: ['./slide-employees.component.css']
})
export class SlideEmployeesComponent implements OnInit {

  /*-- Inputs --*/
  @Input ('dataEmployees') dataEmployees: IEmployees[] = [];

  constructor() { }

  ngOnInit() {
  }

}

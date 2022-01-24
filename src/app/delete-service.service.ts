import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRequestRates } from './exchangerate/requestRates';
import { rates } from './IRates';

@Injectable({
  providedIn: 'root'
})
export class DeleteServiceService {

  constructor(private http:HttpClient) { }

  getReportForPeriod():Observable<rates>{
    // const reportUrl = "http://localhost:1111/report/generate";
    return this.http.delete<rates>("http://localhost:8080/exchangerate/delete");

  }
}

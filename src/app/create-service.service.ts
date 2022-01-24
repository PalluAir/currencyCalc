import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRequestRates } from './exchangerate/requestRates';

@Injectable({
  providedIn: 'root'
})
export class CreateServiceService {

  constructor(private http:HttpClient) { }

  getReportForPeriod(requestData:IRequestRates):Observable<rates>{
    // const reportUrl = "http://localhost:1111/report/generate";
    return this.http.post<rates>("http://localhost:8080/exchangerate/create", requestData);

  }
}

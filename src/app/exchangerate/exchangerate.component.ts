import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exchangerate',
  templateUrl: './exchangerate.component.html',
  styleUrls: ['./exchangerate.component.css']
})
export class ExchangerateComponent implements OnInit {

  rates: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  add(){
    const url="http://localhost:8080/exchangerate/create";
    this.http.get(url)
    .subscribe(response => {
      console.log(response);
    this.rates = response;
    console.log(this.rates);
    });
  }

  edit(){
    const url="http://localhost:8080/exchangerate/update";
    this.http.put(url)
    .subscribe(response => {
      console.log(response);
    this.rates = response;
    console.log(this.rates);
    });

    delete(id:any){
      const url="http://localhost:8080/exchangerate//delete/{exchangeRateId}"+id;
      this.http.get(url)
      .subscribe(response => {
        console.log(response);
      this.rates = response;
      console.log(this.rates);
      });
    }
  }

}

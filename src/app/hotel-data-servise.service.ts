import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelDataServiseService {

  constructor(private http : HttpClient) { }
  /* sends get request and return its respond data  */ 
  getHotelData(){
      return this.http.get('https://my-json-server.typicode.com/dmVitha/InitLab2/markers');
  }
}

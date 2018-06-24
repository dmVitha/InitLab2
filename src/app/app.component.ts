import { Component } from '@angular/core';
import { HotelDataServiseService } from './hotel-data-servise.service';
import { hotel } from './hotelDataModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  colors = ['red','green','blue'];
  hotels: hotel[]; 

  constructor(private hotelService : HotelDataServiseService) {

    
  }

  ngOnInit(){
    this.hotelService.getHotelData().subscribe((data:hotel[]) =>{

      this.hotels = data;

    } )
    
  }
  

  
}

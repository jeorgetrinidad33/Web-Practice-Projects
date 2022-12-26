import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // food details
  foodDetails = [
    {
      id: 1,
      foodName: "Paneer Grilled Sandwich",
      foodDetails:"Pan fried masala paneer.",
      foodPrice:"20",
      foodImg:"../../../assets/paneer.jpg",
    },
    {
      id: 2,
      foodName: "Pork Adobo",
      foodDetails:"",
      foodPrice:"16",
      foodImg:"../../../assets/pork-adobo.jpg",
    },
    {
      id: 3,
      foodName: "Shrimp Sinigang",
      foodDetails:"",
      foodPrice:"20",
      foodImg:"../../../assets/shrimp-sinigang.jpeg",
    },
    {
      id: 4,
      foodName: "Chicken Adobo",
      foodDetails:"",
      foodPrice:"18",
      foodImg:"../../../assets/chicken-adobo.jpg",
    },
    {
      id: 5,
      foodName: "Liempo",
      foodDetails:"",
      foodPrice:"25",
      foodImg:"../../../assets/liempo.jpg",
    },
    {
      id: 6,
      foodName: "Chicken Inasal",
      foodDetails:"",
      foodPrice:"21",
      foodImg:"../../../assets/chicken-inasal.jpeg",
    }
  ]
}

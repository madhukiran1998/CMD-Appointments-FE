import { Component, OnInit } from '@angular/core';
import { Appointments } from '../shared/Appointment';
import { AppointmentServiceService } from '../shared/appointment-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  page:number =1;
  tempAppoitnments:Appointments[] =[]
  totallength!:number
  labels:any ={
    previousLabel:'<',
    nextLabel:">",
  }
  constructor(private service:AppointmentServiceService) {
    this.service.getAllAppoinments().subscribe((data:Appointments[])=>{
      data.forEach((ele)=>{
        this.tempAppoitnments.push(ele);
      })
    })
    this.totallength=this.tempAppoitnments.length;
    console.log(this.tempAppoitnments)
   }
  ngOnInit(): void {
  }

}

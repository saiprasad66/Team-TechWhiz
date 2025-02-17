import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { AvailabilityService } from 'src/app/Service/availability.service';
import { Doctor } from 'src/app/Models/database.models';
import { AppointmentService } from 'src/app/Service/appointment.service';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};

@Component({
  selector: 'app-bookappointments',
  templateUrl: './bookappointments.component.html',
  styleUrls: ['./bookappointments.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class BookappointmentsComponent implements   OnInit {
  pid:string='';
  appdate:string='';
  pemailId:string='';
  constructor(private router:Router,private availabilityService:AvailabilityService,private appointmentService:AppointmentService){
    const nav=this.router.getCurrentNavigation()?.extras.state as {patientId:string,pemail:string};
    this.pid=nav.patientId;
    this.pemailId=nav.pemail;
  }
  ngOnInit(): void {
    console.log(this.pemailId)
    throw new Error('Method not implemented.');
  }
  bookAppointment(item: any) {

    console.log(item);
    this.appdate=item.date;
    const docinfo:String=(item.doctor.split(",",2));
    const item1:any={
      patientId:this.pid,
      doctorId:docinfo[0],
      date:this.appdate,
      doctorName:docinfo[1],
      concerns:item.concerns,
      status:"Sent"
    }
    console.log(item1);

    this.appointmentService.bookAppointment(item1).subscribe({
      next:(response)=>
      {
        console.log(response);
        window.alert("Appointment book successfully");
        // this.appointmentService.sendEmail(this.pemailId,this.appdate,"Sent").subscribe({
        //   next:(response)=>{
        //     console.log(response);
        //   }
        // });
        this.router.navigate(['/patientdashboard']);
      }
    });
  }
  date1:string='';
  currDate:Date=new Date();
  availableDoctors:Doctor[]=[];

  findDocter(){
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const date = new Date(this.date1);
  console.log(weekday[date.getDay()]);
  this.availabilityService.getAllDoctorbyAvailability(weekday[date.getDay()]).subscribe({
    next:(response)=>{
      console.log(response);
      this.availableDoctors=response;
    }
  })

}


}

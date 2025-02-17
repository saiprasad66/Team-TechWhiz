import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientServicesService } from 'src/app/Service/patient-services.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit{

 
  constructor(private patientService:PatientServicesService,private router:Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    
  }
  patientId=sessionStorage.getItem('pid');
  patientEmail=sessionStorage.getItem('pemail');
  
}

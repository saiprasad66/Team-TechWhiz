import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HealthhistoryComponent } from 'src/app/Patient/healthhistory/healthhistory.component';
import { ViewCheckUpComponent } from 'src/app/Patient/view-check-up/view-check-up.component';
import { ViewPrescriptionComponent } from 'src/app/Patient/view-prescription/view-prescription.component';
import { PrescriptionComponent } from '../add-prescription/prescription.component';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.css']
})
export class AddDiagnosisComponent {

  constructor(private dailog:MatDialog,private router:Router){}
  pname="Jonny";
  bg="A +ve";
  Age=25;
  Height=175;
  SPO2=98;
  SugarLevel="normal";
  Allergy="None";
  Gender="Male";
  Weight=65;
  BP=100;
  Temp=102;
  Additional="Nothing";

  Clicked(){
    this.dailog.open(PrescriptionComponent)
  }
  ViewPrescription(){
    this.dailog.open(ViewPrescriptionComponent,{
      height:'400px',width:'600px'
    })
  }

  Save(){
    this.router.navigate(['/doctor']);
  }
  viewHealthHistory(){
    // this.dailog.open(HealthhistoryComponent,{
    //   height:'1000px',width:'1000px'
    // });
    this.router.navigate(['/healthhistory']);
  }
}

import { Component , OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { PatientServicesService } from 'src/app/Service/patient-services.service';
import { Patient } from 'src/app/Models/database.models';

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
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class EditprofileComponent {

  
  public showPassword: boolean = false;
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  editdata:any;
  date:Date=new Date();
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog,private patientService: PatientServicesService) {
  }
  
  ngOnInit(): void {
    this.editdata=this.data;
  console.log(this.editdata);
  console.log(typeof(this.editdata.DOB));
   this.date = new Date(this.editdata.dateOfBirth);
   this.date.setDate(this.date.getDate());
  }
  newobj: Patient={
    patientId:this.data.patientId,
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phone:'',
    gender:'',
    dateOfBirth:'',
    city:'',
    state:'',
    zipcode:'',
    bloodGroup:''
  };
  Save(item: Patient) {
    this.newobj = item;
    this.newobj.patientId = this.data.patientId;
    this.newobj.email = this.data.email;
    console.log(this.newobj);

    this.patientService.updatePatient(this.newobj.email, this.newobj).subscribe({
        next: (response) => {
          console.log("Response : "+response);
        }
    })
    window.alert("Details Saved Successfully");
    this.dialog.closeAll();
  }
}

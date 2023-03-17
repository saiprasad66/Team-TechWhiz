﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BussinessLogic
{
    public interface IAppointment
    {
        public  IEnumerable<Models.Appointment> GetAppointmentsByPatient(Guid patient_id);

        public IEnumerable<Models.Appointment> GetAppointmentsByDate(DateTime date);

        public IEnumerable<Models.Appointment> GetAppointmentsByDoctor(Guid doctor_id);

        public IEnumerable<Models.Appointment> GetAppointmentsBystatus(DateTime date);

        public Models.Appointment UpdateStatus(Guid appointment_id,string status);

        public Models.Appointment AddAppointment(Models.Appointment appointment);

  

       



    }
}

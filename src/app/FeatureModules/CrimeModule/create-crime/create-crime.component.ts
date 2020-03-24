import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Crime } from '../../../Models/crime.model';
import { Router } from '@angular/router';
import { CrimeService } from '../../../Services/crime.service';
import { Nationality } from '../../../Models/nationality.model';


@Component({
    selector: 'app-create-crime',
    templateUrl: './create-crime.component.html',
    styleUrls: ['./create-crime.component.css']
})
export class CreateCrimeComponent implements OnInit {
    // @ViewChild('employeeForm') public createEmployeeForm: NgForm;
    @ViewChild('crimeForm', { static: false }) public createCrimeForm: NgForm;
    nationalities: Nationality[];
  public  nationalityList: Nationality[] = [
        {
            id: 1,
            name: 'Nepali',
        },
        {
            id: 2,
            name: 'Indian',
        },
        {
            id: 3,
            name: 'Chiniese',
        },
        {
            id: 4,
            name: 'Pakistani',
        },
    ];
    public crime: Crime = {
        id: null,
        name: null,
        gender: 'male',
        age: null,
        nationality: null,
        complaint: null,
        investigationAssignee: null,
        caseNumber: null,
        fileNumber: null,
        attachment: null,
        relatedLink: null,
        progressDetail: null,
        medium: null,
        email: 'a@gmail.com',
        phoneNumber: null,
        contactPreference: 'email',
        date: null,
        remarks: null,
        isActive: null,
    }

    constructor(private _router: Router, private _crimeService: CrimeService) { }

    ngOnInit() {
        this.nationalities = this.nationalityList;
    }

    //saveCrime(crimeForm: NgForm): void {
    //    console.log(crimeForm);
    //}
    //saveCrime(crimeForm: NgForm): void {
    //    console.log(crimeForm);
    //}
    saveCrime(crime: Crime): void {
        debugger;
        const newCrime: Crime = Object.assign({}, this.crime);
        this._crimeService.save(newCrime);
        //this._crimeService.save(crime);
        this.createCrimeForm.reset();
        this._router.navigate(['/crime/list']);
        console.log(crime);
    }
}

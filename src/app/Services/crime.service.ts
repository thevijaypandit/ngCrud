import { Injectable } from '@angular/core';
import { Crime } from '../Models/crime.model';

@Injectable({
    providedIn: 'root'
})
export class CrimeService {
    private crimeList: Crime[] = [
        //{
        //    id: 1,
        //    caseNumber: '1',
        //    fileNumber: '1',
        //    name: 'Mark',
        //    gender: 'Male',
        //    age: '25',
        //    nationality: 'Hindu',
        //    complaint: 'fraud',
        //    investigationAssignee: 'Ramaesh',
        //    contactPreference: 'Email',
        //    email: 'mark@pragimtech.com',
        //    attachment: '',
        //    relatedLink: '',
        //    progressDetail: '',
        //    medium: 'abc',
        //    remarks: '',
        //    //dateOfBirth: new Date('10/25/1988'),
        //    isActive: true,
        //},
        //{
        //    id: 2,
        //    caseNumber: '2',
        //    fileNumber: '2',
        //    name: 'Akash',
        //    gender: 'Male',
        //    age: '25',
        //    nationality: 'Hindu',
        //    complaint: 'fraud',
        //    investigationAssignee: 'Ramaesh',
        //    contactPreference: 'Email',
        //    email: 'mark@pragimtech.com',
        //    attachment: '',
        //    relatedLink: '',
        //    progressDetail: '',
        //    medium: 'abc',
        //    remarks: '',
        //    //dateOfBirth: new Date('10/25/1988'),
        //    isActive: true,
        //},
        //{
        //    id: 3,
        //    caseNumber: '3',
        //    fileNumber: '3',
        //    name: 'Subin',
        //    gender: 'Male',
        //    age: '25',
        //    nationality: 'Hindu',
        //    complaint: 'fraud',
        //    investigationAssignee: 'Ramaesh',
        //    contactPreference: 'Email',
        //    email: 'mark@pragimtech.com',
        //    attachment: '',
        //    relatedLink: '',
        //    progressDetail: '',
        //    medium: 'abc',
        //    remarks: '',
        //    //dateOfBirth: new Date('10/25/1988'),
        //    isActive: true,
        //},

        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            age: '25',
            caseNumber: '1',
            fileNumber: '101',
            complaint: 'fraoud',
            investigationAssignee: 'Ramesh',
            progressDetail: 'Running',
            medium: 'FaceBook',
            attachment: 'N/A',
            relatedLink: 'www.facebook.com',
            remarks: 'Running',
            email: 'mark@test.com',
            date: new Date('10/25/1988'),
            isActive: true,
            nationality: 'Nepali',
            photoPath: 'assets/images/mark.png',

        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: '2345978640',
            age: '20',
            caseNumber: '2',
            fileNumber: '103',
            complaint: 'fraoud',
            investigationAssignee: 'Ramesh',
            progressDetail: 'Running',
            medium: 'Whatsapp',
            attachment: 'N/A',
            relatedLink: 'www.whatsapp.com',
            remarks: '',
            email: 'mark@test.com',
            date: new Date('10/25/1988'),
            isActive: true,
            nationality: 'Nepali',
            photoPath: 'assets/images/mary.png'
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: '5432978640',
            age: '35',
            caseNumber: '3',
            fileNumber: '103',
            complaint: 'fraoud',
            investigationAssignee: 'Ramesh',
            progressDetail: 'Running',
            medium: 'Instagram',
            attachment: 'n/a',
            relatedLink: 'www.instagram.com',
            remarks: '',
            email: 'mark@test.com',
            date: new Date('10/25/1988'),
            isActive: true,
            nationality: 'Nepali',
            photoPath: 'assets/images/john.png'
        },

    ];
    constructor() { }
    getCrimes(): Crime[] {
        //debugger;
        return this.crimeList;
    }
    save(crime: Crime) {
        this.crimeList.push(crime);
    }
    getCrimeById(id: number): Crime {
        return this.crimeList.find(c => c.id == id);
    }
}

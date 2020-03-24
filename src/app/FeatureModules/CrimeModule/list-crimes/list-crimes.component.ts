import { Component, OnInit } from '@angular/core';
import { CrimeService } from '../../../Services/crime.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Crime } from '../../../Models/crime.model';

@Component({
    selector: 'app-list-crimes',
    templateUrl: './list-crimes.component.html',
    styleUrls: ['./list-crimes.component.css']
})
export class ListCrimesComponent implements OnInit {
     crimeList: Crime[];
    searchTerm: string;
    constructor(private _crimeService: CrimeService, private _router: Router, private _route: ActivatedRoute) { }

    ngOnInit() {
        //debugger;
        this.crimeList = this._crimeService.getCrimes();
        console.log(this.crimeList);
    }
    onClick(crimeId: number) {
        debugger;
        this._router.navigate(['/crime/list/', crimeId]);
    }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrimeService } from '../../../Services/crime.service';
import { Crime } from '../../../Models/crime.model';

@Component({
    selector: 'app-detail-crime',
    templateUrl: './detail-crime.component.html',
    styleUrls: ['./detail-crime.component.css']
})
export class DetailCrimeComponent implements OnInit {
    crime: Crime;
    private _id;
    constructor(private _router: Router, private _route: ActivatedRoute, private _crimeService: CrimeService) { }

    ngOnInit() {
        debugger;
        //const id = +this._route.snapshot.paramMap.get('id');
        //this.crime = this._crimeService.getCrimeById(id);

        //const id1 = +this._route.paramMap.subscribe(params => {
        //    this.id1 = +params.get['id'];
        //    this.crime = this._crimeService.getCrimeById(id1);
        //});
        // this.crime = this._crimeService.getCrimeById(id1);
        //console.log(id1);

        this._route.paramMap.subscribe(params => {
            this._id = +params.get('id');
            this.crime = this._crimeService.getCrimeById(this._id);
        });
    }

    getNextCrime() {
        debugger;
        if (this._id < 3) {
            this._id = this._id + 1;
        } else {
            this._id = 1;
        }

        this._router.navigate(['/crime/list/', this._id]);
    }

}

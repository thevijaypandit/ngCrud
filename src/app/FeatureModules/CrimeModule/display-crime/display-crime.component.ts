import { Component, OnInit, Input } from '@angular/core';
import { Crime } from '../../../Models/crime.model';

@Component({
    selector: 'app-display-crime',
    templateUrl: './display-crime.component.html',
    styleUrls: ['./display-crime.component.css']
})
export class DisplayCrimeComponent implements OnInit {
    @Input() crime: Crime
    constructor() { }

    ngOnInit() {
    }

}

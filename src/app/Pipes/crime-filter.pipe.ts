import { Pipe, PipeTransform } from '@angular/core';
import { Crime } from '../Models/crime.model';

@Pipe({
    name: 'crimeFilter',
    pure: false,
})
export class CrimeFilterPipe implements PipeTransform {

    transform(crimeList: Crime[], searchTerm: string): Crime[] {
        //debugger;
        if (!crimeList || !searchTerm) {
            //debugger;
            console.log(crimeList);
            //console.log(searchTerm.toLowerCase());
            return crimeList;

        }
        //debugger;

        //console.log();
        return crimeList.filter(crime =>
            crime.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)

    }
}


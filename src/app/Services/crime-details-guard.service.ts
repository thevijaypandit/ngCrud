import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CrimeService } from './crime.service';

@Injectable({
    providedIn: 'root'
})
export class CrimeDetailsGuardService implements CanActivate {

    constructor(private _router: Router, private _crimeService: CrimeService) { }

    // Provide implementation for canActivate() method of CanActivate interface
    // Return true if navigation is allowed, otherwise false
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const crimeExists = !!this._crimeService.getCrimeById(+route.paramMap.get('id'));
        debugger;
        if (crimeExists) {
            debugger;
            return true;
        } else {
            debugger;
            this._router.navigate(['/crime/notfound']);
            return false;
        }
    }
}

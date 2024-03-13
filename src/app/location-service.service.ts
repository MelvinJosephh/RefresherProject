import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//defining the Location interface
export interface Location {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private locations: Location[] = [
    { id: 1, name: 'Nairobi' },
    { id: 2, name: 'Mombasa' },
    { id: 3, name: 'Taita Taveta' },
    { id: 4, name: 'Nyandarua' },
    { id: 5, name: 'Kitui' },
    { id: 6, name: 'Kajiado' },
    { id: 7, name: 'Tharaka Nithi' },
    { id: 8, name: 'Meru' },
    { id: 9, name: 'Kirinyaga' },
    { id: 10, name: 'Bomet' },
  ];

  constructor() {}

  getLocations(): Observable<Location[]> {
    return of(this.locations);
  }
}

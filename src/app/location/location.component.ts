import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationService, Location } from '../location-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
})
export class LocationComponent implements OnInit {
  allLocations$!: Observable<Location[]>;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    //here, I call the getLocations() method from the service and assign the returned observable to allLocations$.
    this.allLocations$ = this.locationService.getLocations();
  }
}

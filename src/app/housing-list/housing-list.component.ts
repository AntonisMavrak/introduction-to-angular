import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from "../housing-location";

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();
  results: HousingLocation[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  selectLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
  searchHousingLocations(searchText: string) {
    if (!searchText) return;
    this.results = this.locationList.filter(location => {
      return location.city.toLowerCase().includes(searchText.toLowerCase());
    });
  }
}

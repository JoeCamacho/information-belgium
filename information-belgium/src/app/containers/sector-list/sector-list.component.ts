import {Component, OnInit} from '@angular/core';
import * as dataResources from '../../data/dataResources';
import {ActivatedRoute} from '@angular/router';
import {ResourcePortal} from '../../models';
import {Location} from '@angular/common';

@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.scss']
})
export class SectorListComponent implements OnInit {

  public filteredDataResources: ResourcePortal[];
  public firstDataResource: ResourcePortal;

  constructor(public route: ActivatedRoute,
              public location: Location) {
  }

  ngOnInit() {
    this.filteredDataResources = dataResources.dataResources.filter(resource => resource.sector === this.route.snapshot.params.sectorId);
    window.scroll(0, 0);
    this.firstDataResource = this.filteredDataResources[0];
  }

  back() {
    this.location.back();
  }

}

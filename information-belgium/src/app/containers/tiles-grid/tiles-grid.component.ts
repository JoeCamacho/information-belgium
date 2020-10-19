import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tiles-grid',
  templateUrl: './tiles-grid.component.html',
  styleUrls: ['./tiles-grid.component.scss']
})
export class TilesGridComponent implements OnInit {

  public infoTopics = [
    {
      id: '1',
      image: 'education.jpg'
    },
    {
      id: '2',
      image: 'healthcare.jpg'
    },
    {
      id: '3',
      image: 'history.jpg'
    },
    {
      id: '4',
      image: 'housing.jpg'
    },
    {
      id: '5',
      image: 'politics.jpg'
    },
    {
      id: '6',
      image: 'recycling.jpg'
    },
    {
      id: '7',
      image: 'taxes.jpg'
    },
    {
      id: '8',
      image: 'traditions.jpg'
    },
    {
      id: '9',
      image: 'values.jpg'
    },
    {
      id: '10',
      image: 'work.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

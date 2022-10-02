import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      title: 'BooksOcean : Library application',
      image: 'book.png',
      link: 'https://Sheltered-scrubland-59088.herokuapp.com',
      details:
        'Full stack MEAN application. Frontend using HTML, CSS and Javascript and Angular. Backend using Node, Express and MongoDB.',
    },
    {
      title: 'Kerala Tourism website',
      image: 'kerala.png',
      link: 'https://sreyasag.github.io/Kerala/',
      details:
        `Website for Kerala tourism. Academic project work, Frontend using HTML, CSS and Javascript`,
    },
    {
      title: 'ICTAK ID card generator application',
      image: 'id.png',
      link: 'https://Ictak-id-generaor.herokuapp.com ',
      details:
      'Full stack MEAN application for generating ID card for students. Frontend using Angular., Backend using Node, Express and MongoDB.',
    },
    {
      title: 'Tour and campgrounds',
      image: 'camp.png',
      link: 'https://github.com/Sreyasag/campgrounds',
      details:
        'Server side rendered campground and tour guiding application using HTML, CSS, Javascript, Node, Express and MongoDB',
    },
    
  ];

  constructor() {}

  ngOnInit(): void {}
}

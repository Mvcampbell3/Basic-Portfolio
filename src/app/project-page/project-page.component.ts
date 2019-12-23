import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  projects: Project[] = [
    {
      name: 'Teammate Finder',
      img_still: 'still img',
      img_gif: 'gif img',
      link_github: 'https://github.com/Mvcampbell3/find-a-tm',
      link_website: 'https://teammate-finder-app.herokuapp.com/',
      description: 'This is a MEAN stack application which allows for users to self-rate their skills when it comes to online games, and then find other players near that skill level on various consoles. The main purpose of this application was to teach myself Typescript and Angular',
      types: ['MEAN', 'MongoDB', 'Express', 'Angular', 'NodeJS', 'Typescript', 'Javascript']
    },
    {
      name: 'Rover-Reddit',
      img_still: 'still img',
      img_gif: 'gif img',
      link_github: 'https://github.com/DavidWeid/Space-Pair-Project',
      link_website: 'https://rover-reddit.herokuapp.com/',
      description: 'Rover Reddit was the final project in my coding bootcamp. We made a MERN stack application which interfaced rover pictures from Mars onto a social media platform. The images were from the NASA Mars Rovers OpenAPI, and we also scrapped new articles from space.com',
      types: ['MERN', 'React', 'Express', 'MongoDB', 'NodeJS', 'Javascript']
    },
    {
      name: 'Better To-do',
      img_still: 'still img',
      img_gif: 'gif img',
      link_github: '',
      link_website: '',
      description: '',
      types: ['']
    },
    {
      name: 'Roosevelt Way',
      img_still: 'still img',
      img_gif: 'gif img',
      link_github: '',
      link_website: '',
      description: '',
      types: ['']
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  imagesLoaded: boolean = false;

  projects: Project[] = [
    {
      name: 'Teammate Finder',
      img_still: 'still img',
      img_gif: '../../assets/images/projects/teammate.gif',
      link_github: 'https://github.com/Mvcampbell3/find-a-tm',
      link_website: 'https://teammate-finder-app.herokuapp.com/',
      description: 'This is a MEAN stack application which allows for users to self-rate their skills when it comes to online games, and then find other players near that skill level on various consoles. The main purpose of this application was to teach myself Typescript and Angular',
      types: ['MEAN', 'MongoDB', 'Express', 'Angular', 'NodeJS', 'Typescript', 'Javascript']
    },

    {
      name: 'Rover-Reddit',
      img_still: 'still img',
      img_gif: '../../assets/images/projects/roverreddit.gif',
      link_github: 'https://github.com/DavidWeid/Space-Pair-Project',
      link_website: 'https://rover-reddit.herokuapp.com/',
      description: 'Rover Reddit was the final project in my coding bootcamp. We made a MERN stack application which interfaced rover pictures from Mars onto a social media platform. The images were from the NASA Mars Rovers OpenAPI, and we also scraped news articles from space.com',
      types: ['MERN', 'React', 'Express', 'MongoDB', 'NodeJS', 'Javascript']
    },

    {
      name: 'Better To-do',
      img_still: 'still img',
      img_gif: '../../assets/images/projects/bettertodo.gif',
      link_github: 'https://github.com/Mvcampbell3/betterToDo',
      link_website: 'https://better-todos.herokuapp.com/',
      description: 'This is a to-do application where you can group tasks by project, and also choose which projects to display. It is an Express-Handlebars application which uses MongoDB and NodeJS.',
      types: ['MongoDB', 'NodeJS', 'Express', 'Express-Handlebars']
    },

    {
      name: 'Roosevelt Way (WIP)',
      img_still: 'still img',
      img_gif: '../../assets/images/projects/rooseveltway.gif',
      link_github: 'https://github.com/Mvcampbell3/parks-and-rec',
      link_website: 'https://roosevelt-way.herokuapp.com',
      description: 'This is a WIP MEAN stack application which will provide information to a user about the National Parks of the U.S. It will also give the user the ability to make travel itineraries, which will keep track of the parks they want to see on a given trip. The main purpose of this site is to give my parents a place where they can find all of the information they need.',
      types: ['MEAN', 'MongoDB', 'Angular', 'NodeJs', 'Express', 'Typescript']
    },

    {
      name: 'Yahtzee React',
      img_still: 'still img',
      img_gif: '../../assets/images/projects/yahtzee.gif',
      link_github: 'https://github.com/Mvcampbell3/YahtzeeReact',
      link_website: 'https://yahtzee-react.herokuapp.com/',
      description: 'This is a MERN stack application which allows users to play the dice game Yahtzee, and if they are logged in, track thier high scores. This project has gone through many evolutions. Because the scoring system is very complex, it was a very good way for me to learn several concepts in web development.',
      types: ['MERN', 'MongoDB', 'Express', 'React', 'NodeJS']
    },

    {
      name: 'Trivia Madness',
      img_still: 'still img',
      img_gif: '../../assets/images/projects/trivia.gif',
      link_github: 'https://github.com/Mvcampbell3/triviaMadness',
      link_website: 'https://triviamadness.herokuapp.com/',
      description: 'MERN Stack application where users create and play trivia games. There is a lot of opportunity to improve the scope if this application through things such as a an overall scoring system or ability to leave comments on quizzes. I built this application to better understand form interaction in React and state management.',
      types: ['MERN', 'MongoDB', 'Express', 'React', 'NodeJS']
    },

    {
      name: 'Rover Hooks',
      img_still: 'still img',
      img_gif: '../../assets/images/projects/roverhooks.gif',
      link_github: 'https://github.com/Mvcampbell3/hook-space',
      link_website: 'https://rover-pics-react.netlify.com/rover',
      description: 'This is a React front-end website which displays Spirit and Oppotunity rover pictures from Mars using the NASA OpenAPI. The main purpose of this site was to experiment learning React-Hooks and parallax CSS',
      types: ['React', 'React-Hooks', 'Express', 'Node']
    }

  ]

  constructor() { }

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    let loaded = 0;
    const images = this.projects.map(project => project.img_gif);
    images.forEach(image => {
      const newImage = new Image();
      newImage.src = image;
      newImage.onload = () => {
        loaded++;

        if (loaded === images.length) {
          setTimeout(() => {
            this.imagesLoaded = true;

          }, 300)
        }
      }
    })
  }

  testDomContent() {
    window.addEventListener('DOMContentLoaded', (e) => {
      console.log(e)
      console.log('loaded ?')
      return this.imagesLoaded = true;
    })
  }

}

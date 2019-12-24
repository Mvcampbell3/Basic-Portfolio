import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  loadedImages: boolean = false;

  images: string[] = [
    '../../assets/images/HTML.jpg',
    '../../assets/images/CSS.png',
    '../../assets/images/Javascript.png',
    '../../assets/images/Typescript.png',
    '../../assets/images/Angular.png',
    '../../assets/images/React.png',
    '../../assets/images/Express.png',
    '../../assets/images/Node.png',
    '../../assets/images/MySQL.png',
    '../../assets/images/MongoDB.png'
  ]

  constructor() { }

  ngOnInit() {
    this.loadImages()
  }

  loadImages() {
    let loaded = 0;
    this.images.forEach(image => {
      const newImage = new Image();
      newImage.src = image;
      newImage.onload = () => {
        loaded++;
        if (loaded === this.images.length) {
          this.loadedImages = true;
        }
      }
    })
  }

}

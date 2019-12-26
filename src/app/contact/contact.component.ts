import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  loaded: boolean = false;

  images: string[] = [
    '../../assets/images/icons/githubwhite.png',
    '../../assets/images/icons/linkedin.svg'
  ]

  constructor() { }

  ngOnInit() {
    this.loadPictures()
  }

  loadPictures() {
    let loaded = 0;
    this.images.forEach(image => {
      const newImage = new Image();
      newImage.src = image;
      newImage.onload = () => {
        loaded ++;
        if (loaded === this.images.length) {
          this.loaded = true;
        }
      }
    })
  }

}

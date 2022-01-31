import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-contact',
  templateUrl: './banner-contact.component.html',
  styleUrls: ['./banner-contact.component.scss']
})
export class BannerContactComponent implements OnInit {

  bannerContact: string[] = ['assets/images/banner-contact.png']

  constructor() { }

  ngOnInit(): void {
  }

}

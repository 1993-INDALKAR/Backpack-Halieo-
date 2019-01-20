import { Component, OnInit } from '@angular/core';
// import { $ } from 'protractor';
// import { $ } from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  

  mySlideImages: Object[];
  constructor() {
    this.mySlideImages = [{image:"https://coresites-cdn.factorymedia.com/outdoorsmagic/wp-content/uploads/2017/05/20170330_OM_daypacks_P7A5881_1920px.jpg",description: "Practical Anti Theft Design with hidden compartments to protect important stuff that is your Peace of Mind"},{image:"https://cdn.photographylife.com/wp-content/uploads/2014/11/Think-Tank-Airport-Roller-Derby-Camera-Bag-9.jpg",description:"Superior Durability & Long Lasting Built Quality for quality product which would serve for years to come."},];
 }

  mySlideOptions = { items: 1, dots: true, nav: false,loop:true,autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true };

  ngOnInit() {

 
  }

  fireEvent(e){
    // console.log(e.path[1]);
    // console.log(e.path[1].id);
    // // debugger;

    //  this.id = e.path[1];

    // this.id.addClass("page-link-div");

    // $(`#${id}`).addClass("page-link-div");
  }

}

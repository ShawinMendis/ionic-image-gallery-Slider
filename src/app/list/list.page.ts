import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2.5,
    spaceBetween: 5,
    speed: 400
  };

  items = [
    {
      src: "assets/images/photo1.jpeg"
    },

    {
      src: "assets/images/photo5.jpg"
    },

    {
      src: "assets/images/photo7.jpg"
    },
    {
      src: "assets/images/photo8.jpg"
    },
    {
      src: "assets/images/photo9.jpg"
    },

    {
      src: "assets/images/photo11.jpg"
    }
  ];
  ngOnInit() {}
}

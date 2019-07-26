import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
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

  constructor() {}
}

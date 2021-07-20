import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  constructor() {
    this.loadScripts();
    // this.topScripts();
  }
  loadScripts() {
    // This array contains all the files/CDNs
    const dynamicScripts = ['assets/nut.js'];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  // topScripts() {
  //   // This array contains all the files/CDNs
  //   const dynScripts = ['assets/next.js'];
  //   for (let i = 0; i < dynScripts.length; i++) {
  //     const nd = document.createElement('script');
  //     nd.src = dynScripts[i];
  //     nd.type = 'text/javascript';
  //     nd.async = false;
  //     document.getElementsByTagName('head')[0].appendChild(nd);
  //   }
  // }
  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    items: 1,
    margin: 10,
    nav: false,
    loop: false,
    dots: false,
    rewind: true,
    mouseDrag: true,
    lazyLoad: false,
    autoplay: false,
  }
  csmOptions: OwlOptions = {
    items: 4,
    margin: 30,
    nav: false,
    loop: false,
    dots: false,
    rewind: true,
    mouseDrag: true,
    lazyLoad: false,
    autoplay: false,
  }


}

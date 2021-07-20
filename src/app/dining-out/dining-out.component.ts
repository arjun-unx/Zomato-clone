import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-dining-out',
  templateUrl: './dining-out.component.html',
  styleUrls: ['./dining-out.component.css']
})
export class DiningOutComponent implements OnInit {

  constructor() {
    this.loadScripts();
  }
  loadScripts() {
    // This array contains all the files/CDNs
    const dynamicScripts = ['assets/next.js'];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    items: 4,
    margin: 10,
    nav: false,
    loop: false,
    dots: false,
    rewind: true,
    mouseDrag: true,
    lazyLoad: false,
    autoplay: false,
  }

}

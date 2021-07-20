import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-nightlife',
  templateUrl: './nightlife.component.html',
  styleUrls: ['./nightlife.component.css']
})
export class NightlifeComponent implements OnInit {

  constructor() {
    this.loadScripts();
  }
  loadScripts() {
    // This array contains all the files/CDNs
    const dynamicScripts = ['assets/life.js'];
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
    items: 2,
    margin: 15,
    nav: false,
    loop: false,
    dots: false,
    rewind: true,
    mouseDrag: true,
    lazyLoad: false,
    autoplay: false,
  }
}

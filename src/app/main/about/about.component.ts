import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    console.log('wowow');
    // let aa = []
    const list = Array.from(document.querySelectorAll('.news a'));
    console.log(list);
    // for(let item of list as any){
    //   console.log(item.text);
    //   console.log(item.getAttribute("href"));
    //   aa.push(item.text)
    // }
    // console.log(aa);
  }

}

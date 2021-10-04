import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  constructor() { }

  posts = [{
    title:123
  },{
    title:456
  }]

  ngOnInit(): void {
  }

}

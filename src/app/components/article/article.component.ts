import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.article = this.route.snapshot.data.article;
    console.log('article: ', this.article);
  }

}

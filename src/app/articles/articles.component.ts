import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Article } from '../modals/Article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  dataSource: MatTableDataSource <Article>; // article hiya titre mtaa tableau fil DB
  constructor(private ArticleService: ArticleService , private dialog: MatDialog) { 
    //this.dataSource = this.ArticleService.tab;
    this.dataSource = new MatTableDataSource (this.ArticleService.tab);
  }
  
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['idArticle', 'titre', 'annee', 'auteur','actions'];

}

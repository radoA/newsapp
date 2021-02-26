import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  //public folder: string;
  articles;

  constructor(private apiService:ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.ionViewDidEnter();
  }

  ionViewDidEnter(){
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
}

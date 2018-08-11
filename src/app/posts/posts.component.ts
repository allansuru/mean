import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    console.log('teste');
    this.postService.getAllPosts()
    .subscribe(post => {
      this.posts = post;
      console.log('Posts: ', this.posts);
    });
  }

}

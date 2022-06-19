import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { ApiJsonService } from '../services/api-json.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!: Post[];
  imagen = ''
  constructor(private psvc: ApiJsonService) { }

  ngOnInit(): void {
    this.getposts();
  }

  getposts() {
    this.psvc.getPost().subscribe({
      next: (res) => {
        console.table(res);
        this.posts = res.map(({ title, body }: Post) => {
          return {
            title: title,
            body: body,
          }
        });
      }
    });
  };
};

import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

 @Input() postTitle: string;
 @Input() postContent: string;
 @Input() postCreatedAt: string;
 @Input() postLoveIts: number;
 @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {}

  onLoveIts() {
    this.postLoveIts++;
    this.post.loveIts = this.postLoveIts;
    this.postsService.savePosts();   
    }

  onDontLoveIts() { 
    this.postLoveIts--;
    this.post.loveIts = this.postLoveIts;
    this.postsService.savePosts();  
    }


  onDeletePost(post: Post) {
    this.postsService.removePost(post);
    }
}


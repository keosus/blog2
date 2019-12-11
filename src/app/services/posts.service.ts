import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Post } from '../models/post.model';

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
    }

  emitPosts() {
    this.postsSubject.next(this.posts);
    }

  
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
    }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
        }
      );
    }

createNewPost(newPost: Post) {
  this.posts.push(newPost);
  this.savePosts();
  this.emitPosts();
  }

removePost(post: Post) {
  const postIndexToRemove = this.posts.findIndex(
    (postEl) => {
      if(postEl === post) {
        return true;
      }
    }
  );
  this.posts.splice(postIndexToRemove, 1);
  this.savePosts();
  this.emitPosts();
  }
}
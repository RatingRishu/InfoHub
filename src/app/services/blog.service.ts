import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../Models/blogs.model';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  http: HttpClient = inject(HttpClient);

  constructor() { }

  getAllBlogs() {
      return this.http
      .get<{ [key: string]: Blog }>(
        'https://infohub-613d6-default-rtdb.firebaseio.com/blog.json'
      )
      .pipe(
        map((response) => {
          console.log(response);
          // Tansforming tasks - in order to get desirable data to use it
          let allTasks = [];

          for (let key in response) {
            if (response.hasOwnProperty(key))
              allTasks.push({ ...response[key], id: key });
          }

          // console.log(response);
          return allTasks;
        }),
      );
  }
  
  createBlogs(data: Blog) {
    this.http.post<{ name: string }>(
      'https://infohub-613d6-default-rtdb.firebaseio.com/blog.json',
      data
    ).subscribe(res => {
      // console.log(res);
    })
  }
}

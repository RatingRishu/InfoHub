import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';


export interface BlogResponse {
  title: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

  http: HttpClient = inject(HttpClient);
  

  title: string = '';
  description: string = '';
  image: string = '';

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http
      .get<BlogResponse>(
        'https://infohub-613d6-default-rtdb.firebaseio.com/blog.json'
      )
      .subscribe((res) => {
        console.log(res);
        this.title = res.title || 'Default Title';
        this.description = res.description || 'Default Description';
        this.image =
          res.image ||
          'https://gist.github.com/assets/99909689/5f72d4b7-aaab-47c4-93c2-f19b52a8c2ac';
      });
  }
  
}

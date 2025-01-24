import { Component, inject } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../Models/blogs.model';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

  

  title: string = '';
  description: string = '';
  image: string = '';

  allBlogs: Blog[] = [];

  blogsService: BlogService = inject(BlogService);
  

  ngOnInit(): void {
    this.getData();
  }

  // getData() {
  //   this.http
  //     .get<BlogResponse>(
  //       'https://infohub-613d6-default-rtdb.firebaseio.com/blog.json'
  //     )
  //     .subscribe((res) => {
  //       console.log(res);
  //       this.title = res.title || 'Default Title';
  //       this.description = res.description || 'Default Description';
  //       this.image =
  //         res.image ||
  //         'https://gist.github.com/assets/99909689/5f72d4b7-aaab-47c4-93c2-f19b52a8c2ac';
  //     });
  // }

  // getData() {
  //   this.blogsService.getAllBlogs()
  //   .subscribe((res) => {
  //     console.log(res);
  //     this.title = res.title || 'Default Title';
  //     this.description = res.description || 'Default Description';
  //     this.image =
  //       res.image ||
  //       'https://gist.github.com/assets/99909689/5f72d4b7-aaab-47c4-93c2-f19b52a8c2ac';
  //   });
  // }

  getData() {
    this.blogsService.getAllBlogs()
    .subscribe({
      next: (blog) => {
      this.allBlogs = blog;
      console.log(this.allBlogs);
      // this.isLoading = false;

    },
    error: (error) => {
      // this.setErrorMsg(error);
      // this.isLoading = false;
      console.log(error);
    }

    });
  }

  // create(data: Blog) {
  //   this.blogsService.createBlogs(data);
  // }
  
}

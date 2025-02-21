// import { Component, inject } from '@angular/core';
// import { BlogService } from '../services/blog.service';
// import { Blog } from '../Models/blogs.model';


// @Component({
//   selector: 'app-blogs',
//   templateUrl: './blogs.component.html',
//   styleUrls: ['./blogs.component.css']
// })
// export class BlogsComponent {

  

//   title: string = '';
//   description: string = '';
//   image: string = '';

//   allBlogs: Blog[] = [];

//   blogsService: BlogService = inject(BlogService);
  

//   ngOnInit(): void {
//     this.getData();
//   }

//   getData() {
//     this.blogsService.getAllBlogs()
//     .subscribe({
//       next: (blogs) => {
//         this.allBlogs = blogs.map(blog => ({
//           ...blog,
//           shortDescription: blog.shortDescription || 'No short description available' // Ensure it is set
//         }));
//         console.log(this.allBlogs);
//       },
//       error: (error) => {
//         console.log(error);
//       }
//     });
//   }
  
// }



import { Component, inject } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Blog } from '../Models/blogs.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  allBlogs: Blog[] = [];
  selectedBlog: Blog | null = null; // To store selected blog

  blogsService: BlogService = inject(BlogService);

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.blogsService.getAllBlogs()
      .subscribe({
        next: (blogs) => {
          this.allBlogs = blogs.map(blog => ({
            ...blog,
            shortDescription: blog.shortDescription || 'No short description available'
          }));
          console.log(this.allBlogs);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  // Function to open modal with blog details
  openBlogModal(blog: Blog) {
    this.selectedBlog = blog;
  }

  // Function to close modal
  closeBlogModal() {
    this.selectedBlog = null;
  }
}

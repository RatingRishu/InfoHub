// import { Component, inject } from '@angular/core';
// import { BlogService } from '../services/blog.service';
// import { Blog } from '../Models/blogs.model';

// @Component({
//   selector: 'app-blogs',
//   templateUrl: './blogs.component.html',
//   styleUrls: ['./blogs.component.css']
// })
// export class BlogsComponent {
//   allBlogs: Blog[] = [];
//   selectedBlog: Blog | null = null; 
//   blogsService: BlogService = inject(BlogService);

//   ngOnInit(): void {
//     this.getData();
//   }

//   getData() {
//     this.blogsService.getAllBlogs()
//       .subscribe({
//         next: (blogs) => {
//           this.allBlogs = blogs.map(blog => ({
//             ...blog,
//             shortDescription: blog.shortDescription || 'No short description available',
            
//           }));
//           console.log(this.allBlogs);
//         },
//         error: (error) => {
//           console.log(error);
//         }
//       });
//   }


//   openBlogModal(blog: Blog) {
//     this.selectedBlog = blog;
//   }

  
//   closeBlogModal() {
//     this.selectedBlog = null;
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
  selectedBlog: Blog | null = null; 
  errorMessage: string = '';  
  isLoading: boolean = true; // Track loading state

  blogsService: BlogService = inject(BlogService);

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoading = true; // Start loading
    this.errorMessage = ''; // Reset error message

    this.blogsService.getAllBlogs()
      .subscribe({
        next: (blogs) => {
          this.allBlogs = blogs.map(blog => ({
            ...blog,
            shortDescription: blog.shortDescription || 'No short description available'
          }));
          this.isLoading = false; // Stop loading
        },
        error: (error) => {
          console.error(error);
          this.isLoading = false; 
          this.errorMessage = 'Oops! We couldn’t fetch the blogs. Please try again later.';
        }
      });
  }

  openBlogModal(blog: Blog) {
    this.selectedBlog = blog;
  }

  closeBlogModal() {
    this.selectedBlog = null;
  }
}

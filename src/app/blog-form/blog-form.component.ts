import { Component, inject, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogService } from '../services/blog.service';
import { Blog } from '../Models/blogs.model';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent {

  // @ViewChild('form') taskForm: NgForm; 
  blogsService: BlogService = inject(BlogService);
  blog: Blog = new Blog();


  
  onTaskSubmit(formData: NgForm) {
    console.log(formData.value);
    this.blog = formData.value;
    console.log(this.blog);
    this.blogsService.createBlogs(this.blog);
    // this.taskData.emit(formData.value);
  }

}

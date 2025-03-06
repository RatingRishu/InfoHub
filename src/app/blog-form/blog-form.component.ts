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

  dialogMessage: string = '';
  isDialogVisible: boolean = false;


  
  // onTaskSubmit(formData: NgForm) {
  //   console.log(formData.value);
  //   this.blog = formData.value;
  //   console.log(this.blog);
  //   this.blogsService.createBlogs(this.blog);
  //   // this.taskData.emit(formData.value);
  // }

  onTaskSubmit(formData: NgForm) {
    this.blog = formData.value;
    console.log(this.blog);
    this.blogsService.createBlogs(this.blog).subscribe({
      next: () => {
        this.showDialog("Your blog has been posted successfully!");
        formData.resetForm();
      },
      error: () => {
        this.showDialog("Failed to post your blog. Please try again.");
      }
    });
  }

  showDialog(message: string) {
    this.dialogMessage = message;
    this.isDialogVisible = true;
  }

  closeDialog() {
    this.isDialogVisible = false;
  }

}

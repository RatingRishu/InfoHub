import { Component } from '@angular/core';
import { BodyService } from './body.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  starCount: number | undefined;
  contributors: any[] = [];
  owner: string = 'RatingRishu';
  repo: string = 'InfoHub';

  constructor(private bodyService: BodyService, public router: Router) { }

  ngOnInit(): void {
    this.bodyService.getStarCount(this.owner, this.repo).subscribe(data => {
      this.starCount = data.stargazers_count;
    });

    this.bodyService.getContributors(this.owner, this.repo).subscribe(data => {
      this.contributors = data;
    });
  }

  onclickFrontEnd() {
    console.log("test");
    this.router.navigateByUrl('/frontendTopics');
  }
  onclickbackend() {
    console.log("test");
    this.router.navigateByUrl('/backendtopics');
  }
  onclicklibraries() {
    console.log("test");
    this.router.navigateByUrl('/librariestopics');
  }
}

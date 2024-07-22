import { Component } from '@angular/core';
import { BodyService } from './body.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  starCount: number | undefined;
  owner: string = 'RatingRishu';
  repo: string = 'InfoHub';

  constructor(private bodyService: BodyService) { }

  ngOnInit(): void {
    this.bodyService.getStarCount(this.owner, this.repo).subscribe(data => {
      this.starCount = data.stargazers_count;
    });
  }
}

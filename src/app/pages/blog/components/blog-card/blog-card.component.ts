import { Component, Input } from '@angular/core';
import { IBlog } from '../../../../core/types/blog.model';
import { UserBlogComponent } from '../user/user.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [UserBlogComponent, RouterModule],
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],  
})
export class BlogCardComponent {
  @Input() blog!: IBlog; 
  placeholderImage: string = 'assets/images/holder.png';  
  mainImageLoaded: boolean = false; 

  navigateToLink(): void {
    window.open(this.blog.url, '_blank');
  }
}

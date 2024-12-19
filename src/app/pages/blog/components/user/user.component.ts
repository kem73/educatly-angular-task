import { Component, Input } from '@angular/core';
import { IBlog } from '../../../../core/types/blog.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserBlogComponent {
  @Input() blogUser!: IBlog;
}

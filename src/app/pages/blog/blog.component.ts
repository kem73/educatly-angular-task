import { Component } from '@angular/core';
import { HeaderComponent } from './components/shared/header/header.component';
import { BlogsComponent } from './components/blogs/blogs.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HeaderComponent, BlogsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogPageComponent {}

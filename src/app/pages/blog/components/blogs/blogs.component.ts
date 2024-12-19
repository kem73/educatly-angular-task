import { Component, OnInit } from '@angular/core';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { IBlog } from '../../../../core/types/blog.model';
import { CommonModule } from '@angular/common';
import { BlogsService } from '../../../../core/services/blogs.service';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { ErrorBlogComponent } from '../shared/error/error.component';
import { EmptyBlogComponent } from '../shared/empty/empty.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    CommonModule,
    BlogCardComponent,
    LottieComponent,
    ErrorBlogComponent,
    EmptyBlogComponent,
  ],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogs: IBlog[] = [];
  isError = false;
  isLoading = false;
  pageIndex = 1;

  errorOptions: AnimationOptions = { path: '/assets/icons/lottieIcon/error.json' };
  emptyOptions: AnimationOptions = { path: '/assets/icons/lottieIcon/empty.json' };

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles(): void {
    if (this.isLoading) return;

    this.isError = false;
    this.isLoading = true;

    this.blogsService.getArticles(this.pageIndex).subscribe({
      next: (articles) => this.onArticlesSuccess(articles),
      error: () => this.onArticlesError(),
    });
  }

  private onArticlesSuccess(articles: IBlog[]): void {
    this.isLoading = false;
    this.blogs.push(...articles);
  }

  private onArticlesError(): void {
    this.isLoading = false;
    this.isError = true;
  }

  loadMoreArticles(): void {
    if (this.isLoading) return;

    this.pageIndex++;
    this.fetchArticles();
  }

  trackById(index: number, blog: IBlog): number {
    return blog.id; 
  }
}

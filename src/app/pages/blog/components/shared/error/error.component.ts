import { Component } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-error-blog',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorBlogComponent {
  errorOptions: AnimationOptions = {
    path: '/assets/icons/lottieIcon/error.json',
  };
}

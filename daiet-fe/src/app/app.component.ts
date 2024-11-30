import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutComponent } from './core/components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}

  title = 'dAIet';

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}

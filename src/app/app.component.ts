import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="noprint"></header>
    <main class="main-content">
      <nav class="navbar noprint">
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/about-me">About Me</a></li>
          <li><a routerLink="/resume">Resume</a></li>
          <li><a routerLink="/projects">Projects</a></li>
        </ul>
      </nav>
      <section class="content">
        <router-outlet />
      </section>
    </main>
    <body></body>
    <footer>
    <p>Copyright 2024</p>
    </footer>
  `,
  styles: [``],
})
export class AppComponent {}

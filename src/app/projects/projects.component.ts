import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <div class="projects-container">
      <h1> Some of my past projects </h1>
    <div class="projects">
      <h4> Biosite </h4>
      <p> Made with HTML5 and CSS. I created this website to practice building accessible and easily navigated webpages.</p>
      <a href="https://ky1015.github.io/biosite/" target="_blank">Link</a>
      <br/>

      <hr>
      <h4> In-n-Out Books </h4>
      <p> A group project working with a mock database to learn NoSQL.</p>
      <a href="https://github.com/ky1015/in-n-out-books" target="_blank"> Github Repo </a>
      <br/>
      <hr>
      <h4> RPG Character Creator </h4>
      <p> Made with HTML5, CSS, and JavaScript using Angular. I learned how to work in Angular for the first time and do a single-page application. </p>
      <a href="https://ky1015.github.io/web-425/rpg-character-builder/" target="_blank">Link</a>
      <img src="/assets/rpg-screen.png" alt="screenshot of how the RPG Character Creator should appear">

      <hr>
      <h4> Ikran Rookery </h4>
      <p>A website mock-up made in Figma demonstrating some of my own work painting the interactive shoulder banshees and design work done in Canva.</p>
      <a href="https://www.figma.com/site/P5d8loyLg5K0360he0EeUw/Rookery?t=HsXQigrTJINW0Zxu-1" target="_blank">Link</a>
      </div>

    </div>
  `,
  styles: `
  .projects h4 {
    font-family: 'Fraunces'
  }

  .projects p {
    font-family: 'Quicksand';
    }
  `
})
export class ProjectsComponent {
  }

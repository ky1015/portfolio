import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  template: `
   <div class="me-container">
   <div class="me">
   <h2>About Me </h2>
   <img src="/assets/me.jpg" alt="A picture of Kylie" class="about-me-pic">
   </div>
   <div class="me-paragraph">
   <p>I was born and raised in Utah. I studied biology and got a bachelors degree from Utah Valley University in 2021.
   My family and I moved down to Florida in the summer of 2022. I got a job at Disney and have loved getting to work in the theme parks. I love visiting the Disney Parks and
   trying new foods and experiences. I had been interested in coding and web development for a while, and ended up taking a step into it because of the Disney Aspire Program.
   I don't have any experience outside of the classroom yet, but I am always looking to grow and improve.</p>
   </div>
   </div>
   <h3> Some of my favorite things </h3>
   <div class="favorites-grid">
   <img src="/assets/loki.jpg" alt="a black and white cocker spaniel resting his head in a hand" class="grid-image">
   <img src="/assets/bigbuddy.jpg" alt="a buff cocker spaniel sitting on a couch" class="grid-image item2">
   <img src="/assets/blossoms.jpg" alt="plum blossoms" class="grid-image item3">
   <img src="/assets/oreo.jpg" alt="a stack of oreos" class="grid-image item4">
   <img src="/assets/clouds.jpg" alt="stormy clouds" class="grid-image item5">

   </div>
  `,
  styles: `
  .me-container {
    display: inline-flex;
    }

  h2 {
    text-align: center;
    font-family: 'Quicksand';
  }
  .about-me-pic {
    height: 400px;
    width: 400px;
    border-radius: 50%;
    margin: 25px;
  }

  .me-paragraph p {
    background-color: #96DCED;
    padding: 25px;
    text-align: center;
    margin: 20px;
    border-radius: 20px;
    height: 400px;
    font-size: 1.5em;
    font-family: 'Quicksand';
  }

  h3 {
    text-align: center;
    font-family: 'Quicksand';
    font-size: 1.75em;
  }

  .favorites-grid {
    display: grid;
    margin: 50px;
    text-align: center;
    grid-gap: 5px;
  }

  .grid-image {
  height: 300px;
  width: 300px;
  border-radius: 25px;
  }

  .item2 {
  grid-column-start: 3;
  }

  .item3 {
    grid-row-start: 2;
    grid-column-start: 2;
  }

  .item4 {
    grid-row-start: 3;
    grid-column-start: 1;
  }

  .item5 {
  grid-row-start: 3;
  grid-column-start: 3;
  }
  `
})
export class AboutMeComponent {

}

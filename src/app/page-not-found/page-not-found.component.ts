import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  template: `
    <h1>
      Oops, sorry! We couldn't reach what you're looking for.
    </h1>
    <div class="pic">
      <img src='/assets/dino.png' alt='a dinosaur reaching for a shelf'>
      <h4> Error 404: Not found </h4>
    </div>
  `,
  styles: `
  h1 {
  text-align: center;
  margin: 25px;
  font-family: 'Fraunces';
  }

  .pic h4 {
  text-align: center;
  font-family: 'Quicksand';
  margin: auto;
  }

  .pic img {
  margin-left: 250px;
  }
  `
})
export class PageNotFoundComponent {

}

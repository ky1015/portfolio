export interface ListItem {
  description: string;
  }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `

    <div class="container">
    <div class="intro">
      <h2>Hello!</h2>
      <h4>Welcome to my website</h4>
      <p>
        I am currently studying Web Development at Bellevue University. I hope
        to graduate in December 2024. I like to spend time with my family and dogs. I love getting to try new foods and to explore fun places!
      </p>
    </div>
    <div [ngStyle]="{'background-image': 'url(' + backgroundImage + ')', 'background-size': 'cover', 'height': '100vh'}" class="bucket-list">
      <p>A few things on my bucket list are:</p>
      <ul class="list-container">
        <li *ngFor = "let item of list">
        <div class="card">
        {{item.description}}
        <button *ngIf="item.description === 'I want to see the'" (click)="changeBackground()"> Northern Lights</button>
        </div>
        </li>
      </ul>
    </div>
    </div>
  `,
  styles: `

  .intro {
    font-family: 'Quicksand';
    margin: 15px;
  }

  .bucket-list {
    font-family: "Fraunces";
    height: 500px;
    margin: 20px;
  }

  .bucket-list li {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
    list-style-type: none;
    flex: 0 1 calc(33.33% - 20px);
    text-align: center;
    border-radius: 20px;
  }

  .list-container {
    display: flex;
    flex-wrap: wrap;
  }

  .card {
   padding: 20px;
   background-color: #CDCBCB;
  }

  button {
    background-color: #CDCBCB;
    border: none;
    font-family: 'Fraunces';
    font-size: 1em;
    color: #0B2111;
  }

  `,
})
export class HomeComponent {
  list: ListItem[];
  backgroundImage: string = '';
      constructor() {
      this.list = [
      {
        "description": "I want to visit New Zealand and see the penguins",
      },

      {
        "description": "I want to own axolotls one day",

      },

      {
        "description": "I want to see the",
      },
    ];
  }
  changeBackground() {
    this.backgroundImage ='/assets/northern-lights.jpg'
  }
  }

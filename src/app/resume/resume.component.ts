import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  template: `
    <div class="resume-header print">
    <h1> Kylie Struhs </h1>
    <div class="grid-container print">
      <div class="experience print">
      <h3>My Experience </h3>
        <h4> Merchandise Cast Member at the Walt Disney Company </h4>
        <p> December 2022- Present </p>
        <ul>
          <li> Greets guests as they enter the store </li>
          <li> Processes payments of multiple types </li>
          <li> Organizes merchandise to fit store standards </li>
          <li> Trains fellow cast members on store and company protocols </li>
          <li> Engages with guests to discover needs and recommend products </li>
        </ul>
        <h4> Science Aide at Orem Junior High School </h4>
        <p> Jan 2022 - May 2022 </p>
        <ul>
          <li> Assisted teachers with managing classroom behavior </li>
          <li> Prepared classrooms for labs and organized lab supplies </li>
          <li> Worked one-on-one with students needing additional support </li>
        </ul>
        <h4> Patient Care Technician at Intermountain Healthcare </h4>
        <p> Aug 2021 - Jan 2022 </p>
        <ul>
          <li> Transported patients </li>
          <li> Sanitized commonly touched surfaces throughout the floor </li>
          <li> Assisted in care of patients by bringing in supplies and maintaining clean rooms </li>
        </ul>
      </div>
      <div class="education print">
      <h3> My Education </h3>
        <h4> Bachelors Degree of Science in Biology </h4>
        <p> Utah Valley University </p>
        <p> May 2018 - August 2021</p>
        <ul>
        <li>3.6 GPA</li>
        <li>Dean's List Spring 2021</li>
        </ul>
        <h4> Associates Degree in University Studies </h4>
        <p> Utah Valley University </p>
        <p> May 2015 - May 2018 </p>
        <ul>
          <li>3.6 GPA </li>
        </ul>
      </div>
      <div class="certifications print">
      <h3> My Certifications </h3>
      <ul>
        <li> Microsoft Office 2016 Specialist Master</li>
      </ul>
      </div>
      <div class="download-link noprint">
      <p onClick="window.print()">Print this page
      </p>
      </div>
    </div>
  `,
  styles: `
  .grid-container {
  display: grid;
  margin: 25px;
  background-color: #E2E2E2;
  grid-column-gap: 50px;
  }
  .experience {
  grid-column-start: 2;
  grid-row-end: 4;
  }
  .education {
  grid-column-start: 3;
  grid-row-end: 4;
  background-color: #ccc;
  }
  .certifications {
  grid-column-start: 4;
  grid-row-start: 3;
  }
  .experience li {
  list-style-type: circle;
  }
  .education li {
  list-style-type: circle;
  }
  .certifications li {
  list-style-type: circle;
  }
  .download-link {
  grid-column-start: 4;
  grid-row-start: 4;
  text-decoration: underline;
  }
  .download-link p:hover {
  background-color: #ddd;
  }
   @media print
    {
      .noprint { display: none; }
      .print { display: block; }
    }
  `
})
export class ResumeComponent {

}

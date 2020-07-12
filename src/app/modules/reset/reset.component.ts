import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hyper-reset',
  templateUrl: './reset.component.html',
  styles: [
    `
      .left-block {
        background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);
      }
      #tv {
        position: relative;
        width: 800px;
        height: 600px;
        margin: 20px 0;
        background: #f3faf7;
        border-radius: 50% / 10%;
        color: white;
        text-align: center;
        text-indent: 0.1em;
      }
    `,
  ],
})
export class ResetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

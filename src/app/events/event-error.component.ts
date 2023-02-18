import { Component } from '@angular/core';

@Component({
  template: `
    <!-- <h1 class="errorMessage">404'd</h1> -->
    <div class="message">
      <h2>Page Not Found</h2>
      <h1>404</h1>
      <p>
        The specified file was not found on this website. Please check the URL
        for mistakes and try again.
      </p>
      <a href="">Go back home</a>
    </div>
  `,
  styles: [
    `
      /* .errorMessage {
        margin-top: 150px;
        font-size: 170px;
        text-align: center;
      } */

      .message {
        margin: 0;
        padding: 0;
        width: 100%;
        position: absolute;
        top: 50%;
        right: 5%;
        transform: translateY(-40%);
        text-align: center;
        color: #343434;
      }

      .message h1 {
        font-size: 160px;
        margin: 0;
        font-weight: 900;
        letter-spacing: 20px;
        background: url('src/assets/images/bg.jpg');
        background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    `,
  ],
})
export class Error404Component {
  constructor() {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user =
    {
      nameCard:"tran anh duc",
      email:"trananhducty@gmail.com",
      phone:'0362272729'
    }


  title = 'angular-name-card';

}

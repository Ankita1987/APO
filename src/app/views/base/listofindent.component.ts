import { Component } from '@angular/core';

@Component({
  templateUrl: 'listofindent.component.html'
})
export class listofindentComponent {

  constructor() { 
    sessionStorage["commentId"] = "disliked";
  }

}

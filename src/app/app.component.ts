  import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my_profile_angular';

  ngOnInit(): void {
    document.getElementById('first_focus')!.focus();
  }
} 

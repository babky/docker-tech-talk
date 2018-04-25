import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'My First Angular App!';

  apiResult: String = 'WAITING FOR THE RESULT';

  constructor(private demoService: DemoService) {
  }

  ngOnInit() {
    this.fetchFromApi()
  }

  fetchFromApi() {
    this.demoService.fetchFromApi().subscribe(
      data => { this.apiResult = data },
      err => console.error(err),
      () => console.log('done fetching from API')
    );
  }

}

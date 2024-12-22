import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AssemblyLineComponent } from './app/assemblyline/assemblyline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AssemblyLineComponent],
  template: `
    <h1>Assembly Line Demo</h1>
    <app-assemblyline [stages]="['Idea', 'Development', 'Testing', 'Deployment']">
    </app-assemblyline>
  `
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
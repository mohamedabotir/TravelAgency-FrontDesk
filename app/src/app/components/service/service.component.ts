import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  @Input() data: any;

}

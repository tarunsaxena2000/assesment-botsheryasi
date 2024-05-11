import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-homemodules',
  templateUrl: './homemodules.component.html',
  styleUrl: './homemodules.component.css'
})
export class HomemodulesComponent {
  @Input() childData: any
}

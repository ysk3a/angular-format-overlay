import { Component } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-overlay-simple-item',
  standalone: true,
  imports: [OverlayModule, MatButtonModule],
  templateUrl: './overlay-simple-item.component.html',
  styleUrl: './overlay-simple-item.component.scss'
})
export class OverlaySimpleItemComponent {
  isOpen = false;
  isOpen2 = false;
}

import { Component, input } from '@angular/core';
import { ConnectionPositionPair, OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { ClickStopPropagationDirective } from 'src/click-stop-propagation.directive';
@Component({
  selector: 'app-overlay-item',
  standalone: true,
  imports: [MatMenuModule, DragDropModule, OverlayModule, A11yModule, MatButtonModule, ClickStopPropagationDirective],
  templateUrl: './overlay-item.component.html',
  styleUrl: './overlay-item.component.scss',
})
export class OverlayItemComponent {
  idx = input.required();
  isOpen = false;
}

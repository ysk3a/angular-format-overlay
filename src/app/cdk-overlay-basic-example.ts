import { Component, input } from '@angular/core';
import { ConnectionPositionPair, OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatMenuModule } from '@angular/material/menu';
import { ClickStopPropagationDirective } from 'src/click-stop-propagation.directive';
import { OverlayItemComponent } from './overlay-item/overlay-item.component';
import { OverlaySimpleItemComponent } from './overlay-simple-item/overlay-simple-item.component';
import { DecimalFormatExampleComponent } from './decimal-format-example/decimal-format-example.component';

/**
 * @title Overlay basic example
 */
@Component({
  selector: 'cdk-overlay-basic-example',
  templateUrl: './cdk-overlay-basic-example.html',
  styleUrl: './cdk-overlay-basic-example.css',
  standalone: true,
  imports: [MatMenuModule, DragDropModule, OverlayModule, A11yModule, MatButtonModule, ClickStopPropagationDirective, OverlayItemComponent, OverlaySimpleItemComponent, DecimalFormatExampleComponent],
})
export class CdkOverlayBasicExample {
  isOpen = false;
  isOpen2 = false;
  isNestedOpen = false;

  isCopied = false;

  topIsOpen = false;

  bottomIsOpen = false;

  leftOpen = false;

  rightIsOpen = false;

  // Tooltip Positions:

  topCenter: ConnectionPositionPair = {
    offsetY: -8,
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
  };

  bottomCenter: ConnectionPositionPair = {
    offsetY: 8,
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',
  };

  leftCenter: ConnectionPositionPair = {
    offsetX: 8,
    originX: 'end',
    originY: 'center',
    overlayX: 'start',
    overlayY: 'center',
  };

  rightCenter: ConnectionPositionPair = {
    offsetX: -8,
    originX: 'start',
    originY: 'center',
    overlayX: 'end',
    overlayY: 'center',
  };

  clicked(num: number) {
    console.log('num', num);
  }
}

/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

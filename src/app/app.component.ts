import { Component } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLightMode = false;
  constructor(private overlayContainer: OverlayContainer){}
  title = 'fundraising';

  showFiller = false;


  // private processOverlayBaseComponentTheme(checked: boolean) {
  //   // 获取这个 div 元素
  //   const overlayContainerElement = this.overlayContainer.getContainerElement()
  //   const themeWrapperClassName = 'unicorn-dark-theme'
  //   if (checked) {
  //     overlayContainerElement.classList.add(themeWrapperClassName);
  //   } else {
  //     overlayContainerElement.classList.remove(themeWrapperClassName);
  //   }
  // }
}

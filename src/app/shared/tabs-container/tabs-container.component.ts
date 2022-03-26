import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  // The content children decorator must be called as a function,
  // this function has one required parameter
  // It's an element we'd like to select from the projected content.
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList()

  constructor() {}

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(
      // The active tabs variable will contain an array of active tabs
      // This array should contain one item after retrieving a list of active tabs.
      tab => tab.active
    )

    if(!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first)
    }
  }

  selectTab(tab: TabComponent) {
      this.tabs?.forEach(tab => {
        tab.active = false
      })
      tab.active = true

      // By returning false angular will automatically prevent the default behavior
      // It's a way to stop the default behavior without adding a parameter for the event object.
      return false
  }
}

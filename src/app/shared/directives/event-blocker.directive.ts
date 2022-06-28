import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[app-event-blocker]'
})
export class EventBlockerDirective {

  // Our goal of this directive is to block and events default behavior :
  @HostListener('drop', ['$event'])
  public handleEvent(event: Event) {
    event.preventDefault()
    // event.stopPropagation()  like an extra precaution

  }


}

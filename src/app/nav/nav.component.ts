import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // After injecting the service, we can use it in our component.
  constructor(public modal: ModalService) { }

  ngOnInit(): void {
  }

  openModal($event: Event) {
    // The event argument will be annotated with the event object inside this method
    // The prevent default function will prevent the default behavior of the browser by calling this method
    // Users will not unexpectedly be redirected to a different page.
    $event.preventDefault()

    this.modal.toggleModal('auth')
  }

}

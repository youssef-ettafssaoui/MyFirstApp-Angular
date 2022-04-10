import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // After injecting the service, we can use it in our component.
  constructor(
    public modal: ModalService,
    public auth: AuthService,
    private afAuth: AngularFireAuth
    )
    { }

  ngOnInit(): void {
  }

  openModal($event: Event) {
    // The event argument will be annotated with the event object inside this method
    // The prevent default function will prevent the default behavior of the browser by calling this method
    // Users will not unexpectedly be redirected to a different page.
    $event.preventDefault()

    this.modal.toggleModal('auth')
  }

  async logout($event: Event) {
    $event.preventDefault()

    await this.afAuth.signOut()
  }

}

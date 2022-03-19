import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private visible = false

  constructor() { }

  // Inside this method, we will return the visible property.
  isModalOpen() {
    return this.visible
  }

  // we will create a method for toggling the invisible property to find a method
  toggleModal() {
    this.visible = !this.visible
  }
}

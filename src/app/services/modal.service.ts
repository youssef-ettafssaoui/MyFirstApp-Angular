import { Injectable } from '@angular/core';

interface IModal {
  id: String;
  visible: Boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  constructor() { }

  register(id: String) {
    this.modals.push({
      id,
      visible: false
    })
  }

  // Inside this method, we will return the visible property.
  isModalOpen(id: String) : Boolean {
    // The element argument refers to each item in the array,
    // Every object in the model's array will have a property called ID.
    // We will compare the ID property of the item in the array to the ID argument passed on to the function.
    // If the find function successfully finds a model,
    // it will return the first object it encounters.
    // Otherwise, it returns undefined.
    return !!this.modals.find(element => element.id === id)?.visible
  }

  // we will create a method for toggling the invisible property to find a method
  toggleModal(id: String) {
    const modal = this.modals.find(element => element.id === id)
   // this.visible = !this.visible
   if(modal) {
     modal.visible = !modal.visible
   }
  }
}

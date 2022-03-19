import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit {

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
    // The register function will allow us to register a new model with our service.
    // It will have one argument, which is the unique ID for the model.
    this.modal.register('auth')
  }

}

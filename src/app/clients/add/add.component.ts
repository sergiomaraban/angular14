import { Component, EventEmitter, Output } from '@angular/core';
import { Client } from '../interfaces/clients.interface';
import { ClientService } from '../services/clients.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {


  /**
   *
   */
  constructor(private clientService: ClientService) {
  }
  newClient: Client = {
    name: '',
    email: '',
    Address: {
      street: '',
      postal_code: '',
      state: '',
      city: '',
      country: ''
    }
  }

  addNewClient() {
    if (this.newClient.name.trim().length == 0) {
      return;
    }

    this.clientService.addNewClient(this.newClient);

    this.newClient = {
      name: '',
      email: '',
      Address: {
        street: '',
        postal_code: '',
        state: '',
        city: '',
        country: ''
      }
    }

  }

}

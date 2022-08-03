import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../services/clients.service';

@Component({
  selector: 'app-repository-clients',
  templateUrl: './repository-clients.component.html'
})
export class RepositoryClientsComponent {

    /**
     * 
     **/
     constructor(private clientService: ClientService) {    
    }   
     
    get clientList(){
      return this.clientService.clientList;
    }
}

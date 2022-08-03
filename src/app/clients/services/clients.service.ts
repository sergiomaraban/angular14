import { Injectable } from "@angular/core";
import { Client } from "../interfaces/clients.interface";

@Injectable()
export class ClientService {

    /**
     *
     */
    constructor() {
        
    }
    

    /**
     * 
     * **/
    addNewClient(newClient: Client) {
        this._clientList.push(newClient);
    }


    private _clientList: Client[] = [
        {
            name: 'Sergio Velasco',
            email: 'x@x.com',
            Address: {
                street: 'Main st',
                postal_code: '123456',
                state: 'IL',
                city: 'Aurora',
                country: 'USA'
            }
        },
        {
            name: 'Gema Uribe',
            email: 'x@x.com',
            Address: {
                street: 'Main St',
                postal_code: '098765',
                state: 'WA',
                city: 'Bellevue',
                country: 'USA'
            }
        }
    ]

    get clientList() {
        return [...this._clientList];
    }


}
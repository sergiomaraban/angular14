
export interface Client {
    name: string;
    email: string;
    Address: Address;
  }
  
  interface Address {
    street: string;
    postal_code: string;
    state: string;
    city: string;
    country: string;
  }
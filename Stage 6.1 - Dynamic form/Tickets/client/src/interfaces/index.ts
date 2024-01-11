import { Genders } from "../enums";
export interface Ticket {
  key: string | number;
  userFirstName: string;
  userLastName: string;
  userGender: Genders | string;
  userEmail: string;
  userPhone: string;
  wayFrom: string;
  wayTo: string;
  luggages: Luggage[] | null;
}

export interface Luggage {
  key: string | number;
  height: number;
  width: number;
  lenght: number;
  weight: number;
}

export interface Ticket {
  key: string;
  userFirstName: string;
  userLastName: string;
  userGender: "Male" | "Female";
  userEmail: string;
  userPhone: string;
  wayFrom: string;
  wayTo: string;
  luggages: Luggage[] | undefined;
}

export interface Luggage {
  key: string | number;
  height: number;
  width: number;
  lenght: number;
  weight: number;
}

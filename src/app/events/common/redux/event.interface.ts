export interface EventI {
  name: string;
  date: string;
  time: string;
  price: number;
  location: {
    address: string;
    city: string;
    country: string;
  };
}

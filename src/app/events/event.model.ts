export interface IEvent {
  id: number;
  name: string;
  date: Date;
  key:string;
  time: string;
  price: number;
  imageUrl: string;
  location: {
  address: string;
  city: string;
  country: string;
  },
  onlineUrl?:string
  sessions?: ISession[]
}

export interface ISession {
  key: string;
  name: string;
  presenter:string;
  duration: number;
  level: string;
  id:string;
  abstract:string;
  voters:string[];
  eventId?:number
}

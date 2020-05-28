export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  modules: string;
  usage: number;
  doctorId: string;
}

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  cost: number;
  tier: number;
  company: string;
}

export interface Module {
  id: number;
  name: string;
  rate: number;
}

export interface DevModule {
  id: number;
  name: string;
  rate: number;
  purpose: string;
  mainDev: string;
  deployable: boolean;
}
//Patient Module list
export interface patMod {
  id: number;
  doctorId: string;
}
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
  modules: patMod[];
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

export interface user {
  id: string;
  firstName: string;
  lastName: string;
  type: string;
  data: Patient | Doctor, 
}

export interface Module {
  id: string;
  name: string;
  url: string;
  icoUrl: string;
  rate: number;
}

export interface DevModule {
  id: string;
  name: string;
  rate: number;
  purpose: string;
  mainDev: string;
  deployable: boolean;
}

export interface invite {
  id: string;
  doctorId: string;
  patientEmail: string;
  moduleId: string;
  completed: boolean;
}

export interface apiKey {
  id: string;
  userEmail: string;
  uuid: string;
  createDate: Date;
}
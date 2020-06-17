//Patient Module list
export interface module {
  readonly modId: string;
  modName: string; //Module name
  type: string; //type: form or webgame or etc
  rate: number; //price rate for module (per patient per month)
  data: any; //Data storage template for module

}

export interface patientModule {
  umid: string; //unique mod id for that patient
  mod: module;  // module and its data
  readonly docId: string;
  readonly patId: string;
}

export interface modRequest {
  docId: string;
  patId: string;
  modId: string;
}


export interface newUser {
  userId: string;
  email: string;
};

export interface userUpdate {
  userId:string;
  email: string;
  updates: {
      type: string;
      fName: string;
      lName: string;
      address: string;
  };
}

export interface getUser {
  userId: string;
  email: string;
  apiKey: string;
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


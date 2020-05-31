import { Doctor, Patient, patMod } from "../types.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
let docs = [
  {
    id: "1",
    firstName: "Lil",
    lastName: "Boat",
    cost: 20,
    tier: 2,
    company: "Gang Gang Inc",
  },
];



let pats = [
  {
    id: "32",
    firstName: "Bobby",
    lastName: "Shmurda",
    modules: [{id: 1, doctorId: "2"}],
    usage: 20,
    doctorId: "1",
  }
]

// @desc    Get all patients
// @route   GET /api/patients

const getPatients = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: pats,
  };
};

//@desc Get all docs
//@route  GET /api/doctors

const getDoctors = ({ response }: {response: any}) => {
  response.body = {
    success: true,
    data: docs,
  }
}

// @desc    Get single patient
// @route   GET /api/patients/:id

const getPatient = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const patient: Patient | undefined = pats.find((p) => p.id === params.id);
  if (patient) {
    response.status = 200;
    response.body = {
      success: true,
      data: patient,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      data: "undefined",
    };
  }
};

// @desc    Get single doctor
// @route   GET /api/doctors/:id

const getDoctor = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const doctor: Doctor | undefined = docs.find((p) => p.id === params.id);
  if (doctor) {
    response.status = 200;
    response.body = {
      success: true,
      data: doctor,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      data: "undefined",
    };
  }
};


// @desc     add patient
// @route   POST /api/patients

const addPatient = async (
  { request, response }: { params: {apiAuth : string, docId: string};request: any; response: any },
) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const patient: Patient = body.value;
    patient.id = v4.generate();
    pats.push(patient);
    response.status = 201;
    response.body = {
      success: true,
      data: patient,
    };
  }
};

// @desc     add doctor
// @route   POST /api/doctors

const addDoctor = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No data",
    };
  } else {
    const doc: Doctor = body.value;
    doc.id = v4.generate();
    docs.push(doc);
    response.status = 201;
    response.body = {
      success: true,
      data: doc,
    };
  }
};


// @desc    Update patient
// @route   PUT /api/patients:id

const updatePatient = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const patient: Patient | undefined = pats.find((p) => p.id === params.id);
  if (patient) {
    const body = await request.body();

    const updateData: { firstName?: string; lastName?: string; modules?: patMod[]; usage?: number; doctorId?: string} =
      body.value;

    pats = pats.map((p) =>
      p.id === params.id ? { ...p, ...updateData } : p
    );

    response.status = 200;
    response.body = {
      "success": true,
      data: pats,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      data: "undefined",
    };
  }
};



// @desc    Update doctor
// @route   PUT /api/doctors:id

const updateDoctor = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const doctor: Doctor | undefined = docs.find((p) => p.id === params.id);
  if (doctor) {
    const body = await request.body();

    const updateData: { firstName?: string; lastName?:string; cost?: number; tier?:number; company?: string} =
      body.value;

    docs = docs.map((p) =>
      p.id === params.id ? { ...p, ...updateData } : p
    );

    response.status = 200;
    response.body = {
      "success": true,
      data: docs,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      data: "undefined",
    };
  }
};

// @desc    delete patient
// @route   DELETE /api/getPatient

const deletePatient = (
  { params, response }: { params: { id: string }; response: any },
) => {
  pats = pats.filter((p) => p.id !== params.id);
  response.body = {
    success: true,
    msg: "removed",
  };
};


// @desc    delete doctor
// @route   DELETE /api/getDoctor

const deleteDoctor = (
  { params, response }: { params: { id: string }; response: any },
) => {
  docs = docs.filter((p) => p.id !== params.id);
  response.body = {
    success: true,
    msg: "removed",
  };
};



export { getPatients, getDoctors, getPatient, getDoctor, addPatient, addDoctor, updatePatient, updateDoctor, deletePatient, deleteDoctor };

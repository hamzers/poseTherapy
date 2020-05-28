import { Doctor, Patient } from "../types.ts";
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
    modules: "1,2,3,",
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
//@route  GET /api/docs

const getDoctors = ({ response }: {response: any}) => {
  response.body = {
    success: true,
    data: docs,
  }
}

// @desc    Get single products
// @route   GET /api/products/:id

const getProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      data: "undefined",
    };
  }
};

// @desc     add products
// @route   POST /api/products

const addProduct = async (
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
    const product: Product = body.value;
    product.id = v4.generate();
    products.push(product);
    response.status = 201;
    response.body = {
      success: true,
      data: product,
    };
  }
};

// @desc    Update product
// @route   PUT /api/proucts/:id

const updateProduct = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  if (product) {
    const body = await request.body();

    const updateData: { name?: string; description?: string; price?: number } =
      body.value;

    products = products.map((p) =>
      p.id === params.id ? { ...p, ...updateData } : p
    );

    response.status = 200;
    response.body = {
      "success": true,
      data: products,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      data: "undefined",
    };
  }
};

// @desc    delete product
// @route   DELETE /api/getProduct

const deleteProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  products = products.filter((p) => p.id !== params.id);
  response.body = {
    success: true,
    msg: "removed",
  };
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };

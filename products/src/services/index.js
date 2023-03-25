const ProductModel = require("../database/models/product");

class ProductService {
  constructor() {
    require("../database/config").connet();
  }

  async createProduct({
    name,
    desc,
    banner,
    type,
    unit,
    price,
    available,
    supplier,
  }) {
    if (
      !name ||
      !desc ||
      !banner ||
      !type ||
      !supplier ||
      !unit ||
      !price ||
      !supplier
    ) {
      const data = {
        statusCode: 403,
        message: "Please provide all mantadory details related to product",
        error: false,
      };
      return data;
    }

    const product = ProductModel({
      name,
      desc,
      banner,
      type,
      unit,
      price,
      available,
      supplier,
    });

    const productResult = await product.save();

    const data = {
      statusCode: 201,
      message: "Product created successful with id " + productResult._id,
      error: true,
    };

    return data;
  }

  async getProductsByType({ type }) {
    if (!type) {
      const data = {
        statusCode: 403,
        message: "Please provide all required details",
        error: true,
      };

      return data;
    }

    const productsResult = await ProductModel.find({ type: type });

    let data;

    if (productsResult.length) {
      data = {
        statusCode: 200,
        message: productsResult,
        error: false,
      };
    } else {
      data = {
        statusCode: 200,
        message: "No matching result found",
        error: true,
      };
    }

    return data;
  }

  async getProductById({ id }) {
    if (!id) {
      const data = {
        statusCode: 403,
        message: "Please provide all required details",
        error: true,
      };

      return data;
    }

    if (id.length != 24) {
      const data = {
        statusCode: 403,
        message: "Id length mismatch",
        error: true,
      };

      return data;
    }

    const productResult = await ProductModel.findOne({ _id: id });

    let data;

    if (productResult) {
      data = {
        statusCode: 200,
        message: productResult,
        error: false,
      };
    } else {
      data = {
        statusCode: 403,
        message: "Product not find",
        error: true,
      };
    }

    return data;
  }
}

module.exports = ProductService;

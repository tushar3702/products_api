const Product = require('../models/product');

module.exports.getAllProducts = async (req, res) => {
  const {company, name, sort, select} = req.query;
  const queryObject = {};

  if(company) {
    queryObject.company = company;
  } if(name) {
    // queryObject.name = name;
    queryObject.name = { $regex: name, $options: "i" };
  } 
  let apiData = Product.find(queryObject);

  if(sort) {
    // let sortProduct = sort.replace(',', " ");
    let sortProduct = sort.split(',').join(" ");
    apiData = apiData.sort(sortProduct);
  }
  if(select) {
    let selectProduct = select.split(',').join(' ');
    apiData = apiData.select(selectProduct);
  }
  
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 6;

  let skip = (page - 1) * limit;
  apiData = apiData.skip(skip).limit(limit);

  const myData = await apiData;
  res.status(200).json({ myData, nbHits: myData.length });
}

module.exports.getAllProductsTesting = async (req, res) => {
  const myData = await Product.find( req.query ).sort("price");
  res.status(200).json({ myData });
}
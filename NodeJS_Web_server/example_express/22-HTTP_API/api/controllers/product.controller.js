var Product = require('../../model/product.model');

module.exports.index = async function(req, res){
    var products = await Product.find();
    res.json(products);
};
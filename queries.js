/* Fill out these functions using Mongoose queries*/
var fs = require('fs'),
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Listing = require('./ListingSchema.js'),
  config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri); 

var findLibraryWest = function () {
  Listing.find({ code: 'LBW' }, function (err, address) {
    if (err)
      throw err;
    console.log(address);
  });
};
var removeCable = function () {
  Listing.findOneAndRemove({ code: 'CABL' }, function (err, data) {
    if (err) throw err;
    console.log(data);
  });
};
var updatePhelpsLab = function () {
  Listing.findOneAndUpdate({ code: 'PHL' }, { address: '1275 Center Drive, Biomedical Sciences Bldg J383, P.O. Box 116131, Gainesville, FL 32611' }, function (err, data) {
    if (err) throw err;
    console.log(data);
  });
};
var retrieveAllListings = function () {
  Listing.find({}, function (err, message) {
    if (err)
      throw err;
    console.log(message);
  })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();

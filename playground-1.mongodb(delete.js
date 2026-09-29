use ("rescue") 
db.animals.deleteOne({_id : "MC-2004"})
db.animals.deleteOne({_id : "MC-2005"})
db.animals.deleteOne({_id : "MC-2007"})

db.animals.insertMany([
{
  "_id": "MC-2004",
  "name": "Pup1",
  "gender": "Male",
  "species": "Canine",
  "breed": "Mongrel",
  "dateOfBirth": ISODate(),
  "dateOfRescue": ISODate(),
  "adopted": false,
  "weightKg": 1,
  "colours": [
    "black",
    "white"
  ],
  "shelterLocation": {
    "building": "St. Bridget",
    "houseNumber": 33
  },
  "neutered": false,
  "tags": [
    "underweight",
    "needsVaccination",
  ],
  "intakeOfficer": "Liam Walsh"
},
{  "_id": "MC-2005",
  "name": "Pup2",
  "gender": "Male",
  "species": "Canine",
  "breed": "Mongrel",
  "dateOfBirth": ISODate(),
  "dateOfRescue": ISODate(),
  "adopted": false,
  "weightKg": 1,
  "colours": [
    "dapple"
  ],
  "shelterLocation": {
    "building": "St. Bridget",
    "houseNumber": 33
  },
  "neutered": false,
  "tags": [
    "underweight",
    "needsVaccination",
  ],
  "intakeOfficer": "Liam Walsh"
},

{  "_id": "MC-2007",
  "name": "Pup3",
  "gender": "Female",
  "species": "Canine",
  "breed": "Mongrel",
  "dateOfBirth": ISODate(),
  "dateOfRescue": ISODate(),
  "adopted": false,
  "weightKg": 0.8,
  "colours": [
    "brown"
  ],
  "shelterLocation": {
    "building": "St. Bridget",
    "houseNumber": 33
  },
  "neutered": false,
  "tags": [
    "underweight",
    "needsVaccination",
  ],
  "intakeOfficer": "Liam Walsh"}
])

 // exercise 1
 db.animals.insertOne({_id: 1, name: 'Lovely', species: 'Budgie'})

 //exercise 2
 db.animals.insertMany([{_id: 2, species: 'hamster'}, {species: 'hamster'}, {species: 'hamster'}])
{
}
 db.animals.find({species: 'hamster'}) 
[
  { _id: 2, species: 'hamster' },
  { _id: ObjectId('6abbc2beda2dc8031dec7f57'), species: 'hamster' },
  { _id: ObjectId('6abbc2beda2dc8031dec7f58'), species: 'hamster' }]

 db.animals.deleteMany({species: 'hamster'})

 // exercise 3
 db.animals.updateMany({species: 'hamster'}, {$push: {vaccinations: {type: "parvovirus", frequency: "annual", amountMg: 5}}})
 db.animals.find({vaccinations:{ $elemMatch: {amountMg: {$lt: 6} }}})
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

 db.animals.find({species: "Canine" , gender: "Male" })

 db.animals.find({$or: [{species: "Canine"} , {gender: "Male" }]})

 db.animals.find({breed: "poodle", 
                  tags: {$all: ["friendly" , "good with kids"]}})

//4. Use the $nin operator to find results for Canine species that do not have tags “timid” or “quiet”
db.animals.find({tags:{ $nin: ["timid" , "quiet"]}}).pretty()

//5. Find all the documents that relate to Cat species where the weightKg is greater than 20. Use the $gt operator.
db.animals.find(weightKg:{$gt:20}).pretty()

//6. Find houseNumbers greater than 21 and less than 30 (hint: you will need to use the dot operator).
db.animals.find(houseNumber:{$gt:21, $lt:30}).pretty()

//7. Count the number of documents that satisfy exercise 6.
db.animals.countDocuments(houseNumber:{$gt:21, $lt:39}).pretty()

//8. Find animals whose vaccination amountMg is greater than 2 and less than 5 (hint: you will need to use the $elemMatch operator).
db.animals.find({needsVaccination:{$elemMatch: {$gt: 2, $lt: 5 }}})

//9. Find Budgies that have been vaccinated for Distemper with amountMg equal to 5. In the results, show only the animal id, breed and name.
db.animals.find({})
//10. Find animals that were taken in by Jane O’Connor. How many animals were taken in by her?
db.animals.aggregate([{$match: {intakeOfficer: "Jane O'Connor"}}, {$facet: {matchingAnimals: [{$match: {}}], totalCount: [{$count: "count"}]
}
}
])
//11. Find animals that were NOT taken in by Jane O’Connor. Show only the animal name and in the intake Office name. Sort the results by
//intakeOfficer . Limit the results to the first 5 results.
db.animals.aggregate([{$match: {intakeOfficer: { $ne: "Jane O'Connor"}}, {$facet: {matchingAnimals: [{$match: {}}], totalCount: [{$count: "count"}]
}
}
}
])
//12. What species are catered for in the rescue database? (hint: use MongoDB Docs website to find the equivalent of SELECT DISTINCT in SQL)            






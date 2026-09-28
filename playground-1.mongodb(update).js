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

 db.animals.updateOne({_id:"MC-2004"},{$set: {breed: "unknown"}})


//1 
 rescue> db.animals.insertOne({_id:1} , {$set: adopted: false})

//2. Update the document that relates to the animal with name “Lucy” and breed = “Syrian”. Set the third element of the
//vaccinations array to type ”distemper" with a frequency of “yearly” and an amountMg of 5.

 db.animals.insertOne({_id:2, name: "Lucy", breed: "Syrian"}
 db.animals.updateOne({_id:2},{$set: {vaccinations: [{type: "distemper", frequency: "yearly", amountMg:5}] }} )

//3. Update animal _id “MC-3002. You will need to set the upsert option to true. Add the following : gender(Female)
//species(reptile) breed(unknown) rescued(today) adopted(false) colours(red/white/black) tags(poisonous, tame) taken in
//by(Jane O’Connor) vaccinations(calcivirus, monthly, 5mg)

 b.animals.updateOne({_id: "MC-3002"}, {$set: {_id: "MC-3002", gender: "Female", species: "Reptile", breed: "unknown", dateOfRescue: "Today", adopted: false, colours: ["red", "white", "black"], tags: ["poisonous", "tame"], intakeOfficer: "Jane O'Connor", vaccinations: [{type: "calcivirus", frequency: "monthly", amountMg:5}]}}, {upsert:true})

//4. Add another tag of “very very cute” to _id = “MC-1023”

 db.animals.insertOne({_id: "MC-1024"})
 db.animals.updateOne({_id: "MC-1024"}, {$addToSet: {tags: "v v cute"}})

////5. Remove the last tag from _id = “MC-1024”

db.animals.updateOne({_id: "MC-1024"}, {$pop: {tags: 1}})

////6. Use updateMany() which does a query with no criteria set (using empty curly brackets) to match all documents, and push all tags of “chubby” to those documents.
db.animals.updateMany({}, {$push: {tags: "chubby"}})

//7. Modify the last exercise so that the “chubby” is removed from all animals.
db.animals.updateMany({}, {$pull: {tags: "chubby"}})


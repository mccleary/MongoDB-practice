var python = {
  language: 'python',
  inventors: 'Guido van Rossum',
  first_appeared: '1991',
  paradigms: [
    'object-oriented',
    'imperative',
    'functional',
    'procedural',
    'reflective'
  ],
  typing_discipline: [
    'duck',
    'dynamic'
  ]
};

db.languages.insert(python);
WriteResult({ "nInserted" : 1 });


var javascript = {
  language: 'JavaScript',
  inventors: 'Brandon Eich',
  first_appeared: '1995',
  paradigms: [
    'scripting',
    'object-oriented(prototype-based)',
    'imperative',
    'functional',
    'event-driven'
  ],
  typing_discipline: [
    'duck',
    'dynamic'
  ]
};

db.languages.insert(javascript);
WriteResult({ "nInserted" : 1 });


var java = {
  language: 'Java',
  inventors: 'James Gosling',
  first_appeared: '1995',
  paradigms: [
    'object-oriented(class-based)',
    'structured',
    'imperative',
    'generic',
    'reflective',
    'concurrent'
  ],
  typing_discipline: [
    'static',
    'strong',
    'safe',
    'nominative',
    'manifest'
  ]
};

db.languages.insert(java);
WriteResult({ "nInserted" : 1 });


var haskell = {
  language: 'Haskell',
  inventors: 'Simon Peyton Jones',
};

db.languages.insert(haskell);
WriteResult({ "nInserted" : 1 });


var closure = {
  language: 'Closure',
  inventors: 'Rich Hickey',
  paradigms: [
    'functional'
  ],
  typing_discipline: [
    'dynamic',
    'strong'
  ]
};

db.languages.insert(closure);
WriteResult({ "nInserted" : 1 });



// queries
db.languages.find({
  _id: ObjectId("584ee6f117dbce7120c5bf24")
}).pretty();

// use syntax below to look for all object-oriented type paradigms
db.languages.find({
  paradigms: /object-oriented.*/
}).pretty();


db.languages.find({
  paradigms: 'functional'
}).pretty();


db.languages.find({
  typing_discipline: 'duck'
}).pretty();


db.languages.find({
  typing_discipline: 'static'
}).pretty();

// 6
db.languages.find({
  typing_discipline: 'strong'
}).pretty();

// 7
db.languages.find({
  first_appeared: { $gt: 10}
}).pretty();

// 8
db.languages.find({
}).pretty();

// 9
db.languages.find({
  'inventors': 'Simon Peyton Jones'
}).pretty();

// 10  ***********************
db.languages.find({
  $and: [
    {
      'paradigms': /object-oriented.*/
    },
    {
      'first_appeared': { $gt: 1990 }
    }
  ]
}).pretty();


// 11
db.languages.find({
  $and: [
    {
      'paradigms': /object-oriented.*/
    },
    {
      'typing_discipline': 'duck'
    }
  ]
}).pretty();


// 12
db.languages.find({
  $and: [
    {
      'paradigms': /object-oriented.*/
    },
    {
      'paradigms': 'functional'
    }
  ]
}).pretty();

// also 12
db.languages.find({
  paradigms: {
    $in: ['object-oriented', 'functional']
  }
}).pretty();



// Update
var fixedHaskell = {
  language: 'Haskell',
  inventors: [
    'Lennart Augustsson',
    'Dave Barton',
    'Brian Boutel',
    'Warren Burton',
    'Joseph Fasel',
    'Kevin Hammond',
    'Ralf Hinze',
    'Paul Hudak',
    'John Hughes',
    'Thomas Johnsson',
    'Mark Jones',
    'Simon Peyton Jones',
    'John Launchbury',
    'Erik Meijer',
    'John Peterson',
    'Alastair Reid',
    'Colin Runciman',
    'Philip Wadler'
  ],
  first_appeared: '1990',
  paradigms: [
    'functional',
    'imperative',
    'lazy/non-strict',
    'modular'
  ],
  typing_discipline: [
    'static',
    'strong',
    'inferred'
  ]
};

db.languages.update({
  language: 'Haskell'
}, fixedHaskell);


// Update 1 ****************** //
var fieldsToModify = {
  inventors: 'Brendan Eich'
};

db.languages.update({
  _id: ObjectId("584ee77f17dbce7120c5bf25")
}, {
  $set: fieldsToModify
});


// Update 2 ****************** //
var fieldsToModify = {
  language: 'Clojure'
};

db.languages.update({
  _id: ObjectId("584ee79f17dbce7120c5bf28")
}, {
  $set: fieldsToModify
});



// Upsert ********************* //
var elm = {
  language: 'Elm',
  inventors: 'Evan Czaplicki',
  first_appeared: '2012',
  typing_discipline: [
    'static',
    'strong',
    'inferred'
  ]
};

db.languages.update({
  language: 'Elm'
}, {
    $set: elm
}, {
  upsert: true
});

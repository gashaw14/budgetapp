import * as firebase from 'firebase';

const firebaseConfig  = {
    apiKey: process.env.FIREBASE_API,
    authDomain:process.env.FIREBASE_AUTH,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKE,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig );
const database = firebase.database();

export {firebase, database as default}
//chiled_added
// database.ref('expenses').on('child_added',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
//   });
//chiled_change
// database.ref('expenses').on('child_changed',(snapshot)=>{
// console.log(snapshot.key,snapshot.val());
// });

//chiled_removed
// database.ref('expenses').on('child_removed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val());
// });
// database.ref('expenses').on('value',(snapshot)=>{
//  const expenses = [];
//  snapshot.forEach((childSnapshot)=>{
//  expenses.push({
//    id: childSnapshot.key,
//    ...childSnapshot.val()
//  });
//  });
// console.log(expenses);
// });

// database.ref('expenses').once('value')
// .then((snapshot)=>{
// const expenses = [];
// snapshot.forEach((childSnapshot)=>{
// expenses.push({
//   id: childSnapshot.key,
//   ...childSnapshot.val()
// });
// })
// console.log(expenses);
// });
// database.ref('expenses').push({
//   description:'Lunch expense',
//   amount: 100,
//   note: 'it is expensive',
//   createdAt: 0
// });
// database.ref('expenses').push({
//   description:'dinner expense',
//   amount: 300,
//   note: 'it is expensive',
//   createdAt: 0
// });
// database.ref('expenses').push({
//   description:'computer',
//   amount: 3000,
//   note: 'it is expensive',
//   createdAt: 0
// });

// database.ref('notes/-MKjwYx5UX8VxwCiSyEB').update({
//   title: 'I love coding'
// })
// database.ref('notes').push({
//   title:'todo',
//   body: 'here we go'
// }

// );
// database.ref('notes').push(
//   {
//     title:'fuck coding',
//     body: 'for real'
//   }
// );

// const notes = [{
// id:'10',
// title: 'first note',
// body: 'this is my note'
// },
// {
// id:'10bs',
// title: 'additional note',
// body: 'this is recently my note'
// }
// ];
// database.ref('notes').set(notes)

// database.ref().set({
//     name: 'Gashaw Birhane',
//     age: 30,
//     location:{
//         city: 'Cedar Rapids',
//         country: 'USA'
//     }
// }).then(()=>{
//     console.log('Data is saved')
// }).catch((e)=>{
//     console.log('It failed',e);
// });

// database.ref('attribute').set({
//     height: 10,
//     weight: 150
// });


// database.ref('age').remove()
// .then(()=>{
//     console.log('sucessfully deleted');
// })
// .catch((e)=>{
//     console.log('can not delete',e)
// });

// database.ref().update({
//     name: 'Birhane',
//     age: 35,
//     'location/city':'Maryland'
    
// })

// database.ref('location/city').once('value')
// .then((snapshot)=>{
// const val = snapshot.val();
// console.log(val);
// })
// .catch((e)=>{
//  console.log('Error in fetching',e);
// });

// on is important to update data automatically when the data changed in database
// database.ref().on('value',(snapshot)=>{
//     const val = snapshot.val();
// console.log(val.name + ' is live in '+ val.location.city);
// },(e)=>{
// console.log('there is error',e);
// });
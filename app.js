// Exercise 1 

function plus(number){
	return function(plusNumber){
};
	return number + plusNumber;
}; 
const plus15 = plus(15);
console.log(plus15(10));

// exercise 2 

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];
  users.forEach (user => {
    console.log(user.name);
  });

  //EXERCISE 3 
const mappedUsers = users.map((element, index, array) => {
  return{

    name: element.name,
    score: element.score
  }
});
console.log(mappedUsers);

///exercise 4 
const filteredUsers - users.filter((element) => {

  if (element.isActive == true) {
    return true;
  }
  return false;
  console.log(filteredUsers);
}

// exercise 5 

users.sort((a, b) =>  {
  if(a.score > b.score){
    return -1; 
  }else if (a.score == b.score){
      return 0;
  } else {
      return 1;
  }
});
console.log(users);
  
// Exercise 6 
const sumScore = users.reduce(( acc, current) => {
  console.log(acc, current);
  return current.score + acc;

}, 0);
console.log(sumScore);
console.log(sumscore/users.length)
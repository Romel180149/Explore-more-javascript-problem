const country = 'Bangladesh';
const age = 52;
const IsIndependent = true;
const student = { id: 149,class: 11, name:'romel'}
const friends= [10,20,30,40,50,70,60,300,700];
// console.log(typeof(student));
// console.log(typeof(friends));
console.log(typeof friends);
function add(num1 ,num2){
    return num1+num2;
}
console.log(Array.isArray(friends));
console.log(typeof add);
console.log(friends.includes(400));
console.log(friends.includes(10))
const newFriendsage =[40,14,45,34];
const allFriends = newFriendsage.concat(friends);
console.log(allFriends);
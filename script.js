const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
const team = players;
const team1 = [players.length];
for(let i=0;i<players.length;i++){
	team1[i] = players[i];
}
const cap1 = {
	name: "John Doe",
	age : 80,
};


// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;

//listen to the event before emitting it
//on -> listen for an event
//emit -> emit an event
const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`data recieved `);
});

customEmitter.on("respons", (words) => {
  console.log(`some other logic here ${words}`);
});

customEmitter.emit("response", "john", 34);
customEmitter.emit("respons", "awesome", 34);

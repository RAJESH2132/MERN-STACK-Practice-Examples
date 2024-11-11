const eventsModule = require("events");

let eventEmitter = new eventsModule.EventEmitter();

//functions
var loadEventHandler = function () {
  console.log(`Load Event will load your APP`);
};
function connectEventHandler() {
  console.log(`Connect will connect to Database`);
}
let imageEventHandler = () => {
  console.log(`Image event loaded image successfully`);
};

//Configuring Event
eventEmitter.on("load", loadEventHandler);
eventEmitter.on("load", imageEventHandler);
eventEmitter.on("connect", connectEventHandler);

//configuring events using Event Listeners
eventEmitter.addListener("load", () => [
  console.log(`New listener added to load using Event Listener`),
]);
eventEmitter.addListener("disconnect", () => {
  console.log(
    `DataBase is disconnected sucessfully using disconnect event listener`
  );
});

/*
eventEmitter.addListener("remove", () => {
  console.log(`Event Listener Removed Successfully`);
});

//Removing Listener
eventEmitter.removeListener("remove");
*/

//Triggering Event
eventEmitter.emit("load");
eventEmitter.emit("connect");
eventEmitter.emit("disconnect");
eventEmitter.emit("remove");

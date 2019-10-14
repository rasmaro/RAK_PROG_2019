const utils = require("./utils");

/**
 * Task 1
 *
 * Kirjutage funktsioon, mis tagastab 2 sekundi pärast "hello"
 *
 * Tip. Peate kasutama Promise ja setTimeout
 */

var delayHello = new Promise(function(resolve, reject) {
  setTimeout(function(){return resolve("hello"), reject(Error("It broke"));}, 2000);
});

/* Don't change me! */
try{
  delayHello
  .then(x =>{
    utils.test(x, "hello");
  })
  .catch( () =>{
    console.log("Fail")
  });

}
catch(e) {
  console.log("Fail, function is not implemented");
}

/**
 * Task 2
 * "itemCloned" peab olema "item1" clone,
 *  ainuke erinevus objektide vahel on see, et "itemCloned.name" === "Samsung"
 */


const item1 = {
  name: "IPhone",
  cost: 998,
  features: [123,125,12,3,14]
};

const itemCloned = Object.assign({}, item1);
itemCloned.name = "Samsung";

/* ... is e-zy
const itemCloned = {
  ...item1,
  name: "Samsung"
};
*/

utils.test(
  item1.name,
  "IPhone"
);

utils.test(
  itemCloned.name,
  "Samsung"
);

utils.test(
  itemCloned.cost,
  998
);

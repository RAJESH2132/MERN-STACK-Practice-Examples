const os = require("os");

for (var property in os) {
  console.log(`${property} [typeof ${os[property]}`);
}

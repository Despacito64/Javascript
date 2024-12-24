"use strict"; //treat all JS code as newer version

const accountId=12
let accountEmail="abc@gmail.com"
var accountPass="3489" 
// prefer not to use var because of issue in block scope and functional scope
accountCity="Delhi" //possible but not reccomended
let accountState;
console.table([accountId,accountEmail,accountPass,accountCity, accountState])
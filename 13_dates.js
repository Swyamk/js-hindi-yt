//dates

let myDate = new Date()
//console.log(myDate.toString());
// date is an object 

let myCreatedDate = new Date(2023, 0 ,23)
//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()


newDate.toLocaleString('default', {
    weekday: "long",
})


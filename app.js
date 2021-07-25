
var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];
  
    console.log(itemsArray);
  
    var array1 = (itemsArray[0].price * itemsArray[0].quantity);
    var array2 = (itemsArray[1].price * itemsArray[1].quantity);
    var array3 = (itemsArray[2].price * itemsArray[2].quantity);
    var array4 = (itemsArray[3].price * itemsArray[3].quantity);
  
    console.log(array1);
    console.log(array2);
    console.log(array3);
    console.log(array4);
  
  
  
  var person = {
    firstName: "tahakahn",lastName: "ali",
    email: "taha@gmail.com",
    password: "*******",
    age: 24,
    gender: "male",
    city: "khi",
    country: "pakistan"
  }
  console.log(person);
  
  var person = prompt("asked")
    if (person  == "age" ) {
  alert ("valid")
    }else if (person  == "country" ){
      alert("valid")
    }else{
      alert("inValid")
    }
  
  
  
  function Plan(name, age, dom, doy){
    this.name = name;
    this.age = age;
    this.dom = dom;
    this.doy = doy;
  }
  var plan1 = new Plan("bilal", 24, "jan", 1997);
  var plan2 = new Plan("onaib", 27, "oct", 1993);
  console.log(plan1, plan2);
  
  
  
  
  function myArea(name, gender, address, education, profession){
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;  
  }
  
  function myfun(){
    var personName = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var profession = document.getElementById("profession").value;
  
  
    const myArea = new Area(personName, 24, address, education, profession);
    console.log(myArea);
  }
 
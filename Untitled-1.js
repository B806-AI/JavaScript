<script>
    document.write( "Hello Wordl!");
</script>

console.log  ("Hello from console!")

//print "JS is fun"

var x = 10;
var x = 100;
document.write(x);

var x = 100;
console.log(x);

x = 42 ;
console.log (x);

var x = 100;
document.write(x);

// this is a line coment
alert ("This is an alert box!");

/* This code
creates an
alert box */
alert("This is an alert box!");

var num = 42; // A number without decimals

var price = 55.55; // A number with decimals 
document.write(priece);

var name = 'John';
var text = "My name is John Smith";

var text = "My name is 'John' ";

var sayHello = 'Hello wordl! \'I am JavaScript progamer.\'';
document.write(sayHello);

var isActive = true; 
var isHoliday = false;
JS

var x = 10 + 5;
document.write(x);

var x = 10;
var y = x +  5 + 22 + 45 + 6548;
document.write(y) ;

var x = 10 * 5;
document.write(x);

var x = 100 / 5;
document.write(x);

var myVariable = 26 % 6 ;

var num = 10;
// num == 8 will return false 

variable = (condition) ? valued1: value2

var isAdult = (age < 18) ? "Too young": "Old enough";

var mystring1 = "I am learning ";
var mystring2 = " JavaScript width Sololearn";
document.write (mystring1 + mystring2);

function main() {
    var distance = parseInt(readLine(), 10);
    //your code goes here
    
}

if (condition) {
    statements
 }

 var myNum1 = 7;
 var myNum1 = 10;
 if (myNum1 < myNum2) {
     alert("JavaScript is easy to learn ");
 }

 var myNum1 = 7;
 var myNum2 = 10;
 if (myNum1 > myNum2) {
    alert("JavaScript is easy to learn ");
}

if (expression) {
    // executed if condition is true
 }
 else {
    // executed if condition is false
 }

 var myNum1 = 7;
 var myNum2 = 10;
 if (myNum1 > myNum2) {
    alert("This is my first condition");
}
else{
    alert( "This is my second condition ")
}

var course = 1
if (course ==1) {
    document,write("<h1>HTML Tutorial</h1>");
} else if (course ==2) {
    document,write("<h1>CSS Tutorial</h1>");
} else {
    document.write("<h1>JavaScript Tutorial</h1>");
}

var course = 1
if (course ==1) {
    document,write("<h1>HTML Tutorial</h1>");
} else if (course ==2) {
    document,write("<h1>CSS Tutorial</h1>");
} else {
    document.write("<h1>JavaScript Tutorial</h1>");
}

switch (expression) {
    case n1: 
       statements
       break;
    case n2: 
       statements
       break;
    default: 
       statements
  }

  var day = 2;
  switch (day) {
      case 1:
          document.write("Monday");
          break;
      case 2:
          document.write("Tuesday");
          break;
      case 3:
          document.write("Wesnesday");
          break;
          default:
              document.write("another day");    
  }

  var color ="yellow";
  switch(color) {
      case "blue":
          document.write("This is blue");
          break;
      case"red":
      document.write("This is red ");
          break;
      case "green":
          document.write("This is green");
          break;
      case "orange":
          document.write("This is ornage");
          break;
        default:
            document.write("color not found");
  }
  

  var i = 1;
  for(; i=5; i++) {
      document.write(i + "<br />");
  }

  for (i=1, text=""; i<=5; i++) {
      text = i;
      document.write(i + "<br />");
  }

  var i = 0;
  for (; i < 10; ) {
      document.write(i);
      i++;
  }

  vari=0;
  while (i<=10) {
      document.write(i + "<br />");
      i++;
  }

  var i=20;
  do {
      document.write( i + "<br />");
      i++;
  }
  while (i<=25);

  for (i = 0; i <= 10; i++) {
      if (i == 5)
      break;
  }
  document.write(i + "<br />");

  for (i =0; i <= 10; i++) {
      if (i == 5) {
          continue;
      }
      document.write(i + <br />);
  }

  function name() {    
    //code to be executed
  }

  function MyFunction() {
      alert("Alert box")
  }

  MyFunction();
  //"Alert box!"

  // some other code

  MyFunction();
  //"Alert box!"

  functionName(param1, param2, param3) 
    // some code
 
  function sayHello(name) {
      alert("Hi, + name");
  }
  
  sayHello("David");

  function sayHello(name) {
    alert("Hi, + name");
}

sayHello("David");
sayHello("Laura");
sayHello("Brian");

function myFunc(x, y) {
    // some code
 }

 function sayHello(name, age) {
    document.write( name + " is " + age + " years old.");
  }

  function sayHello(name, age) {
      document.write( name + "is" + age + " years old.");
  }
  sayHello("Jhon", 20)

  function MyFunction(a, b) {
      return a * b;
  }
  var x = myFunction (5, 6);
  // Return value will end up in x

  function addNumbers(a, b) {
      var c = a+b;
      return c;
  }
  document.write( addNumbers(10, 2));

  alert(" Do yoy really want to leave this page ");
  alert("Hello/nHow are you");

  var user = prompt("Please enter yor name ");
  alert(user);

  var result = confirm("Do you really want to leave this page");
  if (result == true) {
      alert("Thanks for visiting");
  }
  else {
      alert("Thanks for staying with with us")
  }

  function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    
    console.log(convert(amount, rate));
}

var person = {
    name: "John", age: 31, 
    favColor: "green", height: 183
   };

   objectName.propertyName
//or
objectName['propertyName']

var person = {
    name: "jhon" , age: 31,
    favColor: "green", heigth: 183
};
var x = person.age;
var y = person['age'];

var course = {name: "JS", Lessons: 41};
document.write(course.name.legth) ;

objectName.methodName()

document.write("This is some text")

var person = {
    name: "John", age: 42, favColor: "green"
    };

    var person = {
        name: "John", age: 42, favColor: "green"
        };

var p1 = new person("john", 42, "green");
var p2 = new person("Amy" , 21, "red");

document.write(p1.age); // Outpunts 42
document.writewrite(p2.name); // Outpunts "Amy"

function person (name, age) {
    this.name = name;
    this.age = age;
}

var john = new person("john", 25);
var james = new person ("James", 21)

var John = {name: "John", age: 25};
var James = {name: "James", age: 21};

var John = {
    name: "John",
    age: 25
  };
  var James = {
    name: "James",
    age: 21
  };

  document.write(john.age);

  objectName.methodName()

  function person(name, age) {
      this.name = name;
      this.age= age;
      this.changename = fuction (name) 
          this.name = name;
      }
    
var p = new person("David", 21);
p.ChageName ("john");
//now p.name equals to "john" 

function person(name, age) {
    this.name= name;  
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  function bornYear() {
    return 2016 - this.age;
  }

  function person(name, age) {
    this.name= name;  
    this.age = age;
    this.yearOfBirth = bornYear;
  }
  function bornYear() {
    return 2016 - this.age;
  }

  var p = new person("A", 22);
  document.write(p.yearOfBirth());

  function contact(name, number) {
    this.name = name;
    this.number = number;
}

var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();

var course1 ="HTML"; 
var course2 ="CSS"; 
var course3 ="JS"; 

var courses = new Array("HTML", "CSS", "JS"); 

var courses = new Array("HTML", "CSS", "JS"); 
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element

var courses = new Array("Html" , "Ccs", "Js");
document.write(courses[10]);

var courses = new Array (3);
courses[0] ="Html";
courses[1] = "Css";
courses[2] = "Js";

var courses = new Array ();
courses[0] ="Html";
courses[1] = "Css";
courses[2] = "Js";
courses[3] = "C++";

var courses = ["Html", "Css", "Js"];
var courses = ["Html", "Css", "Js"];
document.write(courses.length);

var c1 = ["Html", "Css"];
var c2 = ["Js", "C++"];
var courses = c1.contact(c2);

var person = []; //empty array
person["name"] = "john";
person["age" = 46];
document.write(persoonal["age"]);

var number = math.sqrt(4);
document.write(number);

var n = prompt("Entera number" ,"");
var answer = Math.sqrt(n);
alert("The square root of" + n + "is" + answer );

function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 3000);

var d = new Date();
//d stores the current date and time

new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);

var d = new Date();
var hours = d.getHours();
//hours is equal to the current hour

function printTime() {
    var d = new Date ();
    var hours = d.getHours();
    var hours = d.getHours();
    var hours = d.getHours();
    document.body.innerHTML = hours+":"+mins+":"+secs;
} 
setInterval(printTime, 1000);

function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    
}

document.body.innerHTML = "Some text";

//finds element by id
document.getElementById(id) 

//finds elements by class name
document.getElementsByClassName(name) 

//finds elements by tag name
document.getElementsByTagName(name)

var elem = document.getElementById("demo");
elem.innerHTML = "Hello World!";

var arr =  document.getElementsByClassName("demo");
//accessing the second element
arr[1].innerHTML = "Hi";

var node = document.createTextNode("Some new text");

var t = setInterval(move, 500); 

// starting position
var pos = 0; 
//our box element
var box = document.getElementById("box");

function move() {
  pos += 1;
  box.style.left = pos+"px"; //px = pixels
}

var t = setInterval(move, 10);

function move() {
    if(pos >= 150) {
      clearInterval(t);
    }
    else {
      pos += 1;
      box.style.left = pos+"px";
    }
  }

  var pos = 0;
  //our box element
  var box = document.getElementById("box");
  var t = setInterval(move, 10);
  
  function move() {
      if(pos >= 150) {
          clearInterval(t);
      }
      else {
          pos +=1;
          box.style.left = pos+"px";
    }
}

var x = document.getElementById("demo");
x.oneclick = fuction () 
    document.body.innerHTML = Date();


window.onload ​= function() {

    ​//some code
    }


element.addEventListener("click", myFunction);
element.addEventListener("mouseover", myFunction);

function myFunction() {
  alert("Hello World!");
}

element.removeEventListener("mouseover", myFunction);

//Capturing propagation
elem1.addEventListener("click", myFunction, true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);

var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
 ];

 var images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
 ];
 var num = 0;

 function next() {
     var slider = document.getElementById("slider");
     num++;
     if(num >= images.length) {
         num = 0;
     }
     slider.src = images[num];
 }

 function Prev() {
     var slider = document.getElementById("slider");
     num--;
     if(num < 0){
         num = images.legth-1;
     }
     slider.src = images[num];
 }

 function validate() {
     var n1 = document.getElementById("num1");
     var n2 = document.getElementById("num2");
     if(n1.value != "" && n2.value != "") {
         if(n1.value == n2.value) {
            return true;
         }
     }
     alert("The values should be equal and not blank");
     return false;
 }

 var a = 10;
const b = 'hello';
let c = true;

if (true) {
    let name = 'jack';
}
alert(name); //generates an error 

function varTest() {
    var x = 1;
    if (true) {
        var x = 2; // same variable
        console.log(x); //2
    }
    console.log(x); //2
}

function lesTest() {
    let x = 1;
    if (true) {
        let x = 2; // diferent variable
        console.log(x); //2
    }
    console.log(x); //1
}

for (let i =0; i < 3; i++) {
    document.write(i);
}

const a = 'Hello';
a = 'Bye';

let name =  'David';
let msg = 'Welcome' + name + '!';
console.log(msg);

let name = 'David';
let msg = 'Welcome ${name}!';
console.log(msg);  

let a = 8;
let b = 34;
let msg = 'The sum is ${a+b}';
console.log(msg);

let arr = [1, 2, 3];
for (let k = 0; k < arr.length; k ++) {
    console.log(arr[k]);
}

let obj = { a: 1, b: 2, c: 3};
for (let v in obj) {
    console.log(v);
}

let list = ["x" ,"y", "z"];
for (let val of list) {
    console.log(val);
}

for (let ch of "Hello") {
    console.log(ch);
}

function add(x, y) {
    var sum = x+y;
    console.log(sum);
}

const dd = (x,y) => {
    let sum = x + y;
    console.log(sum);
}

const greet = x => "Welcome" + x;
const x = () => alert("Hi");

var arr =[2, 3, 7, 8];

arr.array.forEach(function(el) {
    console.log(el * 2);  
});

const arr = [2, 3 ,7, 8];
arr.forEach(v => {
    console.log(v * 2);
});

function test(a, b = 3, c = 42) {
    return a + b+ c;
}
console.log(test(5)); //50

const test = (a, b = 3, c = 42) => {
    return a + b + c;
  }
  console.log(test(5)); //50 

  let arr = [1, 2, 3];
  for (let k = 0; k <arr.length; k++) {
      console,log(arr[k]);
  }

  let obj = {a: 1, b: 2, c: 3};
  for (let v in obj) {
      console.log(v);
  }

  let list = ["x", "y", "z"];
  for (let val of list) {
      console.log(val);
  }

  for (let ch of "Hello") {
      console.log(ch);
  }

  function test (a, b =3, c = 42) {
      return a + b + c;
  }
  console,log(test(5)); //50

  const test = (a, b = 3, c = 42) => {
    return a + b + c;
  }
  console.log(test(5)); //50 

  let tree = {
      heigth: 10,
      color: 'green',
      grow() {
          this.heigth +=2;
      }
  };
  tree.grnow();
  console.log(tree.heigth); //12

  let heigth = 5;
  let health = 100;

  let athlete = {
      heigth,
      health
  };

  var a ={x: 1, x: 2, x:3, x:4};

  let prop = 'name';
  let id = '1234'
  let mobile = '08923'

  let user = {
      [prop]: 'jack',
      ['user_${id}']: '${monile}'
    }
    
    var i = 0;
    var a = {
        ['foo' + ++i]: i,
        ['foo' + ++i]: i,
        ['foo' + ++i]: i,
    };

    var  param = 'size';
    var config = {
        [param]: 12,
        ['mobile' + param.charAt(0).toUpperCase() +
        param.slice(1)]: 4
    };
    console.log(config.mobileSize);

    let person = {
        name :'Jack',
        age: 18,
        sex: 'male'
    };
    let student ={
        name: 'Juli',
        age: 20,
        xp: '2'
    };
    let newStudent = object.assing({}, person, syudent);

    let person = {
        name :'Jack',
        age: 18
        };

        let newPerson = person; // newPerson references person
        newPerson.name= 'Bob';

        console.log(person.name); // Bob
        console.log(newPerson,name); // Bob

        let person = {
            name: 'Jack',
            age: 18
        };

        let newPerson = Object.assaing({}, person) 
        newPerson.name= 'Bob';

        console.log(person.name); // Jack
        console.log(newPerson,name); // Bob

        let person = {
            name: 'Jack',
            age: 18
        };

        
        let newPerson = Object.assaing({}, person, {name:
        'Bob'});

        let a = () => {
            return [1, 3, 2];
        };

        let [one, , two] = a();
        
        let a, b, c = 4, d = 8;
        [a, b = 6] = [2]; // a = 2, b = 6

        [c, d] = [d, c]; // c = 8, d = 4

        
        let obj = {h: 100, s: true};
        let {h, s} =obj;

        console.log(h); // 100
        console.log(s); // true

        let  a, b
        ({a, b} = {a: 'Hello ', b: 'Jack'});

        console.log(a + b); // Hello Jack

        let {a, b} = {a: 'Hello ',  b: 'Jack'};
        console.log(a + b);

        var o = {h: 42, s: true};
        var {h: foo, s: bar} = o;

        //console.log(h); // Error
        console.log(foo); // 42 


        var obj = {id = 42, name: "Jack"};
    
        let {id = 10, age =20} = obj
        
        console.log(id); // 42
        console.log(age); // 20

        function containsALL (arr) {
            for ( let K = 1; K < arguments.length; k++){
                let num = arguments[k];
                if (arr,indexOf(num) === -1) {
                    }
                }
                return false;
            }
            let x = 2 [2, 4, 6, 7];
            console.log(containsALL(X, 2, 4, 7));
            console.log(containsALL(X, 6, 4, 9));

        function containsALL(arr , ... nums) {
            for (let num of nums) {
                return false;
                    }
                }
                return true;
                
        function myFunction(w, x, y, z) {
             console.log(w + x + y+ z);
            }
            var args = [1, 2, 3];
            myFunction.apply(null, args.contact(4));

        const myFunction = (w, x, y, z) => {
            console,log(w + x+ y+ z);
            };
            let args = [1, 2, 3];
            myFunction(...args, 4);

            var dataFields = [1970, 0, 1]; // 1 jan 1970
            var date = new Date(...dataFields);
            console.log(date);

            var arr = ["one", "Two", "Five"];

            arr.splice(2, 0, "Three");
            arr.splice(3, 0, "Four");
            console.log(arr);

            let newArr = ['Three', 'Four'];
            let arr = ['One', 'Two',...newArr, 'Five'];
            console.log(arr);

            const obj1 = {foo: 'bar', x: 42};
            const obj2 = { foo: 'baz', y: 5};

            const clonedObj = {...obj1}; // { foo: "bar", x: 42}
            const mergedObj = {...onj1, ...obj2}; // { foo: "baz", x: 42, y: 5 }}

            const obj1 = { foo: 'bar', x:42 };
            const obj2 = { foo: 'baz', y:5 };
            const merge = (...objects) => ({...objects});

            let mergeObj = merge(obj1, obj2);
            // { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 5} 

            let mergedObj2 = merge({}, obj1, obj2);
            // { =: {}, 1: { foo: 'bar' , x:42 }, 2: { foo: 'baz', y: 5 } }

            class Rectangle {
                constructor(height, width) {
                  this.height = height;
                  this.width = width;
                }
              }

              const square = new Rectangle(5, 5);
              const poster = new Rectangle(2, 3);

         var  square = class {
            constructor(height, width) {
                this.height = heigth;
                    this.width = width;
                }
            };

        var Square = class {
            constructor(height, width) {
                this.height = heigth;
                      this.width = width;
                }
           };

        class Rectangle {
            constructor(height, width){
                this.height = heigth;
                      this.width = width;
            }
        get area () {
        return this.calcArea();
         }
  
         calcArea () {
        return this.height * this.width;
        }
   }
     
        class point {
            constructor(x, y) {
                this. x = x;
                this.y = y;
            }
            static distance(a, b) {
                const dx = a.x - b.x;
                const dy = a.y - b.y;
                return Math.hypot(dx, dy);
            }
        }

        const p1 = new point(7, 2);
        const p2 = new point(3, 8);

        console.log(point.distance(p1, p2));


        class animal {
            constructor(name){
                this.name = name;
            }
            speak() {
                console.log(this.name + ' makes a noise');
            }
        }
          class Dog extends Animal {
              speak () {
                  console.log(this,name + 'breaks');
              }
          }

          let.dog = new Dog ('Rex');
          dog.speak();

          class Animal {
              constructor(name){
                  this.name = name;
              }
              speak () {
                  console.log(this.name + ' makes a noise');
              }
          }
          
          class Dog extends Animal {
              speak() {
                  super.speak(); // Super
                  console.log(this.name + ' braks.');
              }
          }

          let dog = new Dog( 'Rex');
          dog.speak();

          let map = new Map(['K1', 'v1'], ['k2', 'v2']);

          console.log(map.size); // 2

          let map = new map();

          map.set('k1', 'v1').set('k2', 'v2');

          console.log(map.get('k1')); // v1

          
          console.log(map.get('k2')); // true

          for (let kv of map.entries())
          console.log(kv[0]) + " : " + kv [1];

          let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);

          console.log(set,size); // 5

          let set = new Set();

          set.add(5).add(9).add.apply(59).add(9);

          console.log(set.has(9));

          for (let v of set.values())
          console.log(v);

          new Promise(function(resolve, reject) {
            // Work
            if (success)
                resolve(result);
            else
                reject(Error("failure"));
        }); 

        function asyncFunc(Work) {
            return new Promise(function(resolve, reject) {
                if (work === "")
                reject(Error("Nothing"));
                setTimeout(function() {
                    resolve(work);
                }, 1000);
            });
        }

        asyncFunc("work 1") // Task 1
        .then(function(result) {
            console.log(result);
            return asyncFunc ("work 2"); // Task 2
        }, function(error) {
            console.log(error);
        })
        .then (function(result) {
            console.log(error);
        })
        .then(function(result){
        console.log(result);
        }, function(error) {
            console.log(error);
        });
        console.log("End");

        function* idMarker() {
            let index = 0;
            while (index < 5)
            yield index++;
        }

        var gen =idMarker();
        console.log(gen.next ().value);

        const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
        const my_obj = {
            [Symbol.itearator]: function*() {
                for(let index of arr) {
                    yield '${index}';
        }
    }
};
  const all = [...my_obj]
            .map(i => parseInt(i, 10))
            .map(Math.sqrt)
            .filter((i) => i <5)
            .reduce((i, d) => i + d);
            console.log(all);
        
        
        // lib/math.js
export ​let sum = (x, y) => { return x + y; }

export ​let pi = 3.14

        // app.j

    
    [4, 5, 1, 8, 2, 0].find(x => x >3);
    [4, 5, 1, 8, 2, 0].findIndex(x => x >3);

    console.log(Array(3 + 1). join("foo")); // foofoofoo
    console.log("foo",repeat(3)); // foofoofoo

    "sololearn".indexOf("Solo") ===0; // true
    "sololearn".indexOf("Solo") === (4 - "Solo".length);
    // true
    "sololearn".indexOf("lole") !== -1; // true
    "sololearn".indexOf("olo", 1) !== -1; //true
    "sololearn".includes("olo", 2) !== -1;  // flase


    "sololearn".starsWitch("Solo", 0); // true
    "sololearn".starsWitch("Solo", 4); // true
    "sololearn".includes("lole"); // true
    "sololearn".includes("olo", 1); // true
    "sololearn".includes("olo", 2); // true

    class Add {
        constructor(...words) {
            this.words = words;
        }
        //your code goes here
      }
      
      var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
      var y = new Add("this", "is", "awesome");
      var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
      x.print();
      y.print();
      z.print();

    


   
   
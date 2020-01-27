// 1. 
var cat = {
    complain: function() {
        console.log("Meow!");
    }
};

// 2. 
let heading = document.querySelector("h3");

// 3. 
heading.style.fontSize = "2em";

// 4. 
heading.subheading = class {

}

// 5.
var paragraphs = document.querySelectorAll("p");

// 6. 
var resultsContainer = document.getElementsByClassName("results")[0];

resultsContainer.innerHTML = "<p>New paragraph</p>"

// 7. 
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catFunction(catArray) {
    for (let index = 0; index < catArray.length; index++) {
        console.log(cats[index].name);   
    }
}

catFunction(cats);

// 8. 
function catFunction(cats) {
    let out = "";
    for (let i = 0; i < cats.length; i++) {
      out += "<h5>" + cats[i].name + "</h5>\n";
    }
    return out;
  }

console.log(catFunction(cats));

// 9. 
let out = catFunction(cats);

resultsContainer.innerHTML = out;

// 10. 
function catFunction(cats) {
    let out = "";
    for (let i = 0; i < cats.length; i++) {
        var age = cats[i].age;
        out += `<div>
                <h5>${cats[i].name}</h5>\n
                <p>${cats[i].age == undefined ? "age unknown" : age}</p>
            </div>`;
    }
    return out;
}
const array = [1,2,3,4,5];

const cars = [
    {
        brand:"mercedes",
        price: 20000,
        year: 2017,
    },
    {
        brand:"audi",
        price: 10000,
        year: 2015
    },
    {
        brand:"bmw",
        price: 12000,
        year: 2011
    },
]

const sliced = array.slice(1,3);
console.log('slice',sliced);

console.log(array[3])

array.forEach((item)=> {
    console.log(item)
})

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log("for loop",element)
}

const arrayMap = array.map((item)=> item * 2);
console.log("map",arrayMap);

cars.forEach((item)=> {console.log(item.brand)})

const newCars= cars.filter((item)=> item.year > 2014);
console.log("filter", newCars);

const findCars = cars.find((item)=> item.year > 2014);
console.log("find", findCars)

function getCars() {
    let list = document.createElement("ul")

    cars.forEach((item)=> {
    let li = document.createElement("li");
    li.textContent = item.brand;
    li.classList.add("list")
    list.appendChild(li);
    })
    document.body.appendChild(list);
}

getCars();


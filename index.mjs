import food from "./foodJson.mjs";
// list all the food items
function foodItems(food_items) {
    food_items.forEach(element => {
        console.log(element);
    });
}
//2.- [ ]  list all the food items with category 
function foodCateogryVegetables(food,category_value){
    const foodCateogry=food.filter(element=>{
        return element.category===category_value;
    })
    return foodCateogry;
}
function calorieAbove(food){
    const calories=food.filter(element=>{
        return element.calorie>100;
    })
    return calories;
}
function calorieBelow(food){
    const calories=food.filter(element=>{
        return element.calorie<100;
    })
    return calories;
}

function highestProteinToLow(food){
    const new_food=[...food];
    new_food.sort((a,b)=>b.protiens-a.protiens);
    return new_food;
}
function lowestProteinToHigh(food){
    const new_food=[...food];
    new_food.sort((a,b)=>a.protiens-b.protiens);
    return new_food;
}
// 1.list all the food items
// foodItems(food);
//2.list all the food items with category vegetables, Fruit , protein ,grain and dairy;
//  console.log(foodCateogryVegetables(food,'Vegetable'));
//  console.log(foodCateogryVegetables(food,'Fruit'));
//  console.log(foodCateogryVegetables(food,'Protein'));
//  console.log(foodCateogryVegetables(food,'Grain'));
//  console.log(foodCateogryVegetables(food,'Dairy'));
// List all the food items with calorie above 100 and below 100
// console.log(calorieAbove(food));
// console.log(calorieBelow(food));

//list all the food items with highest protien content to lowest
console.log(highestProteinToLow(food));
//list all the food items with lowest protien content to highest
console.log(lowestProteinToHigh(food));

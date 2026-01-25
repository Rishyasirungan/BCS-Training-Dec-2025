const orders = [
  { id: 1, dishName: "Burger", category: "Fast Food", chef: "John Doe", ratings: [5, 4, 5] },
  { id: 2, dishName: "Pizza", category: "Italian", chef: "Jane Smith", ratings: [1, 3, 3] },
  { id: 3, dishName: "Sushi", category: "Japanese", chef: "Tom Brown", ratings: [5, 5, 4] },
  { id: 4, dishName: "Salad", category: "Healthy", chef: "Alice Green", ratings: [3, 1, 2] },
  { id: 5, dishName: "Pasta", category: "Italian", chef: "Gowtam Tinnanuri", ratings: [4, 4, 5] }
];

const moreOrders = [
  { id: 6, dishName: "Tacos", category: "Mexican", chef: "Carlos Ruiz", ratings: [4, 5, 4] },
  { id: 7, dishName: "Ramen", category: "Japanese", chef: "Yuki Tanaka", ratings: [5, 4, 5] }
];

function getHighRatedDishes(baseOrders, extraOrders = []){
    return [...baseOrders,...extraOrders].filter(obj=>
      obj.ratings.some(rate=>rate>=4)
    ).map(obj=>obj.dishName).join(", ")
};

console.log(getHighRatedDishes(orders));
// Burger, Sushi, Pasta

console.log(getHighRatedDishes(orders, moreOrders));
// Burger, Sushi, Pasta, Tacos, Ramen

console.log(getHighRatedDishes([], moreOrders));
// Tacos, Ramen
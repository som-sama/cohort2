/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function calculateTotalSpentByCategory(transactions) {

  let categories = {}
  let total_spent_by_category = {}

  transactions.forEach(transaction => {
    const current_category = transaction.category
    const price = transaction.price

    if (!categories[current_category]) {
      total_spent_by_category[current_category] = 0
      categories[current_category] = true
    }

    total_spent_by_category[current_category] += price
  });

  return Object.keys(total_spent_by_category).map(current_category => ({
    [current_category]: total_spent_by_category[current_category]
  }));
}

const transactions =  [
  { itemName: "Item1", category: "Groceries", price: 50, timestamp: "2023-12-07T12:00:00Z" },
  { itemName: "Item2", category: "Electronics", price: 200, timestamp: "2023-12-07T13:00:00Z" },
  { itemName: "Item3", category: "Groceries", price: 30, timestamp: "2023-12-07T14:00:00Z" },
  { itemName: "Item4", category: "Clothing", price: 80, timestamp: "2023-12-07T15:00:00Z" }
];

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;

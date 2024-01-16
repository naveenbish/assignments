/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


function calculateTotalSpentByCategory(transactions) {
  
  // Picking categories
  let catArr = [];
  catArr.push({"hell":1})
  let count = 0;
  for(let i=0;i<transactions.length;i++){
    // Check if duplicate
    for(let j=0;j<catArr.length;j++){
      if(transactions[i].category != catArr[j].category){
        count++;
      }
      if(transactions[i].category === catArr[j].category){
        count = 0;
        break;
      }
    }
    if(count > 0){
      catArr.push({"category": transactions[i].category, "totalSpent": 0})
      count = 0;
    }
  }
  catArr.shift();
  
  for(let i=0;i<catArr.length;i++){
    for(let j=0;j<transactions.length;j++){
      if(transactions[j].category === catArr[i].category){
        catArr[i].totalSpent = parseInt(catArr[i].totalSpent) + parseInt(transactions[j].price);
      }
    }
  }


  return catArr;
}

module.exports = calculateTotalSpentByCategory;

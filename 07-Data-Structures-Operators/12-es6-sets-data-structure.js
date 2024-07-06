'use strict';

{
  //~ SETS

  const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
  console.log(ordersSet);

  console.log(new Set('Artem')); // {'A', 'r', 't', 'e', 'm'}

  //_ Set size
  console.log(ordersSet.size); // 3

  //_ Set has
  console.log(ordersSet.has('Pizza')); // true
  console.log(ordersSet.has('Bread')); // false

  //_ Set add and remove
  ordersSet.add('Garlic Bread');
  ordersSet.add('Garlic Bread');
  ordersSet.delete('Risotto');
  console.log(ordersSet);

  //_ Set has no indexes (no way to get item from the set)
  console.log(ordersSet[0]); // undefined,

  //_ Looping like other iterables
  for (const order of ordersSet) {
    console.log(order);
  }

  ordersSet.clear();
  console.log(ordersSet);

  //_ Example
  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  const staffUnique = [...new Set(staff)];
  console.log(staffUnique);

  // how many unique positions
  console.log(new Set(staff).size); // 3
  console.log(new Set('Artem')); // 5
  console.log(new Set('Halloween')); // 7
}

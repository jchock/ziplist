/*
 * Created by Justin Chock on 9/20/2016.
 */

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list1, list2) {
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i], list2[i]);
  }
  return newList;
}
console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(testList1, testList2));

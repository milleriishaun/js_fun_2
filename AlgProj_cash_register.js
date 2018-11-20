/*
// my initial solution //fail: horrible solution that I'm glad to improve on
// time: 300 mins //could not reproduce w/o error, ugly solution
// debug time: 30 mins
function checkCashRegister(price, cash, cid) {
  let savePenny = cid[0][1];
  let cidSave = cid.slice();
  let change = { status: '', change: cidSave };
  let openChange = [ 
    ['ONE HUNDRED', 0],
    ['TWENTY', 0],
    ['TEN', 0],
    ['FIVE', 0],
    ['ONE', 0],
    ['QUARTER', 0],
    ['DIME', 0],
    ['NICKEL', 0],
    ['PENNY', 0.01]
  ]; //fail: cheated with a penny
  let total_cid =
    cidSave[0][1] +
    cidSave[1][1] +
    cidSave[2][1] +
    cidSave[3][1] +
    cidSave[4][1] +
    cidSave[5][1] +
    cidSave[6][1] +
    cidSave[7][1] +
    cidSave[8][1];
  let total_openChange = 0;
  let diff = cash - price;
  if (total_cid < diff) {
    change.status = 'INSUFFICIENT_FUNDS';
    change.change = [];
    return change;
  }
  while (diff > 0) {
    if (cidSave[8][1] > 0 && diff >= 100) {
      cidSave[8][1] -= 100;
      openChange[0][1] += 100;
      diff -= 100;
    } else if (cidSave[7][1] > 0 && diff >= 20) {
      cidSave[7][1] -= 20;
      openChange[1][1] += 20;
      diff -= 20;
    } else if (cidSave[6][1] > 0 && diff >= 10) {
      cidSave[6][1] -= 10;
      openChange[2][1] += 10;
      diff -= 10;
    } else if (cidSave[5][1] > 0 && diff >= 5) {
      cidSave[5][1] -= 5;
      openChange[3][1] += 5;
      diff -= 5;
    } else if (cidSave[4][1] > 0 && diff >= 1) {
      cidSave[4][1] -= 1;
      openChange[4][1] += 1;
      diff -= 1;
    } else if (cidSave[3][1] > 0 && diff >= 0.25) {
      cidSave[3][1] -= 0.25;
      openChange[5][1] += 0.25;
      diff -= 0.25;
    } else if (cidSave[2][1] > 0 && diff >= 0.1) {
      cidSave[2][1] -= 0.1;
      openChange[6][1] += 0.1;
      diff -= 0.1;
    } else if (cidSave[1][1] > 0 && diff >= 0.05) {
      cidSave[1][1] -= 0.05;
      openChange[7][1] += 0.05;
      diff -= 0.05;
    } else if (cidSave[0][1] > 0 && diff >= 0.01) {
      cidSave[0][1] -= 0.01;
      openChange[8][1] += 0.01;
      diff -= 0.01;
    } else {
      break;
    }
  }
  if (
    cidSave ===
    [
      ['PENNY', 0.01],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0]
    ]
  ) {
    //fail: realized this is pointless/not functioning
    change.status = 'CLOSED';
    change.change = cid;
    return change;
  } else {
    total_openChange =
      openChange[0][1] +
      openChange[1][1] +
      openChange[2][1] +
      openChange[3][1] +
      openChange[4][1] +
      openChange[5][1] +
      openChange[6][1] +
      openChange[7][1] +
      openChange[8][1];
    if (cash - price > total_openChange + 0.01) {
      change.status = 'INSUFFICIENT_FUNDS';
      change.change = [];
      return change;
    } else if (openChange[1][1] === cid[1][1]) {
      //fail: improvised comparison, since nickel is naturally 1 up penny
      change.status = 'CLOSED';
      cid[0][1] = savePenny; //fail: couldn't fix pointer so cheated penny
      change.change = cid;
      return change;
    }
    for (let j = 0; j < openChange.length; j++) {
      if (openChange[j][1] <= 0.01) {
        //fail: cheated the penny problem twice here
        openChange.splice(j, 1);
        j -= 1;
      }
    }
    change.status = 'OPEN';
    change.change = openChange;
  } // Here is your change, ma'am.
  return change;
}
*/

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ])
); //{status: "OPEN", change: [["QUARTER", 0.5]]}

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ])
); //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20],["FIVE", 15],
// ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ])
); //{status: "INSUFFICIENT_FUNDS", change: []}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ])
); //{status: "INSUFFICIENT_FUNDS", change: []}

console.log(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ])
); //{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}

// Beginner Solution
// Create an array of objects which hold the denominations and their values
var denom = [
  { name: 'ONE HUNDRED', val: 100.0 },
  { name: 'TWENTY', val: 20.0 },
  { name: 'TEN', val: 10.0 },
  { name: 'FIVE', val: 5.0 },
  { name: 'ONE', val: 1.0 },
  { name: 'QUARTER', val: 0.25 },
  { name: 'DIME', val: 0.1 },
  { name: 'NICKEL', val: 0.05 },
  { name: 'PENNY', val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle exact change
  if (register.total === change) {
    output.status = 'CLOSED';
    output.change = cid;
    return output;
  }

  // Handle obvious insufficient funds
  if (register.total < change) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change remaining
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the current change_arr
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = 'INSUFFICIENT_FUNDS';
    return output;
  }

  // Here is your change, ma'am.
  output.status = 'OPEN';
  output.change = change_arr;
  return output;
} // their solution is more involved and I'll love practicing it

/*
// Practice Session 2, 11//2018,  pm

// time:  mins
// debug time:  mins
function checkCashRegister(price, cash, cid) {
  var change;
  return change;
}
*/

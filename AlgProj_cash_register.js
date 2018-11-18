// my initial solution
// time:  mins
// debug time:  mins\
function checkCashRegister(price, cash, cid) {
  let change = { status: '', change: cid };
  let cidSave = cid.slice();
  var openChange = [
    ['ONE HUNDRED', 0],
    ['TWENTY', 0],
    ['TEN', 0],
    ['FIVE', 0],
    ['ONE', 0],
    ['QUARTER', 0],
    ['DIME', 0],
    ['NICKEL', 0],
    ['PENNY', 0]
  ];
  let total_cid =
    cid[0][1] +
    cid[1][1] +
    cid[2][1] +
    cid[3][1] +
    cid[4][1] +
    cid[5][1] +
    cid[6][1] +
    cid[7][1] +
    cid[8][1];
  let diff = cash - price;
  if (total_cid < diff) {
    change.status = 'INSUFFICIENT_FUNDS';
    change.change = [];
    return change;
  }
  console.log(diff);
  let k = 0;
  while (diff > 0) {
    if (cid[8][1] > 0 && diff >= 100) {
      cid[8][1] -= 100;
      openChange[0][1] += 100;
      diff -= 100;
      console.log('hit 100');
      console.log(diff);
    } else if (cid[7][1] > 0 && diff >= 20) {
      cid[7][1] -= 20;
      openChange[1][1] += 20;
      diff -= 20;
    } else if (cid[6][1] > 0 && diff >= 10) {
      cid[6][1] -= 10;
      openChange[2][1] += 10;
      diff -= 10;
    } else if (cid[5][1] > 0 && diff >= 5) {
      cid[5][1] -= 5;
      openChange[3][1] += 5;
      diff -= 5;
    } else if (cid[4][1] > 0 && diff >= 1) {
      cid[4][1] -= 1;
      openChange[4][1] += 1;
      diff -= 1;
    } else if (cid[3][1] > 0 && diff >= 0.25) {
      cid[3][1] -= 0.25;
      openChange[5][1] += 0.25;
      diff -= 0.25;
      console.log('hit quarter');
      console.log(diff);
    } else if (cid[2][1] > 0 && diff >= 0.1) {
      cid[2][1] -= 0.1;
      openChange[6][1] += 0.1;
      diff -= 0.1;
    } else if (cid[1][1] > 0 && diff >= 0.05) {
      cid[1][1] -= 0.05;
      openChange[7][1] += 0.05;
      diff -= 0.05;
      console.log('nickel');
    } else if (cid[0][1] > 0 && diff >= 0.01) {
      cid[0][1] -= 0.01;
      openChange[8][1] += 0.01;
      diff -= 0.01;
      console.log('penny');
    } else {
      break;
    }
    console.log('loop', k++);
  }
  if (
    cid ===
    [
      ['PENNY', 0],
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
    change.status = 'CLOSED';
    change.change = cidSave;
  } else {
    for (let j = 0; j < openChange[0].length; j++) {
      console.log(openChange[0]);
      if (openChange[0][j][1] < 0.01) {
        openChange[0].splice(j, 1);
        console.log('workt');
      }
    }
    change.status = 'OPEN';
    change.change = openChange;
  } // Here is your change, ma'am.
  return change;
}

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

/*
// Practice Session 2, 11//2018,  pm

// time:  mins
// debug time:  mins
function checkCashRegister(price, cash, cid) {
  var change;
  return change;
}
*/

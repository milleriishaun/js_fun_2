// Bitwise Operators

// It’s important to notice that whenever you use a bitwise operator, all
// of the operands get converted to signed 32-bit integers.

// This means that 124, for example, instead of simply becoming 01111100,
// becomes 00000000 00000000 00000000 01111100.

// It’s important to keep this in mind so that you know what happens if
// the representations you are using at first have a different number of
// bits. In this case, they will be padded with 0 and the signal will be
// kept (at the leftmost bit, as usual). This guarantees the binary numbers
// you are operating with will always have the same number of bits.

// AND → &
// Bitwise AND, when applied to a single binary digit, does exactly what
// you’d expect from AND: it returns 1 if both digits are 1.
// When applied to two binary numbers it will return 1 whenever the
// corresponding bits of both are 1.
const foo1 = 0b10101; // 21
const bar1 = 0b10011; // 19
const result1 = foo1 & bar1; // 17
result1.toString(2); // '10001'

// OR → |
// Bitwise OR will return 1 whenever one of the corresponding bits of
// the operand is 1.
const foo2 = 0b10101; // 21
const bar2 = 0b10011; // 19
const result2 = foo2 | bar2; // 23
result2.toString(2); // '10111'

// XOR → ^
// Also known as exclusive or, it will return 1 whenever the two
// corresponding bits are different from each other.
// This means that any combination of zeros and ones will
// result in 1, except 1 and 1, and 0 and 0.
const foo3 = 0b10101; // 21
const bar3 = 0b10011; // 19
const result3 = foo3 ^ bar3; // 6
result3.toString(2); // '110'

// NOT → ~
// NOT inverts an operand. Just as you’d expect, if it finds a 1 it turns
// it into a 0 and vice-versa. This transforms positive numbers into
// negative numbers and vice versa.
// As you might remember, we use the leftmost bit of a binary number to
// indicate its signal.
// Due to this, you may be lead to think that 0111, when negated would
// simply become 1111. That is not true.
// The NOT operator is applied to each bit of a number individually. This
// means that 0111 would become 1000. This is also known as one’s complement.

// Left Shift → <<
const foo4 = 0b010101; // 21
const result4 = foo4 << 1; // 42
result4.toString(2); // '101010'

// Right Shift (Sign-Propagating) → >>
// notice that the sign bit at the left will be added in from the left.
const leftmostOne1 = 0b11111111111111111111111111110000;
const leftmostZero1 = 0b01111111111111111111111111110000;
// This will fill-in 1's in the left
leftmostOne1 >> 2;
// 0b11111111111111111111111111111100
// This will fill-in 0's in the left
leftmostZero1 >> 2;
// 0b00011111111111111111111111111100

// Right Shift (Zero-Fill) → >>>
// This right-shift also shifts a binary representation to the right, but
// always adds in 0s to the left, no matter what is the leftmost bit (sign-bit).
const leftmostOne2 = 0b11111111111111111111111111110000;
const leftmostZero2 = 0b01111111111111111111111111110000;
// This will fill-in 0's in the left
leftmostOne2 >>> 2;
// 0b00111111111111111111111111111100
// This will also fill-in 0's in the left
leftmostZero2 >>> 2;
// 0b00011111111111111111111111111100

// Two's Complement: allows us to obtain a number with an inverse signal.
// 00000011 → Invert all bits (NOT)
// 11111100 → Add 1
// 11111101 → This is -3

//   00000111 → 7
// + 11111101 → -3
//   00000100 → 4
const twoComplement = num => ~num + 0b1;

// Bitmask use cases.
// getting a bit. Let’s say you had the number 10110101 and you wanted
// to get the third bit from right to left. Considering that the first bit
// is at index 0 we are gonna say that we want the bit at index 2(Right to Left).
const getBit = (n, bitIndex) => {
  const bitMask = 1 << bitIndex;
  const result = n & bitMask;
  return result >>> bitIndex;
};

// setting a bit. It’s important here to make it very clear that what
// I mean by setting a specific bit means turning it to 1, and not just
// assigning any value to it.
// In this example, I’m gonna set the third bit (index 2) in 10110001 to 1.

const setBit = (n, bitIndex) => {
  const bitMask = 1 << bitIndex;
  return n | bitMask;
};

// clearing a bit. clear an specific bit (setting it to 0).
const clearBit = (n, bitIndex) => {
  const bitMask = ~(1 << bitIndex);
  return n & bitMask;
};

let a1 = 12 & 3; // 1100 & 0011 = 0000
console.log('a1: ', a1);
let a2 = 12 & 4; // 1100 & 0100 = 0100
console.log('a2: ', a2);

/*
//Just make all possible model objects, and then do a compare in
// the code when needed.
//sucky code 1
const hasFoo2andFoo4 = {
  foo1: false,
  foo2: true,
  foo3: false,
  foo4: true
};

const hasFoo3andFoo4 = {
  foo1: false,
  foo2: false,
  foo3: true,
  foo4: true
};

// ...You get the idea...

// Then later in the code:
if (isEqual(myObject, hasFoo2andFoo4)) {
  // This is how we know the object only has Foo2 and Foo4
}
*/

/*
// Just do checks for each individual propert
// within the conditional blocks:
//sucky code 2
if (myObject[2] && myObject[4] && !(myObject[1] || myObject[3])) {
  // We know the object only has Foo2 and Foo4
}
// why sucky?: We’d have to stick about a million clauses into
// our client-side code — which is error-prone in the first place — and
// then it would require a gargantuan cleanup effort if any attribute
// ever changed or a new one was added. So what are we to do?
*/

//Instead of operating on integers, manually adding and subtracting,
// bitwise operators work on the bits that represent each integer,
// letting you compare and manipulate them directly

//you can use them to manipulate a 4-bit number (or 3-bit, or 12-bit,
// whatever) according to its zeroes and ones, with each bit representing
// one of your true/false attributes.

//All integers in JavaScript (up to 9,007,199,254,740,991 in 64-bit
// environments) can be represented in binary.

// check by using toString() on them.
console.log((1).toString(2));
// 1
console.log((2).toString(2));
// 10
console.log((3).toString(2));
// 11
console.log((4).toString(2));
// 100
// ...
console.log((3877494).toString(2));
// 1110110010101001110110

//real trick: Bitwise operators let you compare and manipulate
// those binary strings directly.

//So the bitwise operator <<, which puts zeroes on the right of
// the binary string, will increase your integer decimal-value according
// to binary rules.

// ****************************** Examples *********************************

// Let's set `fooBar` to the number 2
let fooBar = 2;
fooBar.toString(2);
// 10 (<- this is its binary representation)
// We're inserting (1) zero at the end of fooBar's binary
// representation
foobar = fooBar << 1;
fooBar.toString(2);
// 100
// ...so this means fooBar, in decimal form, now equals 4. Rad!
console.log(fooBar);
// 4

// Let's define an object that needs to be checked. In the
// real world, this might come from an API response, or user
// interactions, or a form, etc. You might not know it beforehand.
const myObject = {
  foo1: false,
  foo2: true,
  foo3: false,
  foo4: true
};

// The two most important bitwise comparison operators are “&” and “|”.
// Their resemblance to “&&” and “||” is intentional, but perhaps misleading.
// “&” will return a binary representation of the intersection of the two
// numbers you’re comparing, “|” returns the union. So 1010 & 1001 will
// return 1000, because the leftmost 1 is the only bit in common between
// the two; 1010 | 1001 will return 1011, because those are all the bits
// in common.

// Let's also set up some constants to make code easier to
// read later on. These could obviously take many forms, or be set
// up in different ways, but I find this the most intuitive to read:
const HAS_FOO1 = 1; // 0001
const HAS_FOO2 = 1 << 1; // 0010
const HAS_FOO3 = 1 << 2; // 0100
const HAS_FOO4 = 1 << 3; // 1000
// Construct your bitwise number. How you do this will depend
// on your use-case, but here's one way to do it: Checking object
// keys manually and using if statements to add attributes one at
// a time.
let myBitNumber = 0;
if (myObject['foo1'] === true) myBitNumber = myBitNumber | HAS_FOO1;
// This uses the bitwise | to form a union
if (myObject['foo2'] === true) myBitNumber = myBitNumber | HAS_FOO2;
if (myObject['foo3'] === true) myBitNumber = myBitNumber | HAS_FOO3;
if (myObject['foo4'] === true) myBitNumber = myBitNumber | HAS_FOO4;
console.log(myBitNumber.toString(2));
// 1010

/*
 * Our bitwise number is now "1010". That's because our second and
 * fourth attributes are true.
 * Think of it this way:
 *
 * | fourth | third | second | first | <= Attribute
 * |    1   |   0   |   1    |   0   | <= True/false
 *
 */

// Test whether your bit number has a single attribute. '&' ensures
// an intersection between them.
if (myBitNumber & HAS_FOO1) {
  // False, in this example
}
if (myBitNumber & HAS_FOO2) {
  // True!
}
// Test whether your bit number has ANY of the specified attributes
if (myBitNumber & (HAS_FOO1 | HAS_FOO2)) {
  // True!
}
if (myBitNumber & (HAS_FOO1 | HAS_FOO3)) {
  // False
}
// Test whether your bit number contains ONLY the specified attributes
if (myBitNumber == (HAS_FOO2 | HAS_FOO4)) {
  // True
}
if (myBitNumber == (HAS_FOO2 | HAS_FOO3 | HAS_FOO4)) {
  // False
}
// Test whether your bit number contains ALL of the given
// attributes. This is slightly tricky: the union of ATTRIBUTES
// can't supersede `myBitNumber` alone, otherwise it contains a bit
// that `myBitNumber` doesn't.
if (myBitNumber == (myBitNumber | (HAS_FOO2 | HAS_FOO4))) {
  // True
}
if (myBitNumber == (myBitNumber | (HAS_FOO2 | HAS_FOO3 | HAS_FOO4))) {
  // False
}

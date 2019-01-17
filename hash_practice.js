/* In JavaScript, all non-scalar objects behave as associative arrays
The object can use other objects as keys. However, the length of the
associative array is not tracked (like with index-based arrays) and there
is the potential that the keys can conflict with built-in members (such
  as those added to the object prototype) and custom members such as the
  length property or convenience methods. We'll explore an approach that
  can avoid these shortcomings. */

/* A short example of an associative array (hash table) in JavaScript
is as follows: */

var h = new Object(); // or just {}
h['one'] = 1;
h['two'] = 2;
h['three'] = 3;

// show the values stored
for (var k in h) {
  // use hasOwnProperty to filter out keys from the Object.prototype
  if (h.hasOwnProperty(k)) {
    console.log('key is: ' + k + ', value is: ' + h[k]);
  }
}
// https://medium.com/@jschapir/cracking-the-coding-interview-hash-tables-backed-by-linked-list-a57e60885d78
/* First, let’s define the Hash Table. A hash table is generally backed by
an array and contains “buckets” to store data at each array index. The
hash table uses a hashing function to map values given to the function
to indexes in the array. At each index in the array, a bucket exists. So,
for example, we insert the value “hello world” into the hash table, the
table “hashes” the value and decides which index to store the string
“hello world” at. Due to the nature of the hashing function, it is
possible that multiple values may hash to the same index (a collision).
If this occurs, we can use a secondary data structure, like a Linked
List (my implementation), to store the multiple values at that index.
This is what I implemented to today. */

/* Check out the code: */

var HashTable = function(size) {
  var _list = [];
  this.size = size || 0;
  HashTable.prototype.insert = function(val) {
    //retrieve index via hashing function for value
    var index = this.hash(val, this.size);
    //check if index contains LL
    var bucket = _list[index];
    //if not create new linked list with val being the head of the list
    if (!bucket) {
      _list[index] = new Node(val);
    } else {
      var current = _list[index]; //first node in bucket

      if (current.value == val) {
        //node exists
        return;
      }
      while (current.next) {
        //another value exists in the LL

        current = current.next; //traverse ll

        if (current.value == val) {
          //collision
          console.log('collision');
          return;
        }
      }
      //set the tail of the list to equal the new value
      current.next = new Node(val);
    }
  };
  HashTable.prototype.getList = function() {
    return _list;
  };
};
HashTable.prototype.hash = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

//Node of Linked List
var Node = function(val) {
  this.value = val;
  this.next = null;
};
module.exports = HashTable;

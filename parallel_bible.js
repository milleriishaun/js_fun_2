// This program visits the site of bible translations
// side-by-side, ESV and NIV.
let verses = [
  'Psalm 119:105',
  '2 Tim 3:16-17',
  '1 Tim 4:13-16',
  'Psalm 1:2',
  '2 Tim 2:15',
  'Eph 2:8-9',
  '1 John 1:2-3',
  'Acts 26:29',
  '1 Thess 5:16-18',
  'Phil 4:6',
  'Eph 6:18',
  '1 Cor 10:31',
  '1 Cor 15:58',
  'Romans 12:1',
  'Matt 5:16',
  '1 Tim 4:7-8',
  'Romans 13:14',

  'Gal 5:13-14',
  'Eph 5:1-2',
  '1 John 3:18',
  'Eph 4:11-13',
  '2 Tim 2:2',
  'Heb 13:7',
  'Heb 13:17',
  'Matt 28:18-20',
  'James 2:17',
  '1 John 5:2-3',
  'Luke 9:57-62',
  'Luke 14:25-27',
  '1 Cor 10:31',
  'Acts 2:46-47',
  'Romans 12:2',
  'Eph 5:8-11',
  'Heb 12:1',
  '1 Peter 5:9',
  '1 Cor 11:1',
  'Phil 2:29',
  'Joshua 4:4-7',
  '2 Tim 1:13-14',

  'Matt 26:6-13',
  'Romans 12:11',
  '2 Cor 11:23-29',
  '2 Tim 4:6-7',
  'Matt 6:19-20',
  '2 Cor 8:2-3',
  '2 Cor 9:6-7',
  'Acts 20:34-35',
  'Col 3:23-24',

  'Romans 12:5',
  'Gal 6:2',
  'Heb 3:13',
  'Acts 2:44-46',
  'Acts 20:18',
  'Romans 12:13',
  'Acts 20:20',
  'Acts 20:31',
  'Romans 16:3-13',
  'Eph 4:15',
  'Heb 10:24-25',

  'Ezra 7:10',
  '1 Tim 4:13',
  '2 Tim 4:2',
  '1 Peter 2:2',
  'Romans 12:2',
  'Col 1:16',
  'Eph 4:17-18',
  '2 Cor 10:5',
  '1 Peter 3:15',
  'Acts 26:25',
  'Exodus 35:10',
  'Romans 12:6-8',
  '1 Cor 14:12',
  '1 Peter 4:10',
  'Matt 28:19-20',
  'Col 1:28-29',
  '2 Tim 2:2',
  'Eph 4:11-13',

  'Acts 11:20',
  'Acts 13:2-3',
  '2 Tim 2:2',
  'Ezekiel 34:16',
  'Matt 9:36-38',
  'Matt 18:14',
  'Luke 19:10',
  'Acts 1:8',
  '1 Cor 9:22-23',
  'Matt 18:5',
  'Matt 25:40',
  'James 1:27'
];

function getLink(rawVerse) {
  let linkArr = [];
  for (let i = 0; i < rawVerse.length; i++) {
    rawVerse[i] = rawVerse[i].replace('2 Tim', '2-Timothy');
    rawVerse[i] = rawVerse[i].replace('1 Tim', '1-Timothy');
    rawVerse[i] = rawVerse[i].replace('Eph', 'Ephesians');
    rawVerse[i] = rawVerse[i].replace('1 John', '1-John');
    rawVerse[i] = rawVerse[i].replace('1 Thess', '1-Thessalonians');
    rawVerse[i] = rawVerse[i].replace('Phil', 'Philippians');
    rawVerse[i] = rawVerse[i].replace('1 Cor', '1-Corinthians');
    rawVerse[i] = rawVerse[i].replace('2 Cor', '2-Corinthians');
    rawVerse[i] = rawVerse[i].replace('Matt', 'Matthew');
    rawVerse[i] = rawVerse[i].replace('Gal', 'Galatians');
    rawVerse[i] = rawVerse[i].replace('Heb', 'Hebrews');
    rawVerse[i] = rawVerse[i].replace('1 Peter', '1-Peter');
    rawVerse[i] = rawVerse[i].replace('Col', 'Colossians');
    linkArr[i] =
      'https://www.biblestudytools.com/parallel-bible/passage/?q=' +
      rawVerse[i]
        .toLowerCase()
        .split(' ')
        .join('+') +
      '&t=esv&t2=niv';
  }
  return linkArr;
}

function clickable(verses, linkArr2) {
  for (let i = 0; i < verses.length; i++) {
    console.log('\x1b[36m%s\x1b[0m', verses[i]);
    console.log(linkArr2[i] + '\n');
  }
}

// Open the full console.log box so no broken links
clickable(verses, getLink(verses));

// // Connecting with God ................,
// Psalm 119:105,
// 2 Tim 3:16-17,
// 1 Tim 4:13-16,
// Psalm 1:2,
// 2 Tim 2:15,
// Eph 2:8-9,
// 1 John 1:2-3,
// Acts 26:29,
// 1 Thess 5:16-18,
// Phil 4:6,
// Eph 6:18,
// 1 Cor 10:31,
// 1 Cor 15:58,
// Romans 12:1,

// // Growing Up,
// Matt 5:16,
// 1 Tim 4:7-8,
// Romans 13:14,
// Gal 5:13-14,
// Eph 5:1-2,
// 1 John 3:18,
// Eph 4:11-13,
// 2 Tim 2:2,
// Heb 13:7,
// Heb 13:17,
// Matt 28:18-20,

// // Living It Out,
// James 2:17,
// 1 John 5:2-3,
// Luke 9:57-62,
// Luke 14:25-27,
// 1 Cor 10:31,
// Acts 2:46-47,
// Romans 12:2,
// Eph 5:8-11,
// Heb 12:1,
// 1 Peter 5:9,
// 1 Cor 11:1,
// Phil 2:29,
// Joshua 4:4-7,
// 2 Tim 1:13-14,

// // Giving It All,
// Matt 26:6-13,
// Romans 12:11,
// 2 Cor 11:23-29,
// 2 Tim 4:6-7,
// Matt 6:19-20,
// 2 Cor 8:2-3,
// 2 Cor 9:6-7,
// Acts 20:34-35,
// Col 3:23-24,

// // Getting Close,
// Romans 12:5,
// Gal 6:2,
// Heb 3:13,
// Acts 2:44-46,
// Acts 20:18,
// Romans 12:13,
// Acts 20:20, 31,
// Romans 16:3-13,
// Eph 4:15,
// Heb 10:24-25,

// // Training Up,
// Ezra 7:10,
// 1 Tim 4:13,
// 2 Tim 4:2,
// 1 Peter 2:2,
// Romans 12:2,
// Col 1:16,
// Eph 4:17-18,
// 2 Cor 10:5,
// 1 Peter 3:15,
// Acts 26:25,
// Exodus 35:10,
// Romans 12:6-8,
// 1 Cor 14:12,
// 1 Peter 4:10,
// Matt 28:19-20,
// Col 1:28-29,
// 2 Tim 2:2,
// Eph 4:11-13,

// // Reaching Out,
// Acts 11:20,
// Acts 13:2-3,
// 2 Tim 2:2,
// Ezekiel 34:16,
// Matt 9:36-38,
// Matt 18:14,
// Luke 19:10,
// Acts 1:8,
// 1 Cor 9:22-23,
// Matt 18:5,
// Matt 25:40,
// James 1:27,

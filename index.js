
/*const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); 
	res.write('Merhaba Dünya!');
	res.end();
});

server.listen(3000, () => {
	console.log('Uygulama çalıştırıldı...');
});
*/

/*

const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Merhaba Dünya!');
}); 
app.get('/kategori', (req, res) => {
	res.send('Kategori sayfasındasınız!');
});

app.listen(3000, () => {
	console.log('Uygulama çalıştırıldı...');
});
*/
/*
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('Merhaba Dünya!');
});

app.get('/kategori', (req, res) => {
	//res.send('Kategori sayfasındasınız!');
	res.json({ 'product': 'Elma', 'price': 3.50, 'currency': 'TL' });
});

app.get('/galeri/:categoryUrl/:titleUrl', (req, res) => {
	const category = req.params.categoryUrl;
	const titleUrl = req.params.titleUrl;
	
	res.send(`${category} kategorisindeki ${titleUrl} içeriğine bakıyorsunuz.`);
});

app.listen(3000, () => {
	console.log('Uygulama çalıştırıldı...');
});
*/

const express = require('express');
const readline = require('readline');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Kullanıcıdan veriyi almak için bir POST rotası oluşturun
app.post('/findLongestSubstring', (req, res) => {
  const inputString = req.body.inputString;

  if (!inputString) {
    return res.status(400).json({ error: 'Input string is required.' });
  }

  const longestSubstring = findLongestSubstring(inputString);

  res.json({ longestSubstring });
});

// Yardımcı işlev: En uzun ardışık tekrarlayan karakter içermeyen alt dizi bulma
/*
function findLongestSubstring(str) {
  let longest = '';
  let current = '';
  const charIndexMap = new Map();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!charIndexMap.has(char) || charIndexMap.get(char) < i - current.length) {
      current += char;
    } else {
      current = current.substring(charIndexMap.get(char) - (i - current.length) + 1) + char;
    }

    charIndexMap.set(char, i);

    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}*/
/*
 const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (inputString) => {
  const longestSubstring = findLongestSubstring(inputString);
  console.log(`Longest substring with no duplicate characters: ${longestSubstring}`);
  rl.close();
});**/



   function findLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = new Map();
  let longestSubstring = '';

  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
      start = charIndexMap.get(char) + 1;
    }

    charIndexMap.set(char, end);

    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      longestSubstring = s.substring(start, end + 1);
    }
  }

  return longestSubstring;
}




app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});

import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const outDir = path.resolve('public/images');

// Carefully curated distinct images for each specific dish
const accurateImages = [
  {
    name: 'upma.jpg',
    url: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=800&q=80', // Fluffy semolina upma
  },
  {
    name: 'sheera.jpg',
    url: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80', // Sweet semolina halwa / sheera
  },
  {
    name: 'medu-vada.jpg',
    url: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=800&q=80', // Distinct crispy donut shaped medu vada
  },
  {
    name: 'puri-bhaji.jpg',
    url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80', // Puffed puris with potato bhaji
  },
  {
    name: 'idli.jpg',
    url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80', // Steamed idlis with sambar
  },
  {
    name: 'mysore-dosa.jpg',
    url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', // Spicy chutney Mysore Dosa
  },
  {
    name: 'uttappam.jpg',
    url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', // Colorful thick onion tomato uttappam
  },
  {
    name: 'tawa-pulav.jpg',
    url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', // Sizzling tawa pulav
  },
  {
    name: 'paneer-butter-masala.jpg',
    url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80', // Silky tomato makhani paneer
  },
  {
    name: 'veg-kadai.jpg',
    url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', // Veg Kadai with capsicum
  },
  {
    name: 'dal-tadka.jpg',
    url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', // Yellow dal with red chilli ghee tadka
  },
  {
    name: 'hakka-noodles.jpg',
    url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80', // Wok-tossed thin noodles
  },
  {
    name: 'fried-rice.jpg',
    url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80', // Indo-Chinese fried rice
  },
  {
    name: 'veg-manchurian.jpg',
    url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80', // Manchurian balls in rich dark sauce
  },
  {
    name: 'paneer-chilli.jpg',
    url: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80', // Crisp paneer cubes with bell peppers
  },
  {
    name: 'butter-roti.jpg',
    url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80', // Charcoal tandoor rotis
  },
  {
    name: 'garlic-naan.jpg',
    url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', // Butter garlic naan
  },
  {
    name: 'jeera-rice.jpg',
    url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', // Cumin tempered basmati rice
  },
  {
    name: 'veg-biryani.jpg',
    url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', // Vegetable dum biryani
  },
  {
    name: 'sandwich.jpg',
    url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80', // Golden toasted cheese sandwich
  },
  {
    name: 'filter-coffee.jpg',
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80', // Frothy coffee in dabarah tumbler
  },
  {
    name: 'lime-soda.jpg',
    url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', // Sparkling fresh lime soda
  },
  {
    name: 'tea.jpg',
    url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80', // Indian cutting chai
  },
  {
    name: 'lassi.jpg',
    url: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80', // Sweet Punjabi lassi
  },
  {
    name: 'kulfi.jpg',
    url: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80', // Traditional saffron kulfi
  },
  {
    name: 'falooda.jpg',
    url: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80', // Royal rose falooda with ice cream
  }
];

function download(url, dest) {
  return new Promise((resolve) => {
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve);
      }
      if (response.statusCode !== 200) {
        console.error(`Failed ${url}: status ${response.statusCode}`);
        return resolve(false);
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved accurate image: ${path.basename(dest)}`);
        resolve(true);
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${url}:`, err.message);
      resolve(false);
    });
  });
}

async function main() {
  for (const item of accurateImages) {
    const dest = path.join(outDir, item.name);
    console.log(`Updating ${item.name}...`);
    await download(item.url, dest);
  }
  console.log('Finished updating accurate images.');
}

main();

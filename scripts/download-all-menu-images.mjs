import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const imagesToDownload = [
  {
    name: 'upma.jpg',
    url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'medu-vada.jpg',
    url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'plain-dosa.jpg',
    url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'set-dosa.jpg',
    url: 'https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'rava-dosa.jpg',
    url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'mysore-dosa.jpg',
    url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'schezwan-dosa.jpg',
    url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'palak-dosa.jpg',
    url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'paper-dosa.jpg',
    url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'uttappam.jpg',
    url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'usal-pav.jpg',
    url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'cheese-pav-bhaji.jpg',
    url: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'tawa-pulav.jpg',
    url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'paneer-butter-masala.jpg',
    url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'veg-kadai.jpg',
    url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'veg-kolhapuri.jpg',
    url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'dal-tadka.jpg',
    url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'dal-fry.jpg',
    url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'veg-crispy.jpg',
    url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'paneer-chilli.jpg',
    url: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'hakka-noodles.jpg',
    url: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'fried-rice.jpg',
    url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'veg-manchurian.jpg',
    url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'butter-roti.jpg',
    url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'butter-naan.jpg',
    url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'garlic-naan.jpg',
    url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'jeera-rice.jpg',
    url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'veg-biryani.jpg',
    url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'sandwich.jpg',
    url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'filter-coffee.jpg',
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
  },
  {
    name: 'lime-soda.jpg',
    url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80',
  },
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
        console.log(`Saved ${dest}`);
        resolve(true);
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${url}:`, err.message);
      resolve(false);
    });
  });
}

async function main() {
  for (const item of imagesToDownload) {
    const dest = path.join(outDir, item.name);
    if (!fs.existsSync(dest)) {
      console.log(`Downloading ${item.name}...`);
      await download(item.url, dest);
    } else {
      console.log(`Already exists: ${item.name}`);
    }
  }
  console.log('All menu images downloaded successfully.');
}

main();

import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const imagesToDownload = [
  {
    name: 'dosa.jpg',
    url: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    description: 'Crispy South Indian Masala Dosa'
  },
  {
    name: 'pav-bhaji.jpg',
    url: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    description: 'Buttery Pav Bhaji with toasted pav'
  },
  {
    name: 'paneer-curry.jpg',
    url: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    description: 'Paneer Handi curry with rich spices'
  },
  {
    name: 'misal.jpg',
    url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    description: 'Spicy Puneri Misal Pav'
  },
  {
    name: 'poha.jpg',
    url: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=800&q=80',
    description: 'Fresh Kanda Poha breakfast'
  },
  {
    name: 'tea.jpg',
    url: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    description: 'Special Indian ginger cardamom chai'
  },
  {
    name: 'lassi.jpg',
    url: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    description: 'Thick sweet Punjabi lassi'
  },
  {
    name: 'falooda.jpg',
    url: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    description: 'Royal Rose Falooda with ice cream'
  },
  {
    name: 'kulfi.jpg',
    url: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80',
    description: 'Matka Malai Kulfi dessert'
  },
  {
    name: 'sev-bhaji.jpg',
    url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    description: 'Spicy Khandeshi Sev Bhaji'
  },
  {
    name: 'puri-bhaji.jpg',
    url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    description: 'Puri Bhaji golden puffed puris'
  },
  {
    name: 'idli.jpg',
    url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    description: 'Steamed Idli Sambar'
  },
  {
    name: 'sheera.jpg',
    url: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80',
    description: 'Warm Rava Sheera'
  },
  {
    name: 'interior.jpg',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: 'Clean restaurant dining room with black and white accents'
  },
  {
    name: 'storefront.jpg',
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    description: 'Casual friendly restaurant storefront'
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
    console.log(`Downloading ${item.name}...`);
    await download(item.url, dest);
  }
  console.log('Image setup complete.');
}

main();

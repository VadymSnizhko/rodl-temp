import fs from 'fs';

async function main() {
    console.log("Start");
  const data = await fetch("https://rodl-proxy.vercel.app/api/news/route").then(r => r.json());
    fs.writeFileSync('../public/news.json', JSON.stringify(data, null, 2));
    
    console.log(data);
}

main();

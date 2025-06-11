import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  const rssUrl = "https://www.gmanetwork.com/news/rss/news/";
  try {
    const res = await fetch(rssUrl);
    if (!res.ok) throw new Error(`Failed to fetch RSS feed: ${res.status}`);
    const xml = await res.text();
    const parsed = await parseStringPromise(xml);

    const items = parsed.rss.channel[0].item.map(item => ({
      title: item.title[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
      description: item.description ? item.description[0] : "",
    }));

    return NextResponse.json({ items });
  } catch (err) {
    // Fallback to static JSON
    try {
      const filePath = join(process.cwd(), 'src/app/api/gmanews/gmanews.json');
      const fileContents = readFileSync(filePath, 'utf8');
      const newsData = JSON.parse(fileContents);
      return NextResponse.json(newsData);
    } catch (jsonErr) {
      return NextResponse.json({ error: err.message + " | " + jsonErr.message }, { status: 500 });
    }
  }
}
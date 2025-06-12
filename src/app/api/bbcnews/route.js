import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';

export async function GET() {
    const rssUrl = "http://feeds.bbci.co.uk/news/world/rss.xml";
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
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
} 
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { url } = await request.json();
  
  const indexNowUrl = 'https://api.indexnow.org/indexnow';
  const key = 'a4db227afacb41f79feebbfa1627593d';
  const keyLocation = `https://mishwari.com/${key}.txt`;

  try {
    const response = await fetch(indexNowUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'mishwari.com',
        key: key,
        keyLocation: keyLocation,
        urlList: [url || 'https://mishwari.com'],
      }),
    });

    return NextResponse.json({ 
      success: response.ok,
      status: response.status 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to submit to IndexNow' 
    }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { url } = await request.json();
  
  const indexNowUrl = 'https://api.indexnow.org/indexnow';
  const key = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6';
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

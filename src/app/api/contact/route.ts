import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '8325550451:AAFW2IrdFy9oAOZJ-ymg6ZFZnFCxFBvLt0U';
const TELEGRAM_CHAT_ID = '1481941392'; // Your actual Telegram chat ID

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, metadata } = await request.json();
    
    // Get client IP address
    const forwarded = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwarded?.split(',')[0] || realIp || 'Unknown';

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Get current timestamp
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });

    // Format the message for Telegram with metadata
    const telegramMessage = `
📧 *New Contact Form Submission*

👤 *Name:* ${name}
📧 *Email:* ${email}
💬 *Message:*
${message}

🌐 *IP Address:* ${clientIp}
🕒 *Timestamp:* ${timestamp}

📱 *System Information:*
${metadata ? `
🖥️ *OS:* ${metadata.osName} ${metadata.osVersion}
🌐 *Browser:* ${metadata.browserName} ${metadata.browserVersion}
📱 *Platform:* ${metadata.platform}
🖼️ *Screen:* ${metadata.screenResolution}
🌍 *Language:* ${metadata.language}
⏰ *Timezone:* ${metadata.timezone}
🔗 *Referrer:* ${metadata.referrer}
` : 'No metadata available'}

---
*Sent from your portfolio website*
    `;

    // Send message to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      console.error('Response status:', telegramResponse.status);
      console.error('Chat ID used:', TELEGRAM_CHAT_ID);
      return NextResponse.json(
        { error: `Failed to send message: ${errorData.description || 'Unknown error'}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

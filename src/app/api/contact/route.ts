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

    // Escape special characters for Telegram Markdown
    const escapeMarkdown = (text: string) => {
      return text
        .replace(/\\/g, '\\\\')
        .replace(/\*/g, '\\*')
        .replace(/_/g, '\\_')
        .replace(/\[/g, '\\[')
        .replace(/\]/g, '\\]')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)')
        .replace(/~/g, '\\~')
        .replace(/`/g, '\\`')
        .replace(/>/g, '\\>')
        .replace(/#/g, '\\#')
        .replace(/\+/g, '\\+')
        .replace(/-/g, '\\-')
        .replace(/=/g, '\\=')
        .replace(/\|/g, '\\|')
        .replace(/\{/g, '\\{')
        .replace(/\}/g, '\\}')
        .replace(/\./g, '\\.')
        .replace(/!/g, '\\!');
    };

    // Format the message for Telegram with metadata
    const telegramMessage = `
📧 *New Contact Form Submission*

👤 *Name:* ${escapeMarkdown(name)}
📧 *Email:* ${escapeMarkdown(email)}
💬 *Message:*
${escapeMarkdown(message)}

🌐 *IP Address:* ${escapeMarkdown(clientIp)}
🕒 *Timestamp:* ${escapeMarkdown(timestamp)}

📱 *System Information:*
${metadata ? `
🖥️ *OS:* ${escapeMarkdown(metadata.osName)} ${escapeMarkdown(metadata.osVersion)}
🌐 *Browser:* ${escapeMarkdown(metadata.browserName)} ${escapeMarkdown(metadata.browserVersion)}
📱 *Platform:* ${escapeMarkdown(metadata.platform)}
🖼️ *Screen:* ${escapeMarkdown(metadata.screenResolution)}
🌍 *Language:* ${escapeMarkdown(metadata.language)}
⏰ *Timezone:* ${escapeMarkdown(metadata.timezone)}
🔗 *Referrer:* ${escapeMarkdown(metadata.referrer)}
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
      
      // If Markdown parsing fails, try with HTML parsing mode
      if (errorData.description && errorData.description.includes('parse')) {
        console.log('Retrying with HTML parsing mode...');
        
        const htmlMessage = `
📧 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${name}
📧 <b>Email:</b> ${email}
💬 <b>Message:</b>
${message}

🌐 <b>IP Address:</b> ${clientIp}
🕒 <b>Timestamp:</b> ${timestamp}

📱 <b>System Information:</b>
${metadata ? `
🖥️ <b>OS:</b> ${metadata.osName} ${metadata.osVersion}
🌐 <b>Browser:</b> ${metadata.browserName} ${metadata.browserVersion}
📱 <b>Platform:</b> ${metadata.platform}
🖼️ <b>Screen:</b> ${metadata.screenResolution}
🌍 <b>Language:</b> ${metadata.language}
⏰ <b>Timezone:</b> ${metadata.timezone}
🔗 <b>Referrer:</b> ${metadata.referrer}
` : 'No metadata available'}

---
<i>Sent from your portfolio website</i>
        `;
        
        const retryResponse = await fetch(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              chat_id: TELEGRAM_CHAT_ID,
              text: htmlMessage,
              parse_mode: 'HTML',
            }),
          }
        );
        
        if (!retryResponse.ok) {
          const retryErrorData = await retryResponse.json();
          console.error('Telegram API retry error:', retryErrorData);
          return NextResponse.json(
            { error: `Failed to send message: ${retryErrorData.description || 'Unknown error'}` },
            { status: 500 }
          );
        }
      } else {
        console.error('Response status:', telegramResponse.status);
        console.error('Chat ID used:', TELEGRAM_CHAT_ID);
        return NextResponse.json(
          { error: `Failed to send message: ${errorData.description || 'Unknown error'}` },
          { status: 500 }
        );
      }
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

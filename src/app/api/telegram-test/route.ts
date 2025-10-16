import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = '8325550451:AAFW2IrdFy9oAOZJ-ymg6ZFZnFCxFBvLt0U';

export async function GET() {
  try {
    // Get bot info
    const botInfoResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`
    );
    
    const botInfo = await botInfoResponse.json();
    
    return NextResponse.json({
      botInfo,
      message: 'Bot info retrieved successfully. Check the console for details.',
      instructions: [
        '1. Start a chat with your bot on Telegram',
        '2. Send any message to your bot',
        '3. Visit: https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/getUpdates',
        '4. Look for "chat":{"id": NUMBER} in the response',
        '5. Use that number as your TELEGRAM_CHAT_ID'
      ]
    });
  } catch (error) {
    console.error('Error getting bot info:', error);
    return NextResponse.json(
      { error: 'Failed to get bot info' },
      { status: 500 }
    );
  }
}

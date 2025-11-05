/**
 * Script to generate og-image.png with profile photo included
 * This creates a composite image with the ABDI logo and profile photo
 * 
 * Run with: node generate-og-image-with-photo.js
 * Requires: npm install --save-dev sharp
 */

const fs = require('fs');
const path = require('path');

async function generateOGImageWithPhoto() {
  try {
    let sharp;
    try {
      sharp = require('sharp');
    } catch (e) {
      console.error('❌ Error: sharp package is required.');
      console.log('📦 Install it with: npm install --save-dev sharp\n');
      console.log('💡 Alternative: Use a graphic design tool (Photoshop, Figma, Canva)');
      console.log('   to combine the ABDI logo with your profile photo.');
      console.log('   Dimensions: 1200x630 pixels\n');
      return;
    }

    const publicDir = path.join(__dirname, 'public');
    const profilePhoto = path.join(publicDir, 'profile-photo.png');
    const logoSvg = path.join(publicDir, 'logo.svg');
    const outputPath = path.join(publicDir, 'og-image.png');

    if (!fs.existsSync(profilePhoto)) {
      console.error('❌ profile-photo.png not found in public folder!');
      return;
    }

    console.log('🎨 Generating composite og-image with profile photo...\n');

    // Create base canvas (1200x630)
    const canvas = sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    });

    // Load and resize profile photo to circle (240x240, then crop to circle)
    const profileSize = 240;
    const profileX = 950;
    const profileY = 315;

    let profileBuffer;
    try {
      profileBuffer = await sharp(profilePhoto)
        .resize(profileSize, profileSize, {
          fit: 'cover',
          position: 'center'
        })
        .png()
        .toBuffer();
    } catch (e) {
      console.error('❌ Error processing profile photo:', e.message);
      return;
    }

    // Create composite image
    const composite = [
      // Background gradient overlay
      {
        input: Buffer.from(`
          <svg width="1200" height="630">
            <defs>
              <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630">
                <stop offset="0%" stop-color="#000000"/>
                <stop offset="100%" stop-color="#0a0a0a"/>
              </linearGradient>
              <linearGradient id="orange" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stop-color="#ff6b35"/>
                <stop offset="100%" stop-color="#e55a2b"/>
              </linearGradient>
            </defs>
            <rect width="1200" height="630" fill="url(#bg)"/>
            <circle cx="200" cy="150" r="100" fill="#ff6b35" opacity="0.05"/>
            <circle cx="1000" cy="480" r="120" fill="#ff6b35" opacity="0.05"/>
            <text x="450" y="320" font-family="Arial" font-size="140" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="-3">ABDI</text>
            <circle cx="650" cy="240" r="25" fill="url(#orange)"/>
            <text x="450" y="380" font-family="Arial" font-size="28" fill="#a0a0a0" text-anchor="middle">Software Engineer &amp; Developer</text>
            <text x="450" y="420" font-family="Arial" font-size="22" fill="#666666" text-anchor="middle">Computer Science &amp; Engineering Graduate</text>
            <line x1="300" y1="350" x2="350" y2="350" stroke="#ff6b35" stroke-width="3" opacity="0.5"/>
            <line x1="550" y1="350" x2="600" y2="350" stroke="#ff6b35" stroke-width="3" opacity="0.5"/>
          </svg>
        `),
        top: 0,
        left: 0
      },
      // Profile photo with circular mask
      {
        input: await sharp(profileBuffer)
          .resize(profileSize, profileSize)
          .composite([{
            input: Buffer.from(`
              <svg width="${profileSize}" height="${profileSize}">
                <circle cx="${profileSize/2}" cy="${profileSize/2}" r="${profileSize/2}" fill="white"/>
              </svg>
            `),
            blend: 'dest-in'
          }])
          .png()
          .toBuffer(),
        top: profileY - profileSize / 2,
        left: profileX - profileSize / 2
      },
      // Profile photo border
      {
        input: Buffer.from(`
          <svg width="1200" height="630">
            <circle cx="${profileX}" cy="${profileY}" r="${profileSize/2 + 5}" fill="none" stroke="#ff6b35" stroke-width="4" opacity="0.6"/>
          </svg>
        `),
        top: 0,
        left: 0
      }
    ];

    await canvas
      .composite(composite)
      .png()
      .toFile(outputPath);

    console.log('✅ Generated og-image.png with profile photo!');
    console.log(`   Saved to: ${outputPath}\n`);
    console.log('📝 The image includes:');
    console.log('   - ABDI logo text with orange dot');
    console.log('   - Your profile photo (circular, right side)');
    console.log('   - Professional subtitle text');
    console.log('\n✨ This will appear in Google search results and social media shares!');

  } catch (error) {
    console.error('❌ Error generating image:', error.message);
    console.log('\n💡 Alternative: Use a design tool to manually combine:');
    console.log('   1. Open og-image.svg template');
    console.log('   2. Add your profile-photo.png (resize to ~240x240, circular)');
    console.log('   3. Position on the right side (around x:950, y:315)');
    console.log('   4. Export as PNG at 1200x630 pixels');
  }
}

generateOGImageWithPhoto();


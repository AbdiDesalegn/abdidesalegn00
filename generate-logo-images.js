/**
 * Script to generate logo images from SVG
 * Run with: node generate-logo-images.js
 * 
 * Note: This requires sharp package for image conversion
 * Install with: npm install --save-dev sharp
 */

const fs = require('fs');
const path = require('path');

async function generateLogoImages() {
  try {
    // Check if sharp is available
    let sharp;
    try {
      sharp = require('sharp');
    } catch (e) {
      console.error('❌ Error: sharp package is required to generate images.');
      console.log('📦 Install it with: npm install --save-dev sharp');
      console.log('\n📝 Alternative: Use an online SVG to PNG/ICO converter:');
      console.log('   - https://cloudconvert.com/svg-to-png');
      console.log('   - https://convertio.co/svg-png/');
      console.log('   - https://www.favicon-generator.org/');
      console.log('\n📋 Required images:');
      console.log('   1. favicon.ico (16x16, 32x32, 48x48)');
      console.log('   2. og-image.png (1200x630)');
      console.log('   3. apple-touch-icon.png (180x180)');
      console.log('   4. icon-192.png (192x192)');
      console.log('   5. icon-512.png (512x512)');
      return;
    }

    const publicDir = path.join(__dirname, 'public');
    const logoSvg = path.join(publicDir, 'logo.svg');
    const ogSvg = path.join(publicDir, 'og-image.svg');

    if (!fs.existsSync(logoSvg)) {
      console.error('❌ logo.svg not found!');
      return;
    }

    console.log('🎨 Generating logo images...\n');

    // Generate favicon.ico (multi-size)
    const faviconSizes = [16, 32, 48];
    const faviconBuffers = [];
    
    for (const size of faviconSizes) {
      const buffer = await sharp(logoSvg)
        .resize(size, size)
        .png()
        .toBuffer();
      faviconBuffers.push({ size, buffer });
      console.log(`✅ Generated favicon ${size}x${size}`);
    }

    // Generate apple-touch-icon.png (180x180)
    await sharp(logoSvg)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✅ Generated apple-touch-icon.png (180x180)');

    // Generate icon-192.png
    await sharp(logoSvg)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'icon-192.png'));
    console.log('✅ Generated icon-192.png');

    // Generate icon-512.png
    await sharp(logoSvg)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'icon-512.png'));
    console.log('✅ Generated icon-512.png');

    // Generate og-image.png (1200x630)
    if (fs.existsSync(ogSvg)) {
      await sharp(ogSvg)
        .resize(1200, 630)
        .png()
        .toFile(path.join(publicDir, 'og-image.png'));
      console.log('✅ Generated og-image.png (1200x630)');
    } else {
      await sharp(logoSvg)
        .resize(1200, 630, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 1 }
        })
        .png()
        .toFile(path.join(publicDir, 'og-image.png'));
      console.log('✅ Generated og-image.png (1200x630) from logo.svg');
    }

    console.log('\n✨ All logo images generated successfully!');
    console.log('📝 Update your metadata in layout.tsx to reference these files.');
    
  } catch (error) {
    console.error('❌ Error generating images:', error.message);
    console.log('\n💡 Tip: You can use online converters to generate these images manually.');
  }
}

generateLogoImages();


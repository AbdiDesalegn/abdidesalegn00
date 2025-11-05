# Logo Setup Instructions

I've created the "ABDI ." logo SVG files for your portfolio. To complete the setup for Google search results and social media sharing, you need to generate PNG and ICO files from the SVG.

## Files Created

1. **`public/logo.svg`** - Main logo (200x200) - Used as favicon
2. **`public/og-image.svg`** - Open Graph image (1200x630) - For social media previews

## Required Image Files

You need to generate these PNG/ICO files:

1. **favicon.ico** (multi-size: 16x16, 32x32, 48x48)
2. **og-image.png** (1200x630) - For Google search results and social sharing
3. **apple-touch-icon.png** (180x180) - For iOS devices
4. **icon-192.png** (192x192) - For PWA
5. **icon-512.png** (512x512) - For PWA

## Option 1: Automated Generation (Recommended)

If you have Node.js installed:

```bash
# Install sharp package
npm install --save-dev sharp

# Generate all logo files
npm run generate-logos

# Generate og-image with your profile photo included
npm run generate-og-image
```

This will automatically generate all required image files, including the composite og-image with your profile photo that will appear in Google search results.

## Option 2: Online Converters

If you prefer to generate images manually:

### For favicon.ico:
1. Go to https://www.favicon-generator.org/
2. Upload `public/logo.svg`
3. Download the generated favicon.ico
4. Place it in the `public/` folder

### For og-image.png (with profile photo):
**IMPORTANT:** This image should include both your logo AND profile photo for Google search results.

**Option A - Using Design Tools:**
1. Open `public/og-image.svg` in Figma, Photoshop, or Canva
2. Import your `public/profile-photo.png`
3. Resize profile photo to ~240x240 pixels
4. Make it circular (crop to circle)
5. Position it on the right side (around x:950, y:315 in a 1200x630 canvas)
6. Add a subtle border (orange color #ff6b35)
7. Export as PNG at 1200x630 pixels
8. Save as `public/og-image.png`

**Option B - Using Online Tools:**
1. Use a tool like Canva or Figma to combine the SVG template with your photo
2. Follow the layout: ABDI logo on left, profile photo on right
3. Export as PNG (1200x630)

### For other icons:
Use the same converter and generate:
- `apple-touch-icon.png` (180x180)
- `icon-192.png` (192x192)
- `icon-512.png` (512x512)

## Option 3: Using Image Editors

You can also use tools like:
- **Adobe Illustrator** - Export SVG to PNG at required sizes
- **GIMP** - Open SVG and export as PNG
- **Inkscape** - Command line: `inkscape logo.svg --export-width=1200 --export-height=630 --export-filename=og-image.png`

## Verification

After generating the files, verify they exist in the `public/` folder:
- ✅ `favicon.ico`
- ✅ `og-image.png`
- ✅ `apple-touch-icon.png`
- ✅ `icon-192.png`
- ✅ `icon-512.png`

## Testing

1. **Test favicon**: Check browser tab - should show "ABDI ." logo
2. **Test Open Graph**: Use Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
3. **Test Twitter Card**: Use Twitter Card Validator: https://cards-dev.twitter.com/validator
4. **Test Google**: Use Google Rich Results Test: https://search.google.com/test/rich-results

## Notes

- The logo uses your brand colors: black background with orange (#ff6b35) accent
- The design matches your navigation logo: "ABDI" with an orange dot
- All metadata has been updated in `src/app/layout.tsx`
- The manifest.json file is configured for PWA support

## Current Status

✅ SVG logo files created
✅ Metadata updated in layout.tsx
✅ Manifest.json created
⏳ PNG/ICO files need to be generated (use one of the options above)


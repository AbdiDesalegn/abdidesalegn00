# Abdi Desalegn - Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, and TailwindCSS. Features a futuristic, minimalist design with dynamic animations and responsive layout.

## 🚀 Features

- **Modern Design**: Futuristic, minimalist aesthetic with monochrome theme and orange accents
- **Dynamic Background**: Animated fog-like background with subtle motion effects
- **Responsive Layout**: Optimized for both desktop and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and hover effects
- **Interactive Sections**:
  - Hero section with call-to-action buttons
  - About section with animated icons
  - Filterable projects showcase
  - Blog section with categories
  - Contact form with social media links
  - Education timeline

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: TailwindCSS with custom CSS variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
abdi-portfolio/
├── src/
│   └── app/
│       ├── globals.css          # Global styles and animations
│       ├── layout.tsx           # Root layout component
│       └── page.tsx             # Main portfolio page
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Black (#000000) for text and headers
- **Accent**: Orange (#ff6b35) for interactive elements
- **Background**: Light grey/white fog effect
- **Typography**: High-contrast black headers with clean sans-serif body text

### Animations
- Smooth scroll behavior
- Fade-in transitions on scroll
- Hover effects on interactive elements
- Dynamic fog background animation
- Parallax scrolling effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd abdi-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (Full layout with all features)
- **Tablet**: 768px - 1199px (Adapted grid layouts)
- **Mobile**: < 768px (Stacked layout, touch-friendly interactions)

## 🎯 Sections Overview

### Hero Section
- Large introduction with name and title
- Subheading describing expertise areas
- Call-to-action buttons for projects and contact
- Animated fog background

### About Section
- Personal bio and interests
- Animated skill icons (Physics, AI, Security, Development)
- Professional interests list

### Projects Section
- Filterable project grid by category
- Categories: Cybersecurity, AI & ML, Mobile, Web, Physics
- Project cards with descriptions, tech stack, and links
- Hover animations and smooth transitions

### Blog Section
- Clean blog layout with categories
- Sample blog posts with read times
- Category tags and publication dates

### Contact Section
- Contact information (email, phone, location)
- Interactive contact form
- Social media links with hover effects

### Education Section
- Timeline-style education display
- Adama Science and Technology University details
- Degree information and specialization areas

## 🔧 Customization

### Colors
Update the CSS variables in `globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #000000;
  --accent: #ff6b35;
  --fog-light: #f8f9fa;
  --fog-medium: #e9ecef;
}
```

### Content
- Update personal information in `page.tsx`
- Modify project data in the `projects` array
- Customize blog posts in the `blogPosts` array
- Update contact information and social links

### Animations
- Adjust animation durations in Framer Motion components
- Modify fog animation in `globals.css`
- Customize hover effects and transitions

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Abdi Desalegn**
- Email: abdi.desalegn@example.com
- Location: Adama, Ethiopia
- GitHub: [@abdi-desalegn](https://github.com/abdi-desalegn)
- LinkedIn: [Abdi Desalegn](https://linkedin.com/in/abdi-desalegn)

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
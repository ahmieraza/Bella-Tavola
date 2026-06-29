# 🍝 Bella Tavola - Italian Restaurant 

![Bella Tavola](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=400&fit=crop&auto=format)

A beautiful, modern, and fully responsive landing page for an Italian fine dining restaurant. Built with vanilla HTML, CSS, and JavaScript - no frameworks required!

## ✨ Features

### 🎨 **Multi-Theme Support**
- **4 Elegant Themes:**
  - Classic Gold - Warm Italian elegance (default)
  - Wine Romance - Deep burgundy & rose
  - Mediterranean - Olive green & terracotta
  - Midnight Luxury - Premium dark mode
- Theme preferences saved in localStorage
- Smooth theme transitions with CSS custom properties

### 📱 **Fully Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes (320px to 4K)
- Touch-friendly mobile navigation
- Adaptive images and layouts

### 🚀 **Performance Optimized**
- Vanilla JavaScript (no dependencies)
- Lazy loading for images
- Smooth scroll animations
- IntersectionObserver for reveal effects
- Minimal CSS and JS footprint

### ♿ **Accessibility First**
- WCAG 2.1 compliant
- Semantic HTML5 markup
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Skip-to-content link
- Focus indicators

### 🔍 **SEO Ready**
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Structured data (Schema.org JSON-LD)
- Semantic HTML structure
- Descriptive alt texts
- Optimized page titles and descriptions

## 📋 Sections

1. **Hero Section** - Stunning full-screen hero with restaurant highlights
2. **About Section** - Story, features, and image gallery
3. **Menu Section** - Tabbed menu with 4 categories (Starters, Mains, Pasta, Desserts)
4. **Gallery** - Masonry-style photo gallery with hover effects
5. **Testimonials** - Customer reviews with star ratings
6. **Reservation Form** - Interactive booking form with validation
7. **Contact & Location** - Business details with embedded map
8. **Footer** - Newsletter signup, links, and social media

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties (CSS variables), Grid, Flexbox, animations
- **JavaScript (ES6)** - Vanilla JS, no libraries
- **Google Fonts** - Playfair Display (serif) & Inter (sans-serif)
- **Unsplash API** - High-quality restaurant imagery

## 📂 Project Structure

```
bella-tavola/
│
├── index.html              # Main HTML file
├── styles.css              # All CSS styles with theme system
├── script.js               # Interactive JavaScript functionality
│
└── assets/
    └── icons/
        ├── emblem.svg              # Restaurant logo
        ├── favicon-16.png          # 16x16 favicon
        ├── favicon-32.png          # 32x32 favicon
        ├── apple-touch-icon.png    # 180x180 iOS icon
        ├── icon-192.png            # 192x192 PWA icon
        └── icon-512.png            # 512x512 PWA icon
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Optional: Local server for development

### Installation

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/yourusername/bella-tavola.git
   cd bella-tavola
   ```

2. **Open the project:**
   - Simply open `index.html` in your browser, or
   - Use a local development server:
   
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Visit** `http://localhost:8000` in your browser

That's it! No build process, no dependencies to install. 🎉

## 🎨 Customization Guide

### Change Restaurant Information

Edit `index.html` and update:
- Restaurant name in `<title>` and `.logo-text`
- Contact details in the Contact section
- Menu items in the Menu section
- Business hours in footer
- Social media links

### Modify Theme Colors

Edit the CSS variables in `styles.css`:

```css
:root, [data-theme="gold"] {
    --color-accent: #B8860B;        /* Primary brand color */
    --color-accent-dark: #8B6914;   /* Darker variant */
    --color-accent-light: #D4A437;  /* Lighter variant */
    /* ... more variables */
}
```

### Add Custom Fonts

Replace Google Fonts in `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Update CSS variables:
```css
--font-serif: 'Your Serif Font', serif;
--font-sans: 'Your Sans Font', sans-serif;
```

### Replace Images

Update image URLs in:
- Hero background (`index.html` - `.hero` section)
- About section images
- Gallery images
- All external image sources

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)
- ⚠️ IE11 (partial support, no CSS Grid)

## 🌐 Features Breakdown

### Interactive Menu System
- Tabbed navigation between menu categories
- Smooth transitions between sections
- Responsive grid layout
- Vegetarian/special dish tags

### Reservation Form
- Client-side validation
- Date picker with min-date restriction
- Email format validation
- Guest count selector (1-20)
- Time slot selection
- Success message feedback

### Theme Switcher
- Toggle button in navigation
- Dropdown with theme preview swatches
- Instant theme switching
- Persistent theme storage

### Scroll Animations
- Reveal-on-scroll effects
- Active navigation highlighting
- Sticky header with transparency
- Back-to-top button

## 🔧 Configuration

### Google Maps Integration

Replace the map embed URL in `index.html`:

```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
```

Get your embed URL from [Google Maps](https://maps.google.com/)

### Analytics (Optional)

Add Google Analytics by inserting before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 📊 Performance

- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3s
- **Cumulative Layout Shift:** < 0.1
- **Total Bundle Size:** ~50KB (minified)

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Icons designed using SVG
- Inspiration from modern restaurant websites

## 📧 Contact

For questions or support, please reach out:
- **Email:** your.email@example.com
- **Website:** https://yourwebsite.com
- **GitHub:** [@yourusername](https://github.com/yourusername)

---

<div align="center">

**[View Demo](https://your-demo-url.com)** · **[Report Bug](https://github.com/yourusername/bella-tavola/issues)** · **[Request Feature](https://github.com/yourusername/bella-tavola/issues)**

Made with ❤️ and 🍝

⭐ Star this repo if you found it helpful!

</div>

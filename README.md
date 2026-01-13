# 🎉 Happy Birthday Arkam - Video Slideshow

A beautiful, automatic photo slideshow with auto-playing music built with pure HTML, CSS, and JavaScript.

## ✨ Features

- 🎬 **Automatic Slideshow** - Photos automatically transition every 4 seconds
- 🎵 **Auto-Play Music** - Music starts automatically when page loads
- 🎨 **Beautiful Animations** - Smooth fade transitions and floating effects
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎈 **Birthday Theme** - Colorful gradient background with sparkle decorations
- 🎯 **Simple & Lightweight** - No frameworks, just pure HTML/CSS/JS

## 🚀 Getting Started

### 1. Add Your Photos

1. Create an `images` folder in the project root
2. Add 6 photos and name them:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`
   - `photo4.jpg`
   - `photo5.jpg`
   - `photo6.jpg`

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`

### 2. Add Your Music

1. Create a `music` folder in the project root
2. Add your birthday song and name it:
   - `birthday-song.mp3` (or `.wav` or `.ogg`)

**Supported formats:** `.mp3`, `.wav`, `.ogg`

### 3. Open the Page

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Slideshow and music logic
├── images/             # Add your photos here
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   └── photo6.jpg
└── music/              # Add your music here
    └── birthday-song.mp3
```

## 🎨 Customization

### Change Slide Duration

In `script.js`, change the interval time:
```javascript
setInterval(nextSlide, 4000); // 4000 = 4 seconds
```

### Change Music Volume

In `script.js`, adjust the volume (0.0 to 1.0):
```javascript
audio.volume = 0.5; // 50% volume
```

### Change Colors

Edit the gradient in `styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, ...);
```

### Change Number of Photos

1. Add/remove `<div class="slide">` elements in `index.html`
2. Update the total slides count in JavaScript if needed

## 📝 Notes

- **Browser Autoplay Policy**: Some browsers may block autoplay. If music doesn't start automatically, click the music button in the bottom-right corner.
- **Photo Aspect Ratio**: Photos are displayed in a 4:3 aspect ratio. For best results, use photos with similar dimensions.
- **File Sizes**: Optimize your photos for web (recommended: under 1MB each) for faster loading.

## 🎯 How It Works

1. **Slideshow**: JavaScript automatically cycles through photos every 4 seconds with smooth fade transitions
2. **Music**: Audio element tries to autoplay on page load. If blocked by browser, user can click the music button
3. **Animations**: CSS animations create smooth, beautiful effects throughout the page

Enjoy celebrating Arkam's special day! 🎂🎉

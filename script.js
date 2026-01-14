// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const currentSlideElement = document.getElementById('current-slide');
const totalSlidesElement = document.getElementById('total-slides');

// Music functionality
const audio = document.getElementById('birthday-music');
const musicToggle = document.getElementById('music-toggle');
let isMuted = false;
let musicStarted = false;

// Start overlay
const startOverlay = document.getElementById('start-overlay');
const startButton = document.getElementById('start-button');

// Initialize
totalSlidesElement.textContent = totalSlides;

// Auto-advance slideshow
function nextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    
    // Move to next slide
    currentSlide = (currentSlide + 1) % totalSlides;
    
    // Add active class to new slide
    slides[currentSlide].classList.add('active');
    
    // Update counter
    currentSlideElement.textContent = currentSlide + 1;
}

// Start slideshow (change slide every 4 seconds)
setInterval(nextSlide, 4000);

// Music auto-play function
function tryPlayMusic() {
    if (musicStarted || isMuted) return;
    
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                // Music started successfully
                musicStarted = true;
                musicToggle.innerHTML = '<span class="music-icon">🎵</span>';
                musicToggle.classList.remove('muted');
                console.log('Music started successfully');
            })
            .catch(error => {
                // Autoplay was prevented
                console.log('Autoplay prevented. Waiting for user interaction.');
                musicToggle.innerHTML = '<span class="music-icon">▶️</span>';
                musicToggle.style.animation = 'pulse 2s ease-in-out infinite';
            });
    }
}

// Initialize music settings
function initMusic() {
    // Set volume (60% for better experience)
    audio.volume = 0.6;
    
    // Preload audio
    audio.load();
    
    // Try to play immediately
    tryPlayMusic();
}

// Toggle music on/off
musicToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (isMuted) {
        // Unmute and play
        audio.muted = false;
        audio.play().then(() => {
            musicStarted = true;
            isMuted = false;
            musicToggle.classList.remove('muted');
            musicToggle.innerHTML = '<span class="music-icon">🎵</span>';
            musicToggle.style.animation = '';
        }).catch(() => {
            console.log('Could not play audio');
        });
    } else {
        // Mute
        audio.pause();
        audio.muted = true;
        isMuted = true;
        musicToggle.classList.add('muted');
        musicToggle.innerHTML = '<span class="music-icon">🔇</span>';
        musicToggle.style.animation = '';
    }
});

// Try to play music on multiple events
function setupMusicAutoplay() {
    // Try on page load
    initMusic();
    
    // Try on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryPlayMusic);
    } else {
        tryPlayMusic();
    }
    
    // Try on window load
    window.addEventListener('load', tryPlayMusic);
    
    // Try on any user interaction (click, touch, keypress)
    const interactionEvents = ['click', 'touchstart', 'keydown', 'mousedown'];
    let interactionHandled = false;
    
    interactionEvents.forEach(eventType => {
        document.addEventListener(eventType, () => {
            if (!interactionHandled && !musicStarted && !isMuted) {
                tryPlayMusic();
                interactionHandled = true;
            }
        }, { once: true });
    });
    
    // Also try on any click anywhere on the page
    document.addEventListener('click', () => {
        if (!musicStarted && !isMuted && audio.paused) {
            tryPlayMusic();
        }
    }, { once: true });
    
    // Try on touchstart (mobile)
    document.addEventListener('touchstart', () => {
        if (!musicStarted && !isMuted && audio.paused) {
            tryPlayMusic();
        }
    }, { once: true });
}

// Handle visibility change
document.addEventListener('visibilitychange', () => {
    if (!document.hidden && !isMuted && musicStarted) {
        // Resume when tab becomes visible
        audio.play().catch(() => {
            console.log('Could not resume audio');
        });
    }
});

// Start function - called when user clicks start button
function startCelebration() {
    // Hide overlay
    startOverlay.classList.add('hidden');
    
    // Start music immediately (user interaction allows this)
    audio.volume = 0.6;
    audio.play().then(() => {
        musicStarted = true;
        musicToggle.innerHTML = '<span class="music-icon">🎵</span>';
        musicToggle.classList.remove('muted');
        console.log('Music started!');
    }).catch(error => {
        console.log('Could not play music:', error);
        // Show play button if music fails
        musicToggle.innerHTML = '<span class="music-icon">▶️</span>';
        musicToggle.style.animation = 'pulse 2s ease-in-out infinite';
    });
    
    // Start slideshow
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }
}

// Start button click
if (startButton) {
    startButton.addEventListener('click', startCelebration);
}

// Also start on any click/touch on overlay
if (startOverlay) {
    startOverlay.addEventListener('click', (e) => {
        if (e.target === startOverlay || e.target.closest('.start-content')) {
            startCelebration();
        }
    });
    
    // Start on touch for mobile
    startOverlay.addEventListener('touchstart', startCelebration, { once: true });
}

// Initialize music autoplay (as backup)
setupMusicAutoplay();

// Smooth transitions
document.addEventListener('DOMContentLoaded', () => {
    // Don't show first slide until start is clicked
    // slides will be shown when startCelebration() is called
});


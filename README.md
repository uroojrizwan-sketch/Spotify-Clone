# 🎵 Spotify Clone – Music Player Web App

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:121212,100:1DB954&height=190&section=header&text=Spotify%20Clone&fontSize=48&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Your%20Music%2C%20Your%20Way&descAlignY=60&descSize=18" width="100%" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
</p>

<p align="center">
  A Spotify-inspired music player built using HTML, CSS, and Vanilla JavaScript.
</p>

<p align="center">
  <a href="https://github.com/uroojrizwan-sketch/Spotify-Clone"><strong>📂 GitHub Repository</strong></a>
</p>

---

## 📌 About The Project

**Spotify Clone** is a browser-based music player inspired by Spotify's web interface.

The application allows users to select a local music folder, load audio files, view available songs, and play music directly in the browser.

It also provides playback controls, song searching, volume adjustment, and a progress bar for controlling audio playback.

I developed this project using HTML, CSS, and Vanilla JavaScript to practice DOM manipulation, JavaScript events, audio handling, file input, and working with audio metadata.

## ✨ Features

- 🎵 **Local Music Upload:** Select a local music folder to load audio files.
- ▶️ **Play & Pause:** Control music playback.
- ⏭️ **Next Track:** Move to the next song.
- ⏮️ **Previous Track:** Play the previous song.
- 🔍 **Song Search:** Search songs by their titles.
- 🖼️ **Album Artwork:** Reads embedded cover images from audio metadata when available.
- 🎤 **Song Information:** Displays song titles and artist names.
- 🎚️ **Volume Control:** Adjust the audio volume.
- ⏱️ **Progress Bar:** Track playback progress and seek to different positions.
- 🎨 **Spotify-Inspired Interface:** Dark-themed layout with green accent colors.
- 🎧 **Music Library:** Displays dynamically generated song cards.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Custom styling |
| Tailwind CSS | Utility-based styling and layout |
| Vanilla JavaScript | Music player logic and interactivity |
| HTML Audio API | Playing and controlling audio |
| jsmediatags | Reading audio metadata and embedded artwork |
| Tabler Icons | Player and interface icons |

## 🧠 Concepts I Practiced

- DOM manipulation
- JavaScript arrays and objects
- Event listeners
- Dynamic HTML element creation
- File input and file handling
- JavaScript Audio API
- `audio.play()` and `audio.pause()`
- Audio playback events
- Progress tracking with `timeupdate`
- Seeking through audio using `currentTime`
- Volume control
- Reading audio metadata
- Working with JSON-like metadata objects
- Array methods such as `filter()` and `forEach()`
- Search functionality
- Creating object URLs with `URL.createObjectURL()`
- Updating the UI dynamically

## 🎧 How To Use

1. Open the application in your browser.
2. Click the **Choose Music** button.
3. Select a folder containing your audio files.
4. The application reads the selected audio files.
5. Available songs appear in the music library.
6. Click a song card to start playing it.
7. Use the player controls to play, pause, skip, or go back.
8. Adjust the volume using the volume slider.
9. Use the progress bar to move to a different part of the song.
10. Search for a song by entering its title in the search bar.

**Note:** This application plays music selected from your own device. It does not connect to Spotify's official music catalog or provide online music streaming.

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/uroojrizwan-sketch/Spotify-Clone.git
```

### 2. Open the Project Folder

```bash
cd Spotify-Clone
```

### 3. Run the Application

Open `index.html` in your browser.

No additional package installation or build process is required.

**Requirements:**
- A modern web browser.
- Local audio files in a supported browser audio format.
- Internet connection for externally hosted libraries, icons, and Tailwind CSS CDN.

## 📂 Project Structure

```text
Spotify-Clone/
│
├── index.html
├── script.js
├── style.css
│
├── imgs/
│   └── Artist images
│
├── music/
│   └── Local music files
│
└── README.md
```

## 🌱 What I Learned

This project helped me understand how to work with audio files in JavaScript and create an interactive browser-based music player.

I practiced handling local files, reading audio metadata, controlling playback, tracking audio progress, and updating the interface dynamically.

It also improved my understanding of JavaScript event handling and how different browser APIs can be used to build practical applications.

## 🔮 Future Improvements

- Add playlist creation and management.
- Add shuffle and repeat playback modes.
- Add a recently played songs section.
- Improve song artwork fallback handling.
- Add a mobile-friendly navigation layout.
- Add song duration and current playback time.
- Improve error handling for unsupported or invalid audio files.
- Add persistent music library storage.

## 👩‍💻 Author

**Urooj Rizwan**

BS Computer Science Student | Frontend Developer

- GitHub: [@uroojrizwan-sketch](https://github.com/uroojrizwan-sketch)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/urooj-rizwan-93a158374/)

---

<p align="center">
  ⭐ If you like this project, consider giving it a star!
</p>

<p align="center">
  Made with ❤️ by Urooj Rizwan
</p>

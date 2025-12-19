# Rock Paper Scissors

> An interactive game built with vanilla HTML, CSS & JavaScript

A responsive Rock-Paper-Scissors game featuring a biased AI opponent, match-to-3 scoring, and an elegant cream-themed interface with smooth animations.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Game Rules](#-game-rules)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Configuration](#️-configuration)
- [Technology Stack](#️-technology-stack)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## 🎯 About

**Rock Paper Scissors** is a classic hand game recreated as a web application with zero dependencies. Built with vanilla JavaScript, it features an intelligent AI opponent, smooth animations, and a beautiful gradient interface that works seamlessly across all devices.

**Key Highlights:**
- 🎮 Match-to-3 scoring system with winner highlighting
- 🤖 Adjustable AI difficulty with biased opponent logic
- 🎨 Elegant cream-themed UI with gradient backgrounds
- 📱 Fully responsive design for all screen sizes
- ⚡ Zero dependencies - pure vanilla JavaScript

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏆 **Match-Based Scoring** | First to reach 3 points wins the entire match |
| 🤖 **Smart AI Opponent** | Biased computer opponent with adjustable difficulty (default 35% win rate) |
| 🎨 **Beautiful Design** | Multi-color gradient background with cream-styled panels and deep shadows |
| 📱 **Responsive Layout** | Optimized for desktop, tablet, and mobile devices |
| ✨ **Smooth Animations** | Shaking hand animations and fade/scale transitions |
| ♿ **Accessible** | ARIA labels, keyboard navigation, and semantic HTML |
| 💾 **Auto-Flow Logic** | Draws auto-advance; wins require manual continue |

## 📖 Game Rules

| Matchup | Winner |
|---------|--------|
| Rock vs Scissors | Rock wins |
| Paper vs Rock | Paper wins |
| Scissors vs Paper | Scissors wins |
| Same choice | Draw (no points) |

**How to Play:**
1. Click **START** to begin a new match
2. Choose your move: **ROCK**, **PAPER**, or **SCISSORS**
3. Computer reveals its choice simultaneously
4. Winner gets 1 point (draws award no points)
5. On win/loss: Click **CONTINUE** to proceed
6. On draw: Game auto-advances to next round
7. First to **3 points** wins the match

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server for development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/rock-paper-scissors.git
   ```

2. **Navigate to project directory**
   ```bash
   cd rock-paper-scissors
   ```

3. **Launch the application**

   **Method 1: Direct Open**
   - Double-click `index.html` to open in your browser
   
   **Method 2: Local Server (Recommended)**
   
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```
   
   Then open `http://localhost:8000` in your browser.

4. **Start playing!** 🎮

## 📁 Project Structure

```
rock-paper-scissors/
│
├── index.html          # Main application structure
├── style.css           # Complete styling and animations
├── script.js           # Game logic and AI
│
├── rock.png            # Rock hand image
├── paper.png           # Paper hand image
├── scissors.png        # Scissors hand image
│
└── README.md           # Project documentation
```

## ⚙️ Configuration

Customize game behavior in `script.js`:

```javascript
const MATCH_TARGET = 3;        // Points needed to win (3, 5, 7, etc.)
const COMPUTER_BIAS = 0.35;    // AI win probability (0-1)
```

**Settings Explained:**
- **MATCH_TARGET**: Number of rounds needed to win the match
- **COMPUTER_BIAS**: AI advantage level
  - `0` = Fair play (random choices)
  - `0.35` = Computer has 35% chance to pick winning move (default)
  - `1` = Computer always wins (testing mode)

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup with ARIA accessibility |
| **CSS3** | Flexbox layout, animations, and responsive design |
| **JavaScript (ES6+)** | Game logic, AI, and DOM manipulation |
| **Google Fonts** | Montserrat (headings) & Inter (body text) |

**Design Features:**
- Multi-color gradient background (blue → teal → yellow → orange → brown → black)
- Cream-themed panels (#fff7d9 → #f0e5c6) with layered shadows
- Smooth animations and hover effects
- Mobile-first responsive breakpoints (420px, 720px)

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

**Ideas for Contributions:**
- Add sound effects for wins/losses
- Implement tournament mode with multiple rounds
- Create different difficulty levels
- Add game statistics tracking
- Internationalization support

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/karriprathyusha)
- Project Link: [Rock Paper Scissors](https://github.com/karriprathyusha/Rock-Paper-Scissor-Web-App)

## 🌟 Show Your Support

If you enjoyed playing this game, please consider:
- ⭐ Starring this repository
- 🐛 Reporting bugs or suggesting features
- 🔀 Contributing to the codebase
- 📢 Sharing with friends

---

<div align="center">

**Made with ❤️ and Vanilla JavaScript**

*May the best hand win!*

[⬆ Back to Top](#rock-paper-scissors)

</div>

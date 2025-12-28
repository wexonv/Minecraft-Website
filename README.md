<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![License][license-shield]][license-url]
[![Website][website-shield]][website-url]

<br />
<div align="center">
  <a href="https://github.com/wexonv/Minecraft-Website">
    <img src="http://wexon.top/repo/minecraft-website-view.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Minecraft Server Status Website</h3>

  <p align="center">
    A modern, responsive website for displaying your Minecraft server status with real-time player count and quick access links.
    <br />
    <a href="https://minecraft-website-one.vercel.app/"><strong>View Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/wexonv/Minecraft-Website/issues/new?labels=bug">Report Bug</a>
    &middot;
    <a href="https://github.com/wexonv/Minecraft-Website/issues/new?labels=enhancement">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#features">Features</a></li>
    <li><a href="#quick-setup">Quick Setup</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation-steps">Installation Steps</a></li>
      </ul>
    </li>
    <li><a href="#configuration">Configuration</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#support">Support</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- FEATURES -->
## Features

- Real-time server status checking
- Live player count display
- Copy IP to clipboard with one click
- Responsive design for all devices
- 6 color themes to choose from
- SEO optimized
- Easy configuration in one file

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- QUICK SETUP -->
## Quick Setup

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- npm (comes with Node.js)

### Installation Steps

1. Clone the repository:  
   ```sh
   git clone https://github.com/wexonv/Minecraft-Website.git
   ```

   2. Navigate to the project folder:
    cd Minecraft-Website

3. Install dependencies:
    npm install

4. Configure your server by editing /src/config.ts

5. Run development server:
    npm run dev

6. Open your browser and visit:
    http://localhost:3000

### Configuration

All configuration is done in one file: /src/config.ts

#### Basic Server Setup

    server: {
      name: "YourServerName",
      ip: "yourserver.com",
      version: "1.21.4",
    }

#### Change Theme Color

    theme: {
      primaryColor: "green", // Options: green, blue, red, purple, orange, indigo
    }

### Deployment

#### Deploy to Vercel (Free & Recommended)

1. Fork this repository on GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (no configuration needed)

#### Build for Production

    npm run build
    npm start


# Minecraft Server Status Website

A modern, responsive website for displaying your Minecraft server status with real-time player count and quick access links.

![Website Preview](http://wexon.top/repo/minecraft-website-view.png)
https://minecraft-website-one.vercel.app/

## Features

- Real-time server status checking
- Live player count display
- Copy IP to clipboard with one click
- Responsive design for all devices
- 6 color themes to choose from
- SEO optimized
- Easy configuration in one file

## Quick Setup

### Prerequisites

- Node.js 18+ (Download from https://nodejs.org/)
- npm (comes with Node.js)

### Installation Steps

1. Clone the repository:
   git clone https://github.com/wexonv/Minecraft-Website.git

2. Navigate to the project folder:
   cd Minecraft-Website

3. Install dependencies:
   npm install

4. Configure your server by editing /src/config.ts

5. Run development server:
   npm run dev

6. Open your browser and visit:
   http://localhost:3000

## Configuration

All configuration is done in one file: /src/config.ts

### Basic Server Setup:

Edit the following in config.ts:
server: {
name: "YourServerName",
ip: "yourserver.com",
version: "1.21.4",
}

### Change Theme Color:

theme: {
primaryColor: "green", // Options: green, blue, red, purple, orange, indigo
}

## Deployment

### Deploy to Vercel (Free & Recommended):

1. Fork this repository on GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (no configuration needed)

### Build for Production:

npm run build<br>npm start

## Support

- Issues: Open on GitHub
- Created by: wexon.top
- Website: https://wexon.top

## License

Apache License 2.0 - You are free to use, modify, and distribute this project under the terms of the Apache License 2.0. See [LICENSE](LICENSE) for full details.

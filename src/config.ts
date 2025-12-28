/**
 * Minecraft Server Status Dashboard Configuration
 * Complete setup guide for your own Minecraft server
 *
 * HOW TO SETUP FOR YOUR SERVER:
 * 1. Change all values marked with "CHANGE THIS" comments
 * 2. Replace "Example.org" with your server domain
 * 3. Update all links to point to your services
 * 4. Customize colors and theme as needed
 *
 * Created by: wexon.top
 * GitHub: https://github.com/wexonv/Minecraft-Website
 */

export const config = {
  /**
   * SERVER BASIC CONFIGURATION
   * These are the most important settings for your server
   */
  server: {
    // CHANGE THIS: Your server name (displayed in title and header)
    name: "KrainaMC.pl",
    // CHANGE THIS: Short description of your server
    description: "Official Minecraft Server",
    // CHANGE THIS: Your server IP address (without port if default 25565)
    ip: "krainamc.pl",
    // CHANGE THIS: Your Minecraft server version
    version: "1.21.4",
    // Maximum players shown when server is offline
    defaultMaxPlayers: 100,
  },

  /**
   * FAVICON CONFIGURATION
   * Replace these URLs with your own favicon files
   */
  favicon: {
    // CHANGE THIS: URL to your favicon.ico file
    ico: "https://wexon.top/favicon.webp",
    // CHANGE THIS: URL to your 32x32 favicon
    png32: "https://wexon.top/favicon.webp",
    // CHANGE THIS: URL to your 16x16 favicon
    png16: "https://wexon.top/favicon.webp",
    // CHANGE THIS: URL to your Apple touch icon (180x180)
    appleTouch: "https://wexon.top/apple-touch-icon.png",
    // CHANGE THIS: URL to your webmanifest file
    webmanifest: "https://wexon.top/site.webmanifest",
  },

  /**
   * EXTERNAL LINKS
   * Replace with your actual server links
   */
  links: {
    // CHANGE THIS: Your server map/dynmap URL
    map: "https://wexon.top/map",
    // CHANGE THIS: Your Discord server invite link
    discord: "https://wexon.top/discord",
    // CHANGE THIS: Your main website URL
    website: "https://wexon.top",
  },

  /**
   * THEME & COLORS
   * Customize the appearance of your dashboard
   */
  theme: {
    // CHANGE THIS: Primary color theme (green, blue, red, purple, orange, indigo)
    primaryColor: "purple",

    // Color schemes for different themes
    colors: {
      green: {
        primary: "#10B981",
        hover: "#059669",
        light: "#10B98120",
        button: "#10B981",
        buttonHover: "#059669",
        themeColor: "#64bc73ff",
      },
      blue: {
        primary: "#3B82F6",
        hover: "#2563EB",
        light: "#3B82F620",
        button: "#3B82F6",
        buttonHover: "#2563EB",
        themeColor: "#3B82F6",
      },
      red: {
        primary: "#EF4444",
        hover: "#DC2626",
        light: "#EF444420",
        button: "#EF4444",
        buttonHover: "#DC2626",
        themeColor: "#EF4444",
      },
      purple: {
        primary: "#8B5CF6",
        hover: "#7C3AED",
        light: "#8B5CF620",
        button: "#8B5CF6",
        buttonHover: "#7C3AED",
        themeColor: "#8B5CF6",
      },
      orange: {
        primary: "#F97316",
        hover: "#EA580C",
        light: "#F9731620",
        button: "#F97316",
        buttonHover: "#EA580C",
        themeColor: "#F97316",
      },
      indigo: {
        primary: "#6366F1",
        hover: "#4F46E5",
        light: "#6366F120",
        button: "#6366F1",
        buttonHover: "#4F46E5",
        themeColor: "#6366F1",
      },
    },
  },

  /**
   * SEO & META CONFIGURATION
   * Important for search engines and social media sharing
   */
  seo: {
    // CHANGE THIS: Your page title (shown in browser tab)
    title: "Example.org | Official Minecraft Server",
    // CHANGE THIS: Description for search engines
    description: "Join our Minecraft BedWars server",
    // CHANGE THIS: Keywords for SEO
    keywords: ["minecraft server", "bedwars", "survival"],
    // CHANGE THIS: Open Graph image URL (1200x630 recommended)
    ogImage: "https://(your-domain)/og-image.jpg",
    // Language/locale for the page
    locale: "en_US",
  },

  /**
   * API CONFIGURATION
   * Server status API - usually no need to change
   */
  api: {
    // API endpoint for checking server status
    serverStatus: "https://api.mcsrvstat.us/2/",
  },

  /**
   * REFRESH SETTINGS
   * Control how often data is updated
   */
  refresh: {
    // How often to check server status (in milliseconds)
    statusInterval: 30000, // 30 seconds
    // How long to show "Copied!" message (in milliseconds)
    copyTimeout: 1200, // 1.2 seconds
  },

  /**
   * UI TEXT & TRANSLATIONS
   * Customize all text shown on the dashboard
   */
  ui: {
    copySuccess: "Copied!",
    serverAddress: "SERVER ADDRESS",
    joinGame: "Join Game",
    serverOffline: "Offline",
    checkingStatus: "Checking status...",
    serverMap: "Server Map",
    refreshStatus: "Refresh status",
    loading: "Loading...",
    online: "Online",
    version: "Version",
    status: "Status",
    madeBy: "Made by",
    players: "Players",
  },
} as const;

/**
 * Helper function to get current theme colors
 * Based on primaryColor setting
 */
export const getThemeColors = () => {
  const color = config.theme.primaryColor;
  return config.theme.colors[color] || config.theme.colors.green;
};

/**
 * Helper function to get theme color for meta tags
 * Used in layout.tsx for theme-color meta tag
 */
export const getThemeColor = () => {
  return getThemeColors().themeColor;
};

/**
 * Created by: wexon.top
 * Support: wexon.top/contact
 * GitHub Repository: https://github.com/wexonv/Minecraft-Website
 */
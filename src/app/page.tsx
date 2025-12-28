"use client";

import { useState, useEffect } from "react";
import {
  FiCopy,
  FiPlay,
  FiExternalLink,
  FiRefreshCw,
  FiMap,
  FiMessageSquare,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { config, getThemeColors } from "@/config";

type ServerStatus = {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
  version?: string;
  ping?: number;
  hostname?: string;
  error?: string;
};

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);
  const themeColors = getThemeColors();

  const fetchServerStatus = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${config.api.serverStatus}${config.server.ip}`
      );
      const data = await response.json();

      if (data.online) {
        setServerStatus({
          online: true,
          players: {
            online: data.players.online,
            max: data.players.max,
          },
          version: data.version,
          ping: data.ping,
          hostname: data.hostname,
        });
      } else {
        setServerStatus({
          online: false,
          hostname: data.hostname,
          error: data.debug?.error?.ping || "Server is offline",
        });
      }
    } catch (err) {
      setServerStatus({
        online: false,
        error: "Cannot connect to API",
      });
      console.error("Error fetching server status:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServerStatus();
    const interval = setInterval(
      fetchServerStatus,
      config.refresh.statusInterval
    );
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(config.server.ip);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), config.refresh.copyTimeout);
  };

  const handlePlayClick = () => {
    copyToClipboard();
  };

  const openMap = () => {
    window.open(config.links.map, "_blank", "noopener,noreferrer");
  };

  const openDiscord = () => {
    window.open(config.links.discord, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col">
      <Head>
        <title>{config.seo.title}</title>
        <meta name="description" content={config.seo.description} />
      </Head>

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-white mb-2">
              {config.server.name}
            </h1>
            <p className="text-gray-400 text-sm">{config.server.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="group relative"
          >
            <div
              onClick={copyToClipboard}
              className="p-5 bg-gray-900 border border-gray-800 rounded-xl hover:border-green-500/30 transition-colors cursor-pointer"
              style={
                {
                  borderColor: serverStatus?.online
                    ? `${themeColors.primary}30`
                    : undefined,
                  "--hover-border-color": `${themeColors.primary}30`,
                } as React.CSSProperties
              }
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    {config.ui.serverAddress}
                  </p>
                  <h2 className="text-2xl font-medium text-white">
                    {config.server.ip}
                  </h2>
                </div>
                <div
                  className="p-2 bg-gray-800 rounded-lg transition-colors"
                  style={{
                    backgroundColor: serverStatus?.online
                      ? `${themeColors.primary}10`
                      : undefined,
                  }}
                >
                  <FiCopy
                    className="text-gray-400 transition-colors"
                    style={{
                      color: serverStatus?.online
                        ? themeColors.primary
                        : undefined,
                    }}
                  />
                </div>
              </div>
            </div>

            <AnimatePresence>
              {isCopied && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -top-9 right-0 text-white text-xs px-2 py-1 rounded"
                  style={{ backgroundColor: themeColors.primary }}
                >
                  {config.ui.copySuccess}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handlePlayClick}
            disabled={!serverStatus?.online || isLoading}
            className={`w-full flex items-center justify-center gap-2 text-white font-medium py-3.5 px-6 rounded-xl transition-colors duration-300 ${
              serverStatus?.online && !isLoading
                ? ""
                : "bg-gray-700 cursor-not-allowed"
            }`}
            style={{
              backgroundColor:
                serverStatus?.online && !isLoading
                  ? themeColors.button
                  : undefined,
            }}
            onMouseEnter={(e) => {
              if (serverStatus?.online && !isLoading) {
                e.currentTarget.style.backgroundColor = themeColors.buttonHover;
              }
            }}
            onMouseLeave={(e) => {
              if (serverStatus?.online && !isLoading) {
                e.currentTarget.style.backgroundColor = themeColors.button;
              }
            }}
          >
            <FiPlay className="text-lg" />
            <span>
              {isLoading
                ? config.ui.checkingStatus
                : serverStatus?.online
                ? config.ui.joinGame
                : config.ui.serverOffline}
            </span>
            <FiExternalLink className="ml-auto text-sm opacity-70" />
          </motion.button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={openMap}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-300"
            >
              <FiMap className="text-lg" />
              <span>{config.ui.serverMap}</span>
              <FiExternalLink className="ml-auto text-sm opacity-70" />
            </button>

            <button
              onClick={openDiscord}
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-300"
            >
              <FiMessageSquare className="text-lg" />
              <span>Discord</span>
              <FiExternalLink className="ml-auto text-sm opacity-70" />
            </button>
          </div>

          <div className="relative flex items-center py-4">
            <div className="flex-grow border-t border-gray-800"></div>
            <span className="flex-shrink mx-4 text-gray-600 text-sm">
              {config.server.name}
            </span>
            <div className="flex-grow border-t border-gray-800"></div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-800">
              <p className="text-sm" style={{ color: themeColors.primary }}>
                {config.ui.players}
              </p>
              {isLoading ? (
                <FiRefreshCw className="animate-spin mx-auto text-white mt-1" />
              ) : serverStatus?.online ? (
                <p className="text-white font-medium">
                  {serverStatus.players?.online || 0}/
                  {serverStatus.players?.max || config.server.defaultMaxPlayers}
                </p>
              ) : (
                <p className="text-white font-medium">0</p>
              )}
            </div>
            <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-800">
              <p className="text-sm" style={{ color: themeColors.primary }}>
                {config.ui.version}
              </p>
              {isLoading ? (
                <FiRefreshCw className="animate-spin mx-auto text-white mt-1" />
              ) : serverStatus?.online ? (
                <p className="text-white font-medium">
                  {serverStatus.version || config.server.version}
                </p>
              ) : (
                <p className="text-white font-medium">
                  {config.server.version}
                </p>
              )}
            </div>
            <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-800">
              <p className="text-sm" style={{ color: themeColors.primary }}>
                {config.ui.status}
              </p>
              {isLoading ? (
                <FiRefreshCw className="animate-spin mx-auto text-white mt-1" />
              ) : serverStatus?.online ? (
                <p className="text-white font-medium">{config.ui.online}</p>
              ) : (
                <p className="text-white font-medium">
                  {config.ui.serverOffline}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={fetchServerStatus}
            disabled={isLoading}
            className="flex items-center justify-center gap-2 text-gray-400 text-sm transition-colors mx-auto hover:opacity-80"
            style={{ color: isLoading ? undefined : themeColors.primary }}
          >
            <FiRefreshCw className={`${isLoading ? "animate-spin" : ""}`} />
            <span>
              {isLoading ? config.ui.loading : config.ui.refreshStatus}
            </span>
          </button>
        </div>
      </main>

      <footer className="py-6 text-center border-t border-gray-800/50">
        <p className="text-xs text-gray-600">
          Made by{" "}
          <a
            href="https://wexon.top"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
            style={
              { "--hover-color": themeColors.primary } as React.CSSProperties
            }
          >
            wexon.top, {new Date().getFullYear()} ©
          </a>
        </p>
      </footer>
    </div>
  );
}

// WRITED BY WWW.WEXON.TOP
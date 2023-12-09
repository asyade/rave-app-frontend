module.exports = {
  name: "Rave",
  slug: "RaveApp",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/logo.png",
  userInterfaceStyle: "light",
  splash: {
    "image": "./assets/splash.png",
    "backgroundColor": "#151414"
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#151414"
    },
    package: "com.rave.app"
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  plugins: [
    [
      "react-native-auth0",
      {
        "domain": process.env.EXPO_PUBLIC_AUTH0_DOMAIN
      }
    ]
  ]
};
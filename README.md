# Rave Mobile App Template

A React Native mobile application template built with Expo framework, designed to work seamlessly with this [Rust Backend Template](https://github.com/asyade/rust-backend-template-graphql-sqlx-openid).

## Features

- 🔐 Auth0 Authentication integration
- 📱 Cross-platform (iOS & Android) support
- 🎨 Atomic design system
- 🌐 GraphQL integration with Apollo Client
- 📸 Image picker and media handling
- 📱 Basic UI components/usecases

## Tech Stack

- [Expo](https://expo.dev/) - React Native development framework
- [React Native](https://reactnative.dev/) - Mobile app framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Apollo Client](https://www.apollographql.com/docs/react/) - GraphQL client
- [Auth0](https://auth0.com/) - Authentication provider

## Prerequisites

- Node.js (v14 or higher)
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd raveapp
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your configuration:
```
EXPO_PUBLIC_AUTH0_DOMAIN=your-auth0-domain
EXPO_PUBLIC_AUTH0_CLIENT_ID=your-auth0-client-id
EXPO_PUBLIC_API_URL=your-backend-api-url
```

## Project Structure

```
raveapp/
├── App.tsx                # Main application entry point
├── components/           # Reusable UI components
│   ├── atomes/          # Basic UI elements
│   ├── cells/           # Composite components
│   ├── molecules/       # Complex components
│   ├── pages/           # Screen components
│   └── templates/       # Layout templates
├── services/            # API and service integrations
├── assets/              # Images, fonts, and other static files
└── android/             # Android-specific configurations
```


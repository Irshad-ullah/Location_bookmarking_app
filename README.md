# Favorite Places App

A React Native mobile app built with Expo that allows users to save, view, and manage their favorite places.

## Features

- Add new places with location details
- View all saved places
- Interactive map view
- Location picking and image capture functionality
- Persistent storage of place data

## Project Structure

```
├── App.js              # Main app entry point with navigation setup
├── screens/            # App screens (AllPlaces, AddPlace, Map)
├── components/         # Reusable UI components
│   ├── places/        # Place-specific components
│   └── ui/            # Common UI components
├── constants/         # App constants (colors, etc.)
├── models/            # Data models
└── assets/            # Images and other assets
```

## Navigation

- **All Places**: Home screen displaying all saved places
- **Add Place**: Form to add new places with location and image
- **Map**: Interactive map view of places

## Getting Started

### Prerequisites

- Node.js and npm installed
- Expo CLI installed globally

### Installation

```bash
npm install
```

### Running the App

```bash
expo start
```

Then scan the QR code with your device using the Expo Go app, or press `a` for Android or `i` for iOS emulator.

## Technology Stack

### Core Framework

- **React Native** - Cross-platform mobile app development framework for iOS and Android
- **Expo** - Development platform and managed service for React Native apps

### Navigation

- **React Navigation** - Routing and navigation library for React Native
- **Native Stack Navigator** - Stack-based navigation for native feel and performance

### Features

- **Expo Status Bar** - Status bar management
- **Location Services** - GPS and location picking functionality
- **Image Picker** - Camera and gallery image selection
- **Maps Integration** - Interactive map view for place visualization

### Requirements

- Node.js 14.x or higher
- npm 6.x or higher
- Expo CLI

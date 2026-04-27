# 🌤️ Weather Dashboard

A beautiful, fully-featured weather dashboard that displays real-time weather information and forecasts for any location in the world.

## ✨ Features

- **Real-time Weather** - Get current weather conditions for any city
- **5-Day Forecast** - See upcoming weather predictions
- **Geolocation** - Automatic weather detection based on your location
- **Smart Search** - Search any city in the world
- **Saved Cities** - Quick access to recently searched cities
- **Detailed Information** - Humidity, wind speed, pressure, visibility
- **Beautiful UI** - Modern gradient design with smooth animations
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **No Dependencies** - Pure HTML, CSS, and JavaScript

## 🚀 Getting Started

### 1. Get Your Free API Key

1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Sign up for a free account
3. Go to your API keys section
4. Copy your API key

### 2. Add API Key to Project

Open `weather-script.js` and replace:
```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

With your actual API key:
```javascript
const API_KEY = 'your_actual_api_key_here';
```

### 3. Open the Dashboard

Simply open `weather.html` in your web browser and start exploring!

## 📊 What You'll See

### Current Weather Card
- City name and country
- Current temperature
- Weather description (Sunny, Rainy, etc.)
- "Feels like" temperature
- Humidity percentage
- Wind speed
- Atmospheric pressure
- Visibility distance
- Last update timestamp

### 5-Day Forecast
- Daily weather predictions
- Temperature range
- Weather conditions with icons
- Easy-to-read card layout

### Saved Cities
- Quick access to recently searched locations
- One-click weather lookup
- Stored locally in your browser

## 🎮 How to Use

1. **Search by City Name**
   - Type a city name in the search box
   - Click "Search" or press Enter
   - Weather data loads instantly

2. **Use Your Location**
   - Click "📍 Use My Location" button
   - Grant location permission when prompted
   - Your local weather displays automatically

3. **Quick City Access**
   - Click any saved city button
   - Weather updates instantly
   - Up to 10 recent cities saved

## 🎨 Design Features

- **Gradient Background** - Modern purple-to-pink gradient
- **Smooth Animations** - Cards and buttons animate on interaction
- **Weather Icons** - Official OpenWeatherMap weather icons
- **Loading Spinner** - Friendly loading feedback
- **Error Handling** - Clear error messages for invalid searches
- **Mobile Optimized** - Perfect mobile experience

## 📱 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🔒 Privacy

- Data is fetched from OpenWeatherMap API
- Your location data is only used to fetch weather (not stored)
- Saved cities are stored locally in your browser only
- No data is sent to third parties

## 🐛 Troubleshooting

**"API key not set" error?**
- Make sure you've added your API key to `weather-script.js`
- Restart your browser after adding the key

**"City not found" error?**
- Try spelling the city name correctly
- Use English city names for best results

**Geolocation not working?**
- Check your browser's location permissions
- Some older browsers may not support geolocation
- Try using the search function instead

## 📝 API Credits

Weather data provided by [OpenWeatherMap API](https://openweathermap.org/)
- Free tier: 60 calls/minute
- Perfect for personal and small projects

## 📄 License

Free to use and modify for personal projects.

---

Enjoy your weather dashboard! 🌦️☀️🌧️

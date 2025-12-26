# Hobbies Section Setup

## 🎯 Overview
Your portfolio now features a beautiful "LIFE BEYOND WORK" section showcasing your hobbies: **Reading** and **Dancing**!

## 📁 Folder Structure
```
my-portfolio/
├── public/
│   ├── hobbies/           ← Add your media here
│   │   ├── reading.jpg    ← Your reading photo
│   │   ├── dancing.mp4    ← Your dancing video
│   │   └── README.md      
│   └── profile-photo.jpg
└── src/
    └── App.js
```

## 📸 Adding Your Media

### Reading Photo
1. Choose a great photo of you reading, with books, or in a library
2. Name it: `reading.jpg`
3. Place it in: `public/hobbies/`
4. Specs:
   - Format: JPG or PNG
   - Size: Minimum 1200x800px
   - Max file size: 2MB

### Dancing Video
1. Choose a fun video clip of you dancing
2. Name it: `dancing.mp4`
3. Place it in: `public/hobbies/`
4. Specs:
   - Format: MP4 (H.264 codec recommended)
   - Duration: 10-30 seconds ideal
   - Resolution: 720p or 1080p
   - Max file size: 10MB

## 📚 Current Reading Recommendations
Your section includes these book recommendations:
1. **Thinking, Fast and Slow** by Daniel Kahneman
2. **The Design of Everyday Things** by Don Norman
3. **Atomic Habits** by James Clear
4. **The Mom Test** by Rob Fitzpatrick

## 💃 Current Dancing Recommendations
Your section includes these resources:
1. **1MILLION Dance Studio** - YouTube Channel
2. **Steezy Studio** - Online Platform
3. **Dance Church** - Community Experience

## ✏️ Customizing Recommendations

To update recommendations, edit `src/App.js` around line 20-40:

```javascript
recommendations: [
  { 
    title: "Your Book/Resource Title", 
    author: "Author Name", 
    type: "Book/Channel/Platform", 
    reason: "Why you love it" 
  },
  // Add more...
]
```

## 🎨 Features

### Reading Section
- ✅ Large photo showcase
- ✅ Numbered book recommendations
- ✅ Personal notes on why you recommend each
- ✅ Hover effects and animations
- ✅ Alternating layout (photo on left)

### Dancing Section  
- ✅ Video player with controls
- ✅ Dance resource recommendations
- ✅ Platform and channel suggestions
- ✅ Alternating layout (video on right)

## 💡 Pro Tips

### For Photos:
- **Authentic moments** work best
- **Good lighting** is crucial
- **Show personality** - smile, be natural
- **Context matters** - books/environment visible

### For Videos:
- **Short clips** are more engaging
- **Good audio** if there's music
- **Stable footage** - avoid shaky video
- **Show movement** - dynamic shots work better
- **Edit if needed** - trim to best 15-20 seconds

### For Recommendations:
- **Be specific** about why you love it
- **Mix types** - books, channels, platforms, experiences
- **Keep it personal** - your genuine thoughts resonate
- **Update regularly** - as you discover new favorites

## 🔄 Adding More Hobbies

To add a third hobby (e.g., Travel, Cooking), update the `hobbies` array in `src/App.js`:

```javascript
{
  id: 3,
  name: "Your Hobby",
  icon: "🎯", // Choose an emoji
  description: "Brief description of your hobby",
  mediaType: "photo", // or "video"
  mediaUrl: "/hobbies/your-hobby.jpg",
  recommendations: [
    // Your recommendations
  ]
}
```

## 🌟 Design Features

- **Alternating layouts** - Left/right for visual interest
- **Gradient effects** - Glowing hover states
- **Responsive design** - Works on all devices
- **Clean typography** - Easy to read
- **Interactive cards** - Hover effects on recommendations
- **Video controls** - Play, pause, volume

Your hobbies section adds personality and authenticity to your portfolio! 🚀

## 📝 Next Steps

1. ✅ Add your reading photo to `public/hobbies/reading.jpg`
2. ✅ Add your dancing video to `public/hobbies/dancing.mp4`
3. ✅ Update recommendations if you want to change any
4. ✅ Test the section on your portfolio

Everything will automatically update once you add your media files!



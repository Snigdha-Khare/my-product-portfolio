# Photo Gallery Setup Instructions

## 📸 How to Add Your Photos

### Step 1: Create Gallery Folder
Create a folder called `gallery` inside the `public` folder:
```
public/
  └── gallery/
      ├── photo1.jpg
      ├── photo2.jpg
      ├── photo3.jpg
      ├── photo4.jpg
      ├── photo5.jpg
      ├── photo6.jpg
      ├── photo7.jpg
      └── photo8.jpg
```

### Step 2: Add Your Photos
1. Save your photos with names like `photo1.jpg`, `photo2.jpg`, etc.
2. Move them to the `public/gallery/` folder
3. You can add as many photos as you want!

### Step 3: Update the Code (Optional)
If you want to add more than 8 photos, update `src/App.js` around line 18:

```javascript
const galleryPhotos = [
  "/gallery/photo1.jpg",
  "/gallery/photo2.jpg",
  "/gallery/photo3.jpg",
  "/gallery/photo4.jpg",
  "/gallery/photo5.jpg",
  "/gallery/photo6.jpg",
  "/gallery/photo7.jpg",
  "/gallery/photo8.jpg",
  "/gallery/photo9.jpg",  // Add more as needed
  "/gallery/photo10.jpg",
  // ... add more photos
];
```

## 🎨 Photo Recommendations

### Ideal Specifications:
- **Aspect Ratio**: 2:3 (portrait) or 4:5 works best
- **Dimensions**: Minimum 800x1200px
- **Format**: JPG or PNG
- **File Size**: Keep under 2MB each for faster loading

### Photo Ideas:
- Speaking at conferences/events
- Team meetings/celebrations
- Product launches
- Office culture moments
- Casual work environment
- Awards/recognition
- Traveling for work
- Hobbies and interests
- Community involvement
- Personal moments

## ⚡ Gallery Features

- **Auto-scrolling**: Photos scroll automatically from right to left
- **Infinite loop**: Seamlessly loops through all photos
- **Pause on hover**: Hover over photos to pause the animation
- **Responsive**: Works great on all screen sizes
- **Smooth animations**: Professional transitions and effects

## 🔄 To Change Animation Speed

In `src/App.js`, find this line (around line 798):
```javascript
animation: scroll-infinite 40s linear infinite;
```

Change `40s` to:
- `30s` for faster scrolling
- `50s` for slower scrolling

## 📝 Example Folder Structure

```
my-portfolio/
├── public/
│   ├── gallery/
│   │   ├── photo1.jpg (Conference talk)
│   │   ├── photo2.jpg (Team photo)
│   │   ├── photo3.jpg (Product launch)
│   │   ├── photo4.jpg (Office moment)
│   │   ├── photo5.jpg (Award ceremony)
│   │   ├── photo6.jpg (Hackathon)
│   │   ├── photo7.jpg (Travel)
│   │   └── photo8.jpg (Hobby)
│   ├── profile-photo.jpg
│   └── favicon.ico
└── src/
    └── App.js
```

## 🎯 Pro Tips

1. **Variety**: Mix professional and personal photos
2. **Quality**: Use high-resolution, well-lit photos
3. **Story**: Choose photos that tell your story
4. **Consistency**: Try to maintain similar editing style/colors
5. **Privacy**: Only include photos you're comfortable sharing publicly

Your photo gallery will automatically appear in the "LIFE BEYOND WORK" section! 🚀



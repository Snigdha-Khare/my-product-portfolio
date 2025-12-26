# Instagram Posts Setup for Dancing Section

## 🎯 Overview
Your dancing section now displays your Instagram posts that can be viewed and played directly on your portfolio!

## 📱 How to Add Your Instagram Posts

### Step 1: Get Your Post URLs
1. Open Instagram on your phone or web browser
2. Go to your dancing posts
3. Click on a post to open it
4. Click the three dots (•••) menu
5. Select "Copy Link"
6. You'll get a URL like: `https://www.instagram.com/p/ABC123xyz/`

### Step 2: Add URLs to Your Portfolio
Open `src/App.js` and find the dancing hobby section (around line 30):

```javascript
{
  id: 2,
  name: "Dancing",
  icon: "💃",
  description: "Expressing creativity through movement and rhythm",
  mediaType: "instagram",
  hasRecommendations: false,
  instagramPosts: [
    "https://www.instagram.com/p/YOUR_POST_ID_1/",  // Replace with your actual post URLs
    "https://www.instagram.com/p/YOUR_POST_ID_2/",
    "https://www.instagram.com/p/YOUR_POST_ID_3/",
    "https://www.instagram.com/p/YOUR_POST_ID_4/",
  ]
}
```

### Step 3: Replace with Your Real URLs
Replace the placeholder URLs with your actual Instagram post links:

```javascript
instagramPosts: [
  "https://www.instagram.com/p/C123abc456/",
  "https://www.instagram.com/p/C789def012/",
  "https://www.instagram.com/p/C345ghi678/",
  "https://www.instagram.com/p/C901jkl234/",
]
```

## 🎨 What You'll Get

### Instagram Post Grid
- **4 Instagram posts** displayed in a 2x2 grid
- **Embedded players** - Videos play directly on your site
- **"View on Instagram"** link on each post
- **Responsive design** - Looks great on all devices

### Follow Button
- Large "Follow @_sniggysideup_" button
- Links directly to your Instagram profile
- Gradient pink-purple styling
- Hover effects for engagement

## 💡 Best Practices

### Choosing Posts
- ✅ **Best dance performances** - Show your skills
- ✅ **Variety** - Different styles/moods
- ✅ **High quality** - Good lighting and filming
- ✅ **Engaging** - Posts that represent you well
- ❌ Avoid private or restricted posts

### Post Types
- ✅ **Reels** - Work perfectly (recommended!)
- ✅ **Videos** - Play in embedded player
- ✅ **Photos** - Display as static images
- ⚠️ **Carousels** - First image/video shows

### Number of Posts
- **Current**: 4 posts (2x2 grid)
- **Flexible**: You can add more or fewer

To add more posts:
```javascript
instagramPosts: [
  "https://www.instagram.com/p/POST_1/",
  "https://www.instagram.com/p/POST_2/",
  "https://www.instagram.com/p/POST_3/",
  "https://www.instagram.com/p/POST_4/",
  "https://www.instagram.com/p/POST_5/",  // Add as many as you want!
  "https://www.instagram.com/p/POST_6/",
]
```

## 🔍 Finding Your Best Dance Posts

### Method 1: Instagram Insights
1. Go to your profile
2. Check which dance posts have:
   - Most views
   - Most engagement
   - Best comments

### Method 2: Ask Friends
- Which posts do people comment on most?
- Which ones got shared?
- Which best represent your style?

### Method 3: Personal Favorites
- Which performances are you most proud of?
- Which show your progression?
- Which capture different dance styles?

## 🎯 Example Setup

Here's what a complete setup might look like:

```javascript
instagramPosts: [
  "https://www.instagram.com/reel/C5abc123xyz/",  // Contemporary piece
  "https://www.instagram.com/reel/C6def456abc/",  // Hip hop routine
  "https://www.instagram.com/p/C7ghi789def/",     // Bollywood fusion
  "https://www.instagram.com/reel/C8jkl012ghi/",  // Freestyle session
]
```

## 📊 Layout Details

### Desktop View
```
┌─────────────┬─────────────┐
│   Post 1    │   Post 2    │
├─────────────┼─────────────┤
│   Post 3    │   Post 4    │
└─────────────┴─────────────┘
```

### Mobile View
```
┌─────────────┐
│   Post 1    │
├─────────────┤
│   Post 2    │
├─────────────┤
│   Post 3    │
├─────────────┤
│   Post 4    │
└─────────────┘
```

## 🚨 Troubleshooting

### Post Not Showing?
- ✅ Make sure the URL is correct
- ✅ Check if the post is public (not private)
- ✅ Verify you copied the full URL including https://
- ✅ Instagram post must exist (not deleted)

### Video Not Playing?
- Instagram embeds handle playback
- Users can click to play
- Some videos may require viewing on Instagram

### Want to Change Posts?
- Simply replace the URLs in the array
- Save the file
- Refresh your portfolio

## 🎨 Customization Options

### Change Grid Layout
In `src/App.js`, find this line:
```javascript
<div className="grid grid-cols-2 gap-4">
```

- `grid-cols-1` - Single column
- `grid-cols-2` - Two columns (current)
- `grid-cols-3` - Three columns

### Adjust Post Size
Find:
```javascript
<div className="aspect-square">
```

Change to:
- `aspect-video` - 16:9 ratio
- `aspect-[4/5]` - Instagram portrait ratio

## 🌟 Your Complete Dancing Section Will Have:

1. ✅ Large dancing emoji header
2. ✅ Your personal description
3. ✅ Grid of 4 Instagram posts (playable)
4. ✅ "View on Instagram" link on each post
5. ✅ "Follow @_sniggysideup_" button
6. ✅ Engaging call-to-action text

Everything updates automatically once you add your real Instagram post URLs! 🚀

## 📝 Quick Checklist

- [ ] Find 4 of your best dancing posts on Instagram
- [ ] Copy the URL for each post
- [ ] Open `src/App.js` in your editor
- [ ] Find the `instagramPosts` array (around line 30)
- [ ] Replace placeholder URLs with your real URLs
- [ ] Save the file
- [ ] Refresh your portfolio to see them live!

Your dancing posts will now showcase your talent directly on your portfolio! 💃✨



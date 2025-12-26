# Deployment Instructions

## GitHub Pages Setup

1. **Create a new GitHub repository:**
   - Go to GitHub and create a new repository named `snigdha-khare-portfolio`
   - Make it public for GitHub Pages to work with free account

2. **Update package.json:**
   - Replace `YOUR_GITHUB_USERNAME` in the homepage URL with your actual GitHub username

3. **Initialize Git and deploy:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Snigdha Khare Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/snigdha-khare-portfolio.git
   git push -u origin main
   npm run deploy
   ```

4. **Configure GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch" 
   - Choose `gh-pages` branch
   - Your site will be live at: `https://YOUR_GITHUB_USERNAME.github.io/snigdha-khare-portfolio`

## Free Domain Options

### 1. **Freenom** (FREE)
- Offers .tk, .ml, .ga, .cf domains for free
- Up to 12 months renewable
- Basic DNS management

### 2. **Netlify** (FREE with hosting)
- Free subdomain: yoursite.netlify.app
- Can connect custom domain
- Automatic deployments from GitHub

### 3. **Vercel** (FREE with hosting) - **RECOMMENDED**
- Free subdomain: yoursite.vercel.app  
- Excellent performance
- Easy GitHub integration
- Custom domain support

### 4. **GitHub Pages + Custom Domain**
- Buy domain from Namecheap/GoDaddy (~$10-15/year)
- Point DNS to GitHub Pages
- Professional look

## Recommended Deployment Strategy

**Option 1: Quick & Easy (Recommended)**
1. Deploy to Vercel (connects directly to your GitHub repo)
2. Get instant live URL: `snigdha-khare-portfolio.vercel.app`
3. Optionally add custom domain later

**Option 2: GitHub Pages + Free Domain**
1. Deploy to GitHub Pages (free hosting)
2. Get Freenom domain (.tk, .ml etc)
3. Point domain to GitHub Pages

## Update Personal Information

Before deploying, update these in `src/App.js`:
- LinkedIn URL (line 12)
- Instagram URL (line 13) 
- Google Drive resume link (line 14)
- Any other personal details

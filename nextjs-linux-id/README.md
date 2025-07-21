# 🐧 Terminal Style Website

A retro terminal-style website built with Next.js, featuring digital rights manifestos, an interactive art gallery with Linux `tree` structure, and a walking Tux penguin overlay.

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Art Gallery Management

The art gallery uses a Linux `tree` command structure for organizing artworks. Here's how to add and edit images:

### 📁 Adding New Images

1. **Navigate to the art page file:**
   ```
   src/app/art/page.tsx
   ```

2. **Find the `artTree` array** (around line 19)

3. **Add your image to the appropriate folder structure:**

```typescript
// Example: Adding a new portrait
{
  id: 'portrait3',                    // Unique identifier
  name: 'neon_warrior.jpg',           // Filename to display
  type: 'image',                      // Always 'image' for artworks
  path: 'digital/portraits/neon_warrior.jpg',  // Full path in tree
  thumbnail: 'https://your-image-url.com/image.jpg',  // Image URL
  description: 'Cyberpunk warrior in neon lights',    // Description
  date: '2024-07-19'                 // Creation date
}
```

### 🗂️ Folder Structure

The current structure is:
```
art/
├── digital/
│   ├── portraits/
│   └── landscapes/
├── traditional/
│   └── sketches/
└── experiments/
```

### ➕ Adding New Folders

To create a new folder category:

```typescript
{
  id: 'photography',           // Unique folder ID
  name: 'photography/',        // Display name with trailing slash
  type: 'folder',             // Always 'folder' for directories
  path: 'photography',        // Path in tree
  children: [                 // Array of images/subfolders
    {
      id: 'photo1',
      name: 'street_art.jpg',
      type: 'image',
      path: 'photography/street_art.jpg',
      thumbnail: 'https://example.com/photo.jpg',
      description: 'Urban street photography',
      date: '2024-07-19'
    }
  ]
}
```

### 🖼️ Image Requirements

- **Thumbnail URL**: Use any image hosting service (Imgur, Cloudinary, etc.)
- **Recommended size**: 400x300px for consistent display
- **Supported formats**: JPG, PNG, GIF, WebP
- **Placeholder service**: `https://placehold.co/400x300/COLOR/TEXT_COLOR?text=Your+Text`

### 📝 Editing Existing Images

1. **Find the image by its `id`** in the `artTree` array
2. **Update any property:**
   - `name`: Change filename display
   - `thumbnail`: Update image URL
   - `description`: Modify description
   - `date`: Update creation date
   - `path`: Change location in tree (also update folder if needed)

### 🗑️ Removing Images

1. **Find the image in the `artTree` array**
2. **Delete the entire object** (including all properties)
3. **Remove the comma** if it was the last item in the array

### 💡 Tips

- **Unique IDs**: Always use unique `id` values to avoid conflicts
- **Path consistency**: Make sure the `path` matches the folder structure
- **Expanded folders**: Add folder IDs to `expandedFolders` state to show them open by default
- **Image optimization**: Use compressed images for faster loading
- **Backup**: Always backup your `artTree` data before making changes

### 🎯 Example: Complete Image Addition

```typescript
// Adding to digital/landscapes/ folder
children: [
  // ... existing images ...
  {
    id: 'landscape2',
    name: 'cyber_sunset.png',
    type: 'image',
    path: 'digital/landscapes/cyber_sunset.png',
    thumbnail: 'https://placehold.co/400x300/fab387/1e1e2e?text=Cyber+Sunset',
    description: 'Synthwave sunset over digital cityscape',
    date: '2024-07-19'
  }
]
```

## 🎨 Features

- **🖥️ Terminal UI**: Authentic retro terminal styling with Catppuccin colors
- **📜 Manifestos**: Digital rights manifestos (GNU, Cypherpunk's, Guerilla Open Access)
- **🎨 Art Gallery**: Linux `tree` structure with interactive navigation
- **🐧 Tux Penguin**: Animated walking penguin overlay
- **📱 Responsive**: Mobile-friendly design
- **⌨️ Keyboard Navigation**: Terminal-style keyboard shortcuts

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: CSS with Catppuccin color palette
- **Fonts**: JetBrains Mono (monospace)
- **Icons**: Unicode emojis and ASCII art

## 📁 Project Structure

```
src/app/
├── components/
│   ├── TopBar.tsx          # Navigation header
│   └── PenguinOverlay.tsx  # Walking penguin
├── art/
│   └── page.tsx            # Art gallery with tree structure
├── manifestos/
│   └── page.tsx            # Digital rights manifestos
├── contact/
│   └── page.tsx            # Contact information
├── resources/
│   └── page.tsx            # Useful resources
├── globals.css             # Global styles
└── layout.tsx              # Root layout
```

## 🎨 Color Palette (Catppuccin)

- **Background**: `#1e1e2e` (Base)
- **Text**: `#cdd6f4` (Text)
- **Accent**: `#f38ba8` (Pink)
- **Success**: `#a6e3a1` (Green)
- **Info**: `#74c7ec` (Blue)
- **Warning**: `#fab387` (Peach)
- **Purple**: `#cba6f7` (Mauve)

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

## 🤝 Contributing

Feel free to contribute by:
- Adding new artworks to the gallery
- Improving the terminal UI
- Adding new manifestos
- Enhancing the penguin animations
- Fixing bugs or improving performance

## 📄 License

This project is open source and available under the MIT License.

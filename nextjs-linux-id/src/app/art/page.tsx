'use client';
import { useState } from 'react';
import TopBar from '../components/TopBar';

interface ArtItem {
  id: string;
  name: string;
  type: 'folder' | 'image';
  path: string;
  children?: ArtItem[];
  thumbnail?: string;
  description?: string;
  date?: string;
}

export default function ArtPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['digital', 'traditional']));

  // Art gallery structure - you can easily add new images here
  const artTree: ArtItem[] = [
    {
      id: 'digital',
      name: 'digital/',
      type: 'folder',
      path: 'digital',
      children: [
        {
          id: 'digital-portraits',
          name: 'portraits/',
          type: 'folder', 
          path: 'digital/portraits',
          children: [
            {
              id: 'portrait1',
              name: 'cyberpunk_girl.png',
              type: 'image',
              path: 'digital/portraits/cyberpunk_girl.png',
              thumbnail: 'https://placehold.co/400x300/f38ba8/1e1e2e?text=Cyberpunk+Girl',
              description: 'Digital portrait with neon aesthetics',
              date: '2024-01-15'
            },
            {
              id: 'portrait2', 
              name: 'android_dreams.jpg',
              type: 'image',
              path: 'digital/portraits/android_dreams.jpg',
              thumbnail: 'https://placehold.co/400x300/a6e3a1/1e1e2e?text=Android+Dreams',
              description: 'Sci-fi character study',
              date: '2024-02-03'
            }
          ]
        },
        {
          id: 'digital-landscapes',
          name: 'landscapes/',
          type: 'folder',
          path: 'digital/landscapes', 
          children: [
            {
              id: 'landscape1',
              name: 'neon_city.png',
              type: 'image',
              path: 'digital/landscapes/neon_city.png',
              thumbnail: 'https://placehold.co/400x300/cba6f7/1e1e2e?text=Neon+City',
              description: 'Futuristic cityscape at night',
              date: '2024-01-28'
            }
          ]
        }
      ]
    },
    {
      id: 'traditional',
      name: 'traditional/',
      type: 'folder',
      path: 'traditional',
      children: [
        {
          id: 'traditional-sketches',
          name: 'sketches/',
          type: 'folder',
          path: 'traditional/sketches',
          children: [
            {
              id: 'sketch1',
              name: 'terminal_study.jpg',
              type: 'image', 
              path: 'traditional/sketches/terminal_study.jpg',
              thumbnail: 'https://placehold.co/400x300/fab387/1e1e2e?text=Terminal+Study',
              description: 'Pencil sketch of vintage terminal',
              date: '2023-12-10'
            }
          ]
        }
      ]
    },
    {
      id: 'experiments',
      name: 'experiments/',
      type: 'folder',
      path: 'experiments',
      children: [
        {
          id: 'ascii_art',
          name: 'ascii_tux.txt',
          type: 'image',
          path: 'experiments/ascii_tux.txt',
          thumbnail: 'https://placehold.co/400x300/74c7ec/1e1e2e?text=ASCII+Tux',
          description: 'ASCII art of Linux mascot',
          date: '2024-03-01'
        }
      ]
    }
  ];

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const renderTreeItem = (item: ArtItem, level: number = 0, isLast: boolean = false, parentPrefix: string = '') => {
    const prefix = level === 0 ? '' : parentPrefix + (isLast ? '└── ' : '├── ');
    const nextPrefix = level === 0 ? '' : parentPrefix + (isLast ? '    ' : '│   ');
    
    if (item.type === 'folder') {
      const isExpanded = expandedFolders.has(item.id);
      return (
        <div key={item.id}>
          <div 
            className="tree-item folder-item"
            onClick={() => toggleFolder(item.id)}
          >
            <span className="tree-prefix">{prefix}</span>
            <span className="folder-icon">{isExpanded ? '📂' : '📁'}</span>
            <span className="item-name">{item.name}</span>
            <span className="folder-count">({item.children?.length || 0} items)</span>
          </div>
          {isExpanded && item.children && (
            <div className="tree-children">
              {item.children.map((child, index) => 
                renderTreeItem(
                  child, 
                  level + 1, 
                  index === item.children!.length - 1,
                  nextPrefix
                )
              )}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div key={item.id} className="tree-item image-item">
          <span className="tree-prefix">{prefix}</span>
          <span className="file-icon">🖼️</span>
          <span 
            className="item-name clickable"
            onClick={() => setSelectedImage(item.id)}
          >
            {item.name}
          </span>
          <span className="file-size">{item.date}</span>
        </div>
      );
    }
  };

  const getImageById = (id: string): ArtItem | null => {
    const findInTree = (items: ArtItem[]): ArtItem | null => {
      for (const item of items) {
        if (item.id === id && item.type === 'image') return item;
        if (item.children) {
          const found = findInTree(item.children);
          if (found) return found;
        }
      }
      return null;
    };
    return findInTree(artTree);
  };

  const selectedImageData = selectedImage ? getImageById(selectedImage) : null;

  return (
    <>
      <TopBar />
      <div className="art-page">
        <div className="art-ascii">
          <pre className="art-title">{`
 █████╗ ██████╗ ████████╗     ██████╗  █████╗ ██╗     ██╗     ███████╗██████╗ ██╗   ██╗
██╔══██╗██╔══██╗╚══██╔══╝    ██╔════╝ ██╔══██╗██║     ██║     ██╔════╝██╔══██╗╚██╗ ██╔╝
███████║██████╔╝   ██║       ██║  ███╗███████║██║     ██║     █████╗  ██████╔╝ ╚████╔╝ 
██╔══██║██╔══██╗   ██║       ██║   ██║██╔══██║██║     ██║     ██╔══╝  ██╔══██╗  ╚██╔╝  
██║  ██║██║  ██║   ██║       ╚██████╔╝██║  ██║███████╗███████╗███████╗██║  ██║   ██║   
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝        ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝   ╚═╝   `}</pre>
        </div>
        
        <div className="art-intro">
          <p>Digital artworks organized in a terminal-style file tree. Click folders to expand/collapse, click images to view.</p>
        </div>

        {!selectedImage ? (
          <div className="art-tree">
            <div className="tree-header">
              <pre className="tree-command">{`$ tree ~/art/`}</pre>
            </div>
            <div className="tree-structure">
              <div className="tree-root">art/</div>
              {artTree.map((item, index) => 
                renderTreeItem(item, 0, index === artTree.length - 1)
              )}
            </div>
            <div className="tree-footer">
              <pre className="tree-stats">{`
${artTree.reduce((total, folder) => {
  const countImages = (items: ArtItem[]): number => {
    return items.reduce((count, item) => {
      if (item.type === 'image') return count + 1;
      if (item.children) return count + countImages(item.children);
      return count;
    }, 0);
  };
  return total + countImages(folder.children || []);
}, 0)} files, ${artTree.length} directories`}</pre>
            </div>
          </div>
        ) : (
          <div className="image-viewer">
            <div className="viewer-header">
              <span className="viewer-path">~/art/{selectedImageData?.path}</span>
              <button 
                className="tui-button-secondary"
                onClick={() => setSelectedImage(null)}
              >
                [BACK TO TREE]
              </button>
            </div>
            {selectedImageData && (
              <div className="image-display">
                <img 
                  src={selectedImageData.thumbnail} 
                  alt={selectedImageData.name}
                  className="artwork-image"
                />
                <div className="image-info">
                  <h3>{selectedImageData.name}</h3>
                  <p className="image-description">{selectedImageData.description}</p>
                  <p className="image-date">Created: {selectedImageData.date}</p>
                  <p className="image-path">Path: {selectedImageData.path}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

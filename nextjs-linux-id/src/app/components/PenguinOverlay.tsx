'use client';
import { useState, useEffect } from 'react';

export default function PenguinOverlay() {
  const [position, setPosition] = useState({ x: -50, y: 50 });
  const [direction, setDirection] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        const newX = prev.x + (direction * 2);
        const screenWidth = window.innerWidth;
        
        // Si el pingüino sale de la pantalla, reiniciar desde el otro lado
        if (newX > screenWidth + 50) {
          return { x: -50, y: Math.random() * (window.innerHeight - 200) + 50 };
        }
        
        return { x: newX, y: prev.y };
      });
    }, 100);

    return () => clearInterval(interval);
  }, [direction]);

  // Función para pausar/reanudar el pingüino al hacer clic
  const togglePenguin = () => {
    setIsVisible(!isVisible);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="penguin-overlay"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onClick={togglePenguin}
      title="Click to hide/show Tux"
    >
      <div className="penguin-sprite">
        <pre className="penguin-ascii">{`
   ___
  (o o)
 (  V  )
/--m-m--\\`}</pre>
      </div>
    </div>
  );
}

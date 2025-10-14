import React, { useState, useEffect, useRef } from 'react';

const CursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });
  const [bubbles, setBubbles] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  const animationRef = useRef();
  const lastPosition = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);
  const lastMoveTime = useRef(0);
  const inactivityTimer = useRef(null);
  const bubblesRef = useRef([]);

  // Initialize bubbles with beautiful swirling patterns
  useEffect(() => {
    const initBubbles = () => {
      const bubbleCount = 60;
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;

      const newBubbles = Array.from({ length: bubbleCount }).map((_, i) => {
        const shapeType = Math.floor(Math.random() * 3);
        const angle = (i / bubbleCount) * Math.PI * 2;
        const distance = 50 + Math.random() * 200;
        
        return {
          id: i,
          baseX: centerX + Math.cos(angle) * distance,
          baseY: centerY + Math.sin(angle) * distance,
          size: 8 + Math.random() * 12,
          color: Math.random() > 0.5 ? 
                 `hsla(${Math.random() * 360}, 70%, 60%, ${0.1 + Math.random() * 0.2})` : 
                 `hsla(${Math.random() * 360}, 70%, 80%, ${0.1 + Math.random() * 0.2})`,
          shape: shapeType,
          offset: Math.random() * Math.PI * 2,
          speed: 0.03 + Math.random() * 0.04,
          distance: 30 + Math.random() * 70,
          currentX: centerX + Math.cos(angle) * distance,
          currentY: centerY + Math.sin(angle) * distance,
          rotation: Math.random() * 360,
          followAngle: angle,
          followDistance: distance,
          swirlFactor: 0.5 + Math.random(),
          opacity: 0.2,
          targetX: centerX + Math.cos(angle) * distance,
          targetY: centerY + Math.sin(angle) * distance
        };
      });

      setBubbles(newBubbles);
      bubblesRef.current = newBubbles;
    };

    initBubbles();

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dimensions.width, dimensions.height]);

  // Track cursor movement with velocity calculation
  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      const timeDiff = now - lastMoveTime.current;
      
      if (timeDiff > 0) {
        const newVelocity = {
          x: (e.clientX - lastPosition.current.x) / timeDiff * 1000,
          y: (e.clientY - lastPosition.current.y) / timeDiff * 1000
        };
        setVelocity(newVelocity);
      }

      setPosition({ x: e.clientX, y: e.clientY });
      lastPosition.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = now;
      
      if (!isMoving) {
        setIsMoving(true);
      }

      clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => {
        setIsMoving(false);
      }, 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(inactivityTimer.current);
    };
  }, [isMoving]);

  // Enhanced animation with smooth interpolation
  useEffect(() => {
    const animateBubbles = (timestamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      // Cap delta time to prevent large jumps
      const cappedDelta = Math.min(deltaTime, 100);
      const lerpFactor = isMoving ? 0.15 : 0.05;
      
      setBubbles(prevBubbles => 
        prevBubbles.map(bubble => {
          // Update target positions
          let targetX, targetY;
          
          if (!isMoving) {
            targetX = bubble.baseX;
            targetY = bubble.baseY;
          } else {
            const moveAngle = Math.atan2(velocity.y, velocity.x);
            const swirlOffset = Math.sin(bubble.offset + timestamp * bubble.speed) * 15 * bubble.swirlFactor;
            const targetAngle = bubble.followAngle + (timestamp * 0.001 * bubble.speed);
            targetX = position.x + Math.cos(targetAngle) * bubble.followDistance + 
                      Math.cos(moveAngle + Math.PI/2) * swirlOffset;
            targetY = position.y + Math.sin(targetAngle) * bubble.followDistance + 
                      Math.sin(moveAngle + Math.PI/2) * swirlOffset;
          }

          // Apply smooth interpolation
          const newX = bubble.currentX + (targetX - bubble.currentX) * lerpFactor;
          const newY = bubble.currentY + (targetY - bubble.currentY) * lerpFactor;
          
          // Smooth opacity transition
          const targetOpacity = isMoving ? 0.4 : 0.2;
          const newOpacity = bubble.opacity + (targetOpacity - bubble.opacity) * 0.1;
          
          return {
            ...bubble,
            currentX: newX,
            currentY: newY,
            offset: bubble.offset + bubble.speed * (cappedDelta || 16) / 16,
            rotation: bubble.rotation + (0.5 * bubble.speed * (Math.sqrt(velocity.x**2 + velocity.y**2) / 10)),
            followAngle: bubble.followAngle + bubble.speed * (cappedDelta || 16) / 100,
            opacity: newOpacity
          };
        })
      );

      animationRef.current = requestAnimationFrame(animateBubbles);
    };

    animationRef.current = requestAnimationFrame(animateBubbles);
    return () => cancelAnimationFrame(animationRef.current);
  }, [position.x, position.y, velocity.x, velocity.y, isMoving]);

  // Shape components with enhanced styling
  const Shape = React.memo(({ type, size, color, rotation, opacity }) => {
    const baseStyle = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      opacity: opacity,
      transform: `rotate(${rotation}deg)`,
      transition: 'opacity 0.3s ease, transform 0.3s ease',
      willChange: 'transform, opacity'
    };

    switch(type) {
      case 1: // Triangle
        return (
          <div style={{
            ...baseStyle,
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
            borderLeft: `${size/2}px solid transparent`,
            borderRight: `${size/2}px solid transparent`,
            borderBottom: `${size}px solid ${color}`,
          }} />
        );
      case 2: // Rectangle
        return (
          <div style={{
            ...baseStyle,
            width: `${size}px`,
            height: `${size/2}px`,
            borderRadius: `${size/8}px`,
          }} />
        );
      default: // Circle
        return <div style={{ 
          ...baseStyle, 
          borderRadius: '50%',
        }} />;
    }
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          style={{
            position: 'absolute',
            left: `${bubble.currentX}px`,
            top: `${bubble.currentY}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: Math.floor(bubble.size),
            transition: 'left 0.1s linear, top 0.1s linear',
          }}
        >
          <Shape 
            type={bubble.shape} 
            size={bubble.size} 
            color={bubble.color} 
            rotation={bubble.rotation}
            opacity={bubble.opacity}
          />
        </div>
      ))}
    </div>
  );
};

export default CursorEffect;
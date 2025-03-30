// src/components/IntroAnimation.jsx
import { useEffect, useState } from 'react';
import '../animations.css';

function IntroAnimation() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide animation after it completes
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="page-transition" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10000 }}>
      <div className="logo-animation">Le Doucen Avocats</div>
    </div>
  );
}

export default IntroAnimation;

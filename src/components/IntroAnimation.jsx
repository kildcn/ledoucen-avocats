// src/components/IntroAnimation.jsx
import { useEffect, useState } from 'react';
import Logo from './Logo';
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
    <div className="page-transition" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10000, backgroundColor: '#C8102E' }}>
      <div className="flex flex-col items-center justify-center h-full w-full px-4 text-center">
        <Logo color="white" size="large" className="mb-4" />
        <div className="logo-animation w-full text-center">LE DOUCEN AVOCATS</div>
      </div>
    </div>
  );
}

export default IntroAnimation;

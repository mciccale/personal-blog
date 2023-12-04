import { useState, useEffect } from 'react';

const useNavbarScroll = (): { visible: boolean; lastScroll: number } => {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    if (!window) return;

    const controlNavbar = () => {
      if (!window) return;
      setVisible(!(window.scrollY > 0 && window.scrollY > lastScroll));
      setLastScroll(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScroll]);

  return { visible, lastScroll };
};

export { useNavbarScroll };

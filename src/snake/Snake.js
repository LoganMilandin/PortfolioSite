import { useRef, useEffect } from 'react';


function Snake() {
    const gameFrame = useRef(null);
    useEffect(() => {
        gameFrame.current.focus();
    }, []);
  return (
    <iframe frameborder="0" width="100%" height="600px" src="https://replit.com/@Logmilly/Snake?lite=true&outputonly=true" ref={gameFrame}></iframe>
  );
}

export default Snake;

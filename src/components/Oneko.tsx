'use client';

import { useEffect } from 'react';

const Oneko = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let nekoEl: HTMLDivElement;
    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: string | null = null;
    let idleAnimationFrame = 0;
    let forceSleep = false;
    let grabbing = false;
    let grabStop = true;
    let nudge = false;
    let lastTapTimestamp = 0;
    let onekoInterval: NodeJS.Timeout;

    const nekoSpeed = 10;
    const spriteSets: Record<string, number[][]> = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
      ],
      scratchWallN: [
        [0, 0],
        [0, -1],
      ],
      scratchWallS: [
        [-7, -1],
        [-6, -2],
      ],
      scratchWallE: [
        [-2, -2],
        [-2, -3],
      ],
      scratchWallW: [
        [-4, 0],
        [-4, -1],
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, 0],
        [-2, -1],
      ],
      N: [
        [-1, -2],
        [-1, -3],
      ],
      NE: [
        [0, -2],
        [0, -3],
      ],
      E: [
        [-3, 0],
        [-3, -1],
      ],
      SE: [
        [-5, -1],
        [-5, -2],
      ],
      S: [
        [-6, -3],
        [-7, -2],
      ],
      SW: [
        [-5, -3],
        [-6, -1],
      ],
      W: [
        [-4, -2],
        [-4, -3],
      ],
      NW: [
        [-1, 0],
        [-1, -1],
      ],
    };

    function sleep() {
      forceSleep = !forceSleep;
      nudge = false;
      if (!forceSleep) {
        resetIdleAnimation();
        return;
      }

      const widget = document.querySelector('.time-widget');
      if (widget) {
        const rect = widget.getBoundingClientRect();
        mousePosX = rect.right - 32;
        mousePosY = rect.top - 12;
        return;
      }
    }

    function create() {
      nekoEl = document.createElement('div');
      nekoEl.id = 'oneko';
      nekoEl.style.width = '32px';
      nekoEl.style.height = '32px';
      nekoEl.style.position = 'fixed';
      nekoEl.style.cursor = 'grab';
      nekoEl.style.backgroundImage = `url('/oneko.gif')`;
      nekoEl.style.imageRendering = 'pixelated';
      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
      nekoEl.style.zIndex = '999';

      document.body.appendChild(nekoEl);

      window.addEventListener('mousemove', handleMove);
      window.addEventListener('touchmove', handleMove);

      window.addEventListener('resize', () => {
        if (forceSleep) {
          forceSleep = false;
          sleep();
        }
      });

      // Handle dragging of the cat
      nekoEl.addEventListener('mousedown', (e: MouseEvent) => {
        e.preventDefault();
        if (e.button !== 0) return;
        handleOnekoClick(e);
      });

      nekoEl.addEventListener('touchstart', (e: TouchEvent) => {
        e.preventDefault();

        const now = new Date().getTime();
        const timesince = now - lastTapTimestamp;
        if (timesince < 600) {
          sleep();
        }
        lastTapTimestamp = new Date().getTime();

        handleOnekoClick(e.touches[0]);
      });

      nekoEl.addEventListener('dblclick', sleep);

      nekoEl.addEventListener('contextmenu', (e: Event) => {
        e.preventDefault();
      });

      onekoInterval = setInterval(frame, 100);
    }

    function getSprite(name: string, frame: number): number[] {
      return spriteSets[name][frame % spriteSets[name].length];
    }

    function setSprite(name: string, frame: number) {
      const sprite = getSprite(name, frame);
      nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function idle() {
      idleTime += 1;

      // every ~ 20 seconds
      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation === null) {
        const availableIdleAnimations = ['sleeping', 'scratchSelf'];
        if (nekoPosX < 32) {
          availableIdleAnimations.push('scratchWallW');
        }
        if (nekoPosY < 32) {
          availableIdleAnimations.push('scratchWallN');
        }
        if (nekoPosX > window.innerWidth - 32) {
          availableIdleAnimations.push('scratchWallE');
        }
        if (nekoPosY > window.innerHeight - 32) {
          availableIdleAnimations.push('scratchWallS');
        }
        idleAnimation = availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)];
      }

      if (forceSleep) {
        idleAnimation = 'sleeping';
      }

      switch (idleAnimation) {
        case 'sleeping':
          if (idleAnimationFrame < 8 && nudge && forceSleep) {
            setSprite('idle', 0);
            break;
          } else if (nudge) {
            nudge = false;
            resetIdleAnimation();
          }
          if (idleAnimationFrame < 8) {
            setSprite('tired', 0);
            break;
          }
          setSprite('sleeping', Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192 && !forceSleep) {
            resetIdleAnimation();
          }
          break;
        case 'scratchWallN':
        case 'scratchWallS':
        case 'scratchWallE':
        case 'scratchWallW':
        case 'scratchSelf':
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) {
            resetIdleAnimation();
          }
          break;
        default:
          setSprite('idle', 0);
          return;
      }
      idleAnimationFrame += 1;
    }

    function frame() {
      frameCount += 1;

      if (grabbing) {
        if (grabStop) setSprite('alert', 0);
        return;
      }

      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      // Cat has to sleep on top of the progress bar
      if (forceSleep && Math.abs(diffY) < nekoSpeed && Math.abs(diffX) < nekoSpeed) {
        // Make the cat sleep exactly on the top of the progress bar
        nekoPosX = mousePosX;
        nekoPosY = mousePosY;
        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top = `${nekoPosY - 16}px`;

        idle();
        return;
      }

      if ((distance < nekoSpeed || distance < 48) && !forceSleep) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite('alert', 0);
        // count down after being alerted before moving
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = diffY / distance > 0.5 ? 'N' : '';
      direction += diffY / distance < -0.5 ? 'S' : '';
      direction += diffX / distance > 0.5 ? 'W' : '';
      direction += diffX / distance < -0.5 ? 'E' : '';
      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;

      nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

      nekoEl.style.left = `${nekoPosX - 16}px`;
      nekoEl.style.top = `${nekoPosY - 16}px`;
    }

    function handleMove(e: MouseEvent | TouchEvent) {
      if (forceSleep) return;

      const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
      const clientY = 'clientY' in e ? e.clientY : e.touches[0].clientY;

      mousePosX = clientX;
      mousePosY = clientY;
    }

    function handleOnekoClick(e: MouseEvent | Touch) {
      grabbing = true;
      nekoEl.style.cursor = 'grabbing';

      const startX = e.clientX;
      const startY = e.clientY;
      const startNekoX = nekoPosX;
      const startNekoY = nekoPosY;
      let grabInterval: NodeJS.Timeout;

      const mousemove = (e: MouseEvent | TouchEvent) => {
        const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
        const clientY = 'clientY' in e ? e.clientY : e.touches[0].clientY;

        const deltaX = clientX - startX;
        const deltaY = clientY - startY;
        const absDeltaX = Math.abs(deltaX);
        const absDeltaY = Math.abs(deltaY);

        // Scratch in the opposite direction of the drag
        if (absDeltaX > absDeltaY && absDeltaX > 10) {
          setSprite(deltaX > 0 ? 'scratchWallW' : 'scratchWallE', frameCount);
        } else if (absDeltaY > absDeltaX && absDeltaY > 10) {
          setSprite(deltaY > 0 ? 'scratchWallN' : 'scratchWallS', frameCount);
        }

        if (grabStop || absDeltaX > 10 || absDeltaY > 10 || Math.sqrt(deltaX ** 2 + deltaY ** 2) > 10) {
          grabStop = false;
          clearTimeout(grabInterval);
          grabInterval = setTimeout(() => {
            grabStop = true;
            nudge = false;
          }, 150);
        }

        nekoPosX = startNekoX + clientX - startX;
        nekoPosY = startNekoY + clientY - startY;
        nekoEl.style.left = `${nekoPosX - 16}px`;
        nekoEl.style.top = `${nekoPosY - 16}px`;
      };

      const mouseup = () => {
        grabbing = false;
        nudge = true;
        nekoEl.style.cursor = 'grab';

        resetIdleAnimation();
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mouseup', mouseup);
        window.removeEventListener('touchmove', mousemove);
        window.removeEventListener('touchend', mouseup);
      };

      window.addEventListener('mousemove', mousemove);
      window.addEventListener('mouseup', mouseup);
      window.addEventListener('touchmove', mousemove);
      window.addEventListener('touchend', mouseup);
    }

    // Initialize oneko
    create();

    // Cleanup function
    return () => {
      if (onekoInterval) {
        clearInterval(onekoInterval);
      }
      if (nekoEl && nekoEl.parentNode) {
        nekoEl.parentNode.removeChild(nekoEl);
      }
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return null; // This component doesn't render anything visible in React
};

export default Oneko; 
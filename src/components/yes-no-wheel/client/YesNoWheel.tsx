"use client"
import React, { useState, useRef, useEffect } from 'react';

interface WheelProps {
  size?: number;
}

const YesNoWheel: React.FC<WheelProps> = ({ size = 300 }) => {
  const [spinning, setSpinning] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [result, setResult] = useState<string | null>(null);
  const [spinCount, setSpinCount] = useState<number>(0);
  const wheelRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const spinWheel = () => {
    if (spinning) return;

    // Reset result
    setResult(null);

    // Start spinning
    setSpinning(true);

    // Generate a random number of rotations (3-6 full rotations)
    const rotations = Math.round(3 + Math.random() * 3);
    console.log("dong rotations:", rotations)
    // Generate a random additional angle (0-359 degrees)
    const extraAngle = Math.floor(Math.random() * 360);
    //const extraAngle = 0;
    console.log("dong extraAngle:", extraAngle)
    // Calculate total rotation in degrees
    const totalRotation = rotations * 360 + extraAngle;

    // Calculate the new total rotation
    const newTotalRotation = rotation + totalRotation;

    // Set the new rotation
    setRotation(newTotalRotation);

    // Determine the result after spinning
    setTimeout(() => {
      // The wheel has 2 sectors (Yes and No)
      // Each sector is 180 degrees
      // YES: top half (0-180 degrees from initial position)
      // NO: bottom half (180-360 degrees from initial position)

      // Calculate the final position (normalized to 0-360)
      // We need to be precise about the final angle
      const finalAngle = newTotalRotation % 360;

      // Normalize to ensure we have a positive angle
      const normalizedAngle = finalAngle < 0 ? finalAngle + 360 : finalAngle;

      // The pointer is at the top (0 degrees), so we check which sector is under it
      // In the initial position:
      // - YES is in the top half (0-180 degrees)
      // - NO is in the bottom half (180-360 degrees)

      // After rotation, we need to see what sector the pointer (at top) is pointing to
      // If the wheel rotated clockwise by X degrees, the content that was at (-X) degrees is now at the pointer
      // So we need to find what was originally at the position that's now under the pointer
      const originalSectorAtPointer = (360 - normalizedAngle) % 360;
      console.log("dong normalizedAngle:", normalizedAngle)
      console.log("dong originalSectorAtPointer:", originalSectorAtPointer)

      // Determine if it's Yes or No
      // YES sector: from 270 degrees to 90 degrees (crossing 0 degrees)
      // NO sector: from 90 degrees to 270 degrees
      const isYes = originalSectorAtPointer > 270 || originalSectorAtPointer < 90;
      setResult(isYes ? 'YES' : 'NO');
      setSpinning(false);
      setSpinCount(spinCount + 1);
    }, 3000); // Match this with the CSS transition duration
  };

  const actualSize = isMobile ? Math.min(size, window.innerWidth - 40) : size;
  const fontSize = actualSize * 0.15;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      maxWidth: '100%'
    }}>
      {/* Wheel container with pointer */}
      <div style={{
        position: 'relative',
        width: `${actualSize}px`,
        height: `${actualSize}px`,
        marginBottom: '30px'
      }}>
        {/* Triangle pointer */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '0',
          height: '0',
          borderLeft: '15px solid transparent',
          borderRight: '15px solid transparent',
          borderTop: '30px solid #333',
          zIndex: 10
        }}></div>

        {/* Wheel */}
        <div
          ref={wheelRef}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            position: 'relative',
            overflow: 'hidden',
            transition: spinning ? 'transform 3s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
            transform: `rotate(${rotation}deg)`,
            boxShadow: '0 0 15px rgba(0,0,0,0.2)',
            cursor: spinning ? 'default' : 'pointer',
            backgroundColor: '#F44336', // Red background for NO
          }}
          onClick={spinWheel}
        >
          {/* Split the wheel into two halves */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '50%',
            backgroundColor: '#4CAF50', // Green for YES
            top: 0,
            transformOrigin: 'bottom center',
          }}></div>


          {/* YES text */}
          <div style={{
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2
          }}>
            <span style={{
              fontSize: `${fontSize}px`,
              fontWeight: 'bold',
              color: 'white',
            }}>
              YES
            </span>
          </div>

          {/* NO text */}
          <div style={{
            position: 'absolute',
            top: '75%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2
          }}>
            <span style={{
              fontSize: `${fontSize}px`,
              fontWeight: 'bold',
              color: 'white'
            }}>
              NO
            </span>
          </div>
        </div>
      </div>

      {/* Spin button */}
      <button
        onClick={spinWheel}
        disabled={spinning}
        style={{
          padding: '12px 30px',
          fontSize: '18px',
          backgroundColor: spinning ? '#ccc' : '#4285f4',
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          cursor: spinning ? 'not-allowed' : 'pointer',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          marginBottom: '20px'
        }}
      >
        {spinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>

      {/* Result display */}
      {result && (
        <div style={{
          marginTop: '20px',
          padding: '15px 30px',
          backgroundColor: result === 'YES' ? '#4CAF50' : '#F44336',
          color: 'white',
          borderRadius: '8px',
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center',
          animation: 'fadeIn 0.5s'
        }}>
          {result}
        </div>
      )}

      {/* Stats */}
      {spinCount > 0 && (
        <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
          You've spun the wheel {spinCount} time{spinCount !== 1 ? 's' : ''}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default YesNoWheel;
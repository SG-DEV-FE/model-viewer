'use client'

import { useEffect, useRef } from 'react'

// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
//         src: string;
//         alt: string;
//         'auto-rotate'?: boolean;
//         'camera-controls'?: boolean;
//         'environment-image'?: string;
//         exposure?: string;
//         'shadow-intensity'?: string;
//       };
//     }
//   }
// }

const ModelViewer = () => {
  const modelViewerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Dynamic import of the model-viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-full">
      <model-viewer
        ref={modelViewerRef}
        src="/model/AUS_F50-2025.glb"
        alt="F50 blank"
        camera-controls
        // environment-image="/sail_texture.png"
        // exposure="0.5"
        shadow-intensity="1"
        className="w-full h-screen"
      >
        <button slot="hotspot-1" data-position="0.10911273058640347m 24.974837143414252m 0.42772314358364394m" data-normal="0.9972873410255735m 0.018605024305147922m -0.07121665887098587m" className="hotspot">
          Top
        </button>
        <button slot="hotspot-2" data-position="0 -1 0" data-normal="0 -1 0" className="hotspot">
          Bottom
        </button>
      </model-viewer>
    </div>
  );
};

export default ModelViewer;
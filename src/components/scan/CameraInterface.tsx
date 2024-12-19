import React from 'react';
import { Camera, RefreshCcw, Zap, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/utils/cn';
import { typography } from '@/utils/typography';

interface CameraInterfaceProps {
  onCapture: () => void;
}

export function CameraInterface({ onCapture }: CameraInterfaceProps) {
  const [cameraReady, setCameraReady] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    // Camera initialization would go here
    setCameraReady(true);
  }, []);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-900">
        {cameraReady && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        )}
        
        <div className="absolute inset-0 border-2 border-white/30 rounded-2xl">
          <div className="absolute inset-12 border-2 border-dashed border-white/50 rounded-xl" />
        </div>
        
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-2 bg-black/50 rounded-full backdrop-blur-sm text-white hover:bg-black/60 transition-colors">
            <RefreshCcw className="w-5 h-5" />
          </button>
          <button className="p-2 bg-black/50 rounded-full backdrop-blur-sm text-white hover:bg-black/60 transition-colors">
            <Zap className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={onCapture}
          className="w-16 h-16 rounded-full bg-primary-600 hover:bg-primary-700 transition-colors flex items-center justify-center"
        >
          <Camera className="w-8 h-8 text-white" />
        </button>
        
        <button className="flex items-center gap-2 px-4 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors">
          <ImageIcon className="w-5 h-5" />
          Galería
        </button>
      </div>

      <p className={cn(typography.body.small, "text-neutral-600 text-center")}>
        Centre el área afectada dentro del marco para obtener mejores resultados
      </p>
    </div>
  );
}
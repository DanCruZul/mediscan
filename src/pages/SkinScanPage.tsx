import React from 'react';
import { ScanHeader } from '@/components/scan/ScanHeader';
import { CameraInterface } from '@/components/scan/CameraInterface';
import { ScanningProcess } from '@/components/scan/ScanningProcess';
import { ResultsSection } from '@/components/scan/ResultsSection';
import { DetailedAnalysis } from '@/components/scan/DetailedAnalysis';
import { RecommendedActions } from '@/components/scan/RecommendedActions';
import { SaveShareSection } from '@/components/scan/SaveShareSection';
import { SimilarCases } from '@/components/scan/SimilarCases';
import { ScanBottomBar } from '@/components/scan/ScanBottomBar';

export function SkinScanPage() {
  const [scanState, setScanState] = React.useState<'camera' | 'scanning' | 'results'>('camera');
  const [scanResult, setScanResult] = React.useState(null);

  return (
    <div className="min-h-screen bg-neutral-50 pb-16">
      <ScanHeader />
      
      <main className="max-w-2xl mx-auto px-4 pt-20">
        {scanState === 'camera' && (
          <CameraInterface onCapture={() => setScanState('scanning')} />
        )}
        
        {scanState === 'scanning' && (
          <ScanningProcess
            onComplete={(result) => {
              setScanResult(result);
              setScanState('results');
            }}
            onCancel={() => setScanState('camera')}
          />
        )}
        
        {scanState === 'results' && scanResult && (
          <>
            <ResultsSection result={scanResult} />
            <DetailedAnalysis analysis={scanResult.analysis} />
            <RecommendedActions recommendations={scanResult.recommendations} />
            <SaveShareSection />
            <SimilarCases cases={scanResult.similarCases} />
          </>
        )}
      </main>

      <ScanBottomBar />
    </div>
  );
}
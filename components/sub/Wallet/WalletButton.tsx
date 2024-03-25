"use client";
import { Suspense } from 'react';
import './wallet.css';
import dynamic from 'next/dynamic';

require('@solana/wallet-adapter-react-ui/styles.css');

const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);


export default function WalletButton() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <WalletMultiButtonDynamic className="wallet-button" />
        </Suspense>
      </div>
    </>
  );
}
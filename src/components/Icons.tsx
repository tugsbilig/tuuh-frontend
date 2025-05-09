// components/Icons.tsx
export function CrownIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" />
      </svg>
    );
  }
  
  export function TrophyIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.6 1.7 4.8 4 5.7V19H7v2h10v-2h-2v-5.3c2.3-.9 4-3.1 4-5.7V7c0-1.1-.9-2-2-2zm0 3c0 1.7-1.3 3-3 3V8h1c.6 0 1-.4 1-1V6h1v2zm-8 3V8h2v3h-2zm-5-3c0-.6.4-1 1-1h1v2H8c-1.7 0-3-1.3-3-3V6h1v1c0 .6.4 1 1 1h1v2z" />
      </svg>
    );
  }
  
  export function MedalIcon({ className }: { className?: string }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V22h8v-7.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7zm0 2c1.4 0 2.7.5 3.7 1.3l-1.4 1.4-1.4-1.4-1.4 1.4-1.4-1.4C9.3 4.5 10.6 4 12 4zM7 9c0-2.8 2.2-5 5-5 .7 0 1.4.1 2 .4V7.1l-1.4 1.4-1.4-1.4-1.4 1.4-1.4-1.4V9H7zm5 5c-1.8 0-3.3-1-4-2.5V20h2v-6h1v6h1v-6h1v6h2v-8.5c-.7 1.5-2.2 2.5-4 2.5z" />
      </svg>
    );
  }
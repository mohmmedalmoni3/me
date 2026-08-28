type Props = { size?: number; className?: string };

export function GithubIcon({ size = 18, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.46-1.19-1.11-1.51-1.11-1.51-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.9-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function DiscordIcon({ size = 18, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <ellipse cx="8.5" cy="13" rx="1.3" ry="1.5" fill="currentColor" stroke="none" />
      <ellipse cx="15.5" cy="13" rx="1.3" ry="1.5" fill="currentColor" stroke="none" />
      <path d="M17.5 6.5c-1.3-.7-2.6-1.1-4-1.4-.17.3-.36.7-.5 1a13.7 13.7 0 0 0-4.3 0c-.14-.3-.34-.7-.5-1-1.4.3-2.7.7-4 1.4C2.5 10 2 13.4 2.4 16.7c1.5 1.1 3 1.8 4.4 2.2.35-.5.66-1 .93-1.6-.5-.2-.98-.44-1.43-.72.12-.09.24-.19.36-.28 2.75 1.3 5.7 1.3 8.42 0 .12.1.24.2.36.28-.45.28-.93.52-1.43.72.27.6.58 1.1.93 1.6 1.4-.4 2.9-1.1 4.4-2.2.5-3.8-.5-7.2-1.8-10.2Z" />
    </svg>
  );
}

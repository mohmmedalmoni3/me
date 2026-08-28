const rowOne = ['REACT', 'NEXT.JS', 'NODE.JS', 'TYPESCRIPT', 'POSTGRESQL', 'REACT', 'NEXT.JS', 'NODE.JS', 'TYPESCRIPT', 'POSTGRESQL'];
const rowTwo = ['FIVEM', 'LUA', 'DOCKER', 'REDIS', 'TAILWIND', 'FIVEM', 'LUA', 'DOCKER', 'REDIS', 'TAILWIND'];

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative flex overflow-hidden">
      <div
        className="flex shrink-0 gap-10 pr-10"
        style={{
          animation: `${reverse ? 'marquee-right' : 'marquee-left'} 32s linear infinite`,
        }}
      >
        {items.map((t, i) => (
          <span
            key={i}
            className="font-display text-4xl md:text-6xl font-semibold uppercase tracking-tight text-transparent"
            style={{ WebkitTextStroke: '1px rgba(215,226,234,0.35)' }}
          >
            {t}
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 gap-10 pl-10"
        style={{
          animation: `${reverse ? 'marquee-right' : 'marquee-left'} 32s linear infinite`,
        }}
      >
        {items.map((t, i) => (
          <span
            key={i}
            className="font-display text-4xl md:text-6xl font-semibold uppercase tracking-tight text-transparent"
            style={{ WebkitTextStroke: '1px rgba(215,226,234,0.35)' }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <div className="relative z-10 bg-bg py-14 md:py-20 border-y border-line">
      <div className="flex flex-col gap-6 md:gap-8">
        <Row items={rowOne} />
        <Row items={rowTwo} reverse />
      </div>
    </div>
  );
}

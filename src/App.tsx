import { useMemo, useState } from 'react';

const demoVideoId = '1pYa4NlczYYxY--vqK2lxMbW7e4jQslMx';
const demoVideoSrc = `https://drive.google.com/uc?export=download&id=${demoVideoId}`;

const manuals = [
  {
    title: 'User Manual',
    description: 'For kiosk users who scan, earn points, and follow the kiosk flow.',
    href: '/docs/User%20ManualNEW.pdf',
    accent: 'from-emerald-500 to-lime-400',
    role: 'User',
  },
  {
    title: 'Admin Manual',
    description: 'For troubleshooting, maintenance, and machine administration.',
    href: '/docs/REVISED%20ADMIN%20MANUAL.pdf',
    accent: 'from-emerald-800 to-emerald-950',
    role: 'Admin',
  },
];

const logoSrc = '/docs/GREEN%20LOGO%20LATEST%20COLOR%20(1).png';

function ManualIcon({ role }: { role: 'User' | 'Admin' }) {
  if (role === 'User') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white sm:h-6 sm:w-6">
        <path
          fill="currentColor"
          d="M12 12a4.5 4.5 0 1 0-4.5-4.5A4.5 4.5 0 0 0 12 12Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 text-white sm:h-6 sm:w-6">
      <path
        fill="currentColor"
        d="M21 14.5v-5l-2-.41a7.9 7.9 0 0 0-.9-2.15l1.18-1.67-3.54-3.54-1.67 1.18A7.9 7.9 0 0 0 12.5 2L12 0h-5l-.41 2a7.9 7.9 0 0 0-2.15.9L2.77 1.72.23 4.26l1.18 1.67A7.9 7.9 0 0 0 0 9.5L0 10l2 .41c.18.75.48 1.47.9 2.15l-1.18 1.67 3.54 3.54 1.67-1.18c.68.42 1.4.72 2.15.9L10 21h5l.41-2c.75-.18 1.47-.48 2.15-.9l1.67 1.18 3.54-3.54-1.18-1.67c.42-.68.72-1.4.9-2.15l2-.41Zm-9 2.5a4 4 0 1 1 4-4 4 4 0 0 1-4 4Z"
      />
    </svg>
  );
}

const gallery = [
  {
    title: '1 / 7',
    caption: 'Uploaded project image showing the TRASHURE setup.',
    src: '/docs/received_955295687312213.jpeg',
  },
  {
    title: '2 / 7',
    caption: 'Uploaded project image showing the TRASHURE setup.',
    src: '/docs/received_4344439145803316.jpeg',
  },
  {
    title: '3 / 7',
    caption: 'Uploaded project image showing the TRASHURE setup.',
    src: '/docs/received_4304835203167581.jpeg',
  },
  {
    title: '4 / 7',
    caption: 'Uploaded project image showing the TRASHURE setup.',
    src: '/docs/received_2149770069142276.jpeg',
  },
  {
    title: '5 / 7',
    caption: 'Uploaded project image showing the TRASHURE setup.',
    src: '/docs/received_1867681503802119.jpeg',
  },
  {
    title: '6 / 7',
    caption: 'Uploaded project image showing the TRASHURE setup.',
    src: '/docs/received_1691370218712437.jpeg',
  },
  {
    title: '7 / 7',
    caption: 'Uploaded project image showing the TRASHURE setup.',
    src: '/docs/received_1508448360931812.jpeg',
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [zoomedSlide, setZoomedSlide] = useState<number | null>(null);

  const visibleSlide = useMemo(() => gallery[activeSlide], [activeSlide]);

  return (
    <main className="min-h-screen bg-[#063d29] text-slate-900">
      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-3 py-3 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-8 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:120px_120px]" />

        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b4a32] text-white shadow-[0_28px_80px_rgba(0,0,0,0.24)] sm:rounded-[2.2rem]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_42%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.03),_transparent_28%)]" />

          <div className="relative px-3 py-4 sm:px-8 sm:py-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/18 bg-white p-2 shadow-[0_18px_40px_rgba(0,0,0,0.16)] sm:h-24 sm:w-24 sm:p-3">
                <img src={logoSrc} alt="TRASHURE logo" className="h-full w-full object-contain" />
              </div>

              <h1 className="mt-4 text-3xl font-black leading-[0.95] tracking-tight sm:mt-5 sm:text-6xl lg:text-7xl">
                TRASHURE
              </h1>
              <p className="mx-auto mt-2 max-w-2xl text-sm font-medium leading-6 text-white/88 sm:mt-3 sm:text-lg sm:leading-7">
                A simple waste verification demo with quick access to the video, manuals, and gallery.
              </p>

              <div className="mx-auto mt-4 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#062e1f] shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:mt-8 sm:rounded-[2rem]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/75 sm:px-5 sm:tracking-[0.28em]">
                  <span>Demo Video</span>
                  <span>Player</span>
                </div>
                <div className="relative bg-[#0a402b] p-2 sm:p-5">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_36%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.03),_transparent_30%)]" />
                  <div className="relative mx-auto w-full max-w-3xl text-center text-white">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_16px_40px_rgba(0,0,0,0.2)] h-[360px] sm:h-[420px] lg:h-[460px]">
                      <video
                        className="h-full w-full bg-black object-contain"
                        controls
                        playsInline
                        preload="metadata"
                        controlsList="nodownload noplaybackrate"
                        src={demoVideoSrc}
                      >
                        <source src={demoVideoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="mt-3 flex flex-col items-center gap-2 sm:mt-4">
                      <h2 className="text-lg font-extrabold tracking-tight sm:text-3xl">Watch the demo</h2>
                      <p className="max-w-xl text-sm leading-6 text-white/78 sm:text-base">
                        A quick walkthrough of the workflow. The player keeps the controls under the frame so the video stays readable.
                      </p>
                      <a
                        href={demoVideoSrc}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-white/20"
                      >
                        Open full video
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="relative -mt-4 grid gap-3 pb-4 sm:-mt-8 sm:gap-5 sm:pb-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#062e1f] p-3 text-white shadow-[0_18px_50px_rgba(9,44,39,0.18)] sm:rounded-[2rem] sm:p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300 sm:tracking-[0.28em]">Downloads</p>
                <h3 className="mt-1 text-xl font-black tracking-tight text-white sm:mt-2 sm:text-2xl">Manuals</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/76">
                  Keep the user and admin guides close at hand for setup, usage, and maintenance.
                </p>
              </div>
              <span className="rounded-full bg-yellow-300/15 px-2 py-1 text-[11px] font-bold text-yellow-200 sm:px-3 sm:text-xs">
                PDF
              </span>
            </div>

            <div className="mt-3 grid gap-3 sm:mt-4">
              {manuals.map((manual) => (
                <a
                  key={manual.title}
                  href={manual.href}
                  className="group rounded-[1.2rem] border border-white/10 bg-white/6 p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-md sm:rounded-[1.4rem] sm:p-4"
                >
                  <div className="flex items-start gap-3 sm:items-center">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-[1rem] bg-gradient-to-br ${manual.accent} shadow-md sm:h-12 sm:w-12 sm:rounded-[1.1rem]`}>
                      <ManualIcon role={manual.role as 'User' | 'Admin'} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h4 className="font-bold tracking-tight text-white">{manual.title}</h4>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200 sm:text-xs">
                            {manual.role}
                          </p>
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200 transition group-hover:translate-x-0.5 sm:text-xs sm:tracking-[0.2em]">
                          Download
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-white/76">{manual.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#062e1f] p-3 text-white shadow-[0_18px_50px_rgba(9,44,39,0.18)] sm:rounded-[2rem] sm:p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-300 sm:tracking-[0.28em]">Gallery</p>
                <h3 className="mt-1 text-xl font-black tracking-tight text-white sm:mt-2 sm:text-2xl">Deployment photos</h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-white/76">
                  Browse the uploaded photos to preview the setup and deployment details.
                </p>
              </div>
              <span className="rounded-full bg-yellow-300/15 px-2 py-1 text-[11px] font-bold text-yellow-200 sm:px-3 sm:text-xs">
                Images
              </span>
            </div>

            <div className="mt-3 sm:mt-4">
              <div className="overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/6 sm:rounded-[1.4rem]">
                <div className="relative">
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() => setActiveSlide((value) => (value - 1 + gallery.length) % gallery.length)}
                    className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/55 px-2.5 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-slate-950/75 sm:left-3 sm:px-3"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => setActiveSlide((value) => (value + 1) % gallery.length)}
                    className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/55 px-2.5 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-slate-950/75 sm:right-3 sm:px-3"
                  >
                    ›
                  </button>

                  <button
                    type="button"
                    onClick={() => setZoomedSlide(activeSlide)}
                    className="block w-full text-left"
                    aria-label={`Zoom image ${visibleSlide.title}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-black">
                      <img
                        src={visibleSlide.src}
                        alt={visibleSlide.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-3 text-left text-white">
                        <p className="text-sm font-semibold">Tap to zoom</p>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3 p-3 sm:gap-4 sm:p-4">
                  <div>
                    <p className="font-black tracking-tight text-white">{visibleSlide.title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/76">{visibleSlide.caption}</p>
                  </div>
                  <div className="flex gap-2">
                    {gallery.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 rounded-full transition ${index === activeSlide ? 'w-7 bg-emerald-300' : 'w-2.5 bg-white/30'}`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {zoomedSlide !== null ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6">
            <button
              type="button"
              className="absolute right-3 top-3 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20 sm:right-4 sm:top-4 sm:px-4"
              onClick={() => setZoomedSlide(null)}
              aria-label="Close zoomed image"
            >
              X
            </button>
            <button
              type="button"
              className="absolute inset-0 cursor-default"
              aria-label="Close zoomed image backdrop"
              onClick={() => setZoomedSlide(null)}
            />
            <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-[0_40px_100px_rgba(0,0,0,0.45)]">
              <div className="bg-black p-3 sm:p-4">
                <img
                  src={gallery[zoomedSlide].src}
                  alt={gallery[zoomedSlide].title}
                  className="max-h-[82vh] w-full rounded-[1.25rem] object-contain"
                />
                <div className="px-1 pb-1 pt-4 text-center text-white">
                  <h4 className="text-2xl font-black tracking-tight">{gallery[zoomedSlide].title}</h4>
                  <p className="mt-2 max-w-lg mx-auto text-sm leading-6 text-white/80">
                    {gallery[zoomedSlide].caption}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </main>
  );
}

export default App;
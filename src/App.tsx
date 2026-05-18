import { useMemo, useState } from 'react';

const manuals = [
  {
    title: 'User Manual',
    description: 'Step-by-step guide for regular users and QR scan flow.',
    href: '/docs/user-manual.pdf',
    accent: 'from-emerald-500 to-teal-700',
  },
  {
    title: 'Admin Manual',
    description: 'Admin controls, management steps, and system configuration.',
    href: '/docs/admin-manual.pdf',
    accent: 'from-emerald-900 to-slate-950',
  },
];

const gallery = [
  {
    title: 'Banner setup',
    caption: 'Printed tarpaulin and QR placement during installation.',
    tone: 'from-emerald-900 via-emerald-700 to-teal-600',
  },
  {
    title: 'System check',
    caption: 'Hardware, scanning, and verification during deployment.',
    tone: 'from-teal-900 via-teal-700 to-emerald-700',
  },
  {
    title: 'Final handoff',
    caption: 'Completed deployment and documentation for submission.',
    tone: 'from-amber-500 via-amber-600 to-orange-600',
  },
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [zoomedSlide, setZoomedSlide] = useState<number | null>(null);

  const visibleSlide = useMemo(() => gallery[activeSlide], [activeSlide]);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#0a5d53_0%,_#0c6a60_42%,_#f2f7f4_42%,_#f2f7f4_100%)] text-slate-900">
      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:120px_120px]" />

        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/6 text-white shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_42%),radial-gradient(circle_at_bottom,_rgba(210,165,59,0.18),_transparent_28%)]" />

          <div className="relative px-4 py-5 sm:px-8 sm:py-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/20 glass shadow-[0_18px_40px_rgba(0,0,0,0.18)] sm:h-28 sm:w-28">
                <span className="display-font text-5xl font-black text-white sm:text-6xl">TR</span>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.32em] text-white/90 glass">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Ready to verify
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                TRASHURE
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-7 text-white/88 sm:text-lg">
                Automated Recyclable Waste Verification with Point Allocation and Reward System.
              </p>

              <div className="mx-auto mt-8 overflow-hidden rounded-[2rem] border border-white/20 bg-slate-950/45 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/75 sm:px-5">
                  <span>Demo Video</span>
                  <span>Scan starts here</span>
                </div>
                <div className="relative aspect-[9/16] bg-[linear-gradient(180deg,_rgba(6,45,39,0.92),_rgba(7,71,64,0.96))] sm:aspect-video">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_36%),radial-gradient(circle_at_bottom,_rgba(210,165,59,0.16),_transparent_30%)]" />
                  <div className="relative flex h-full flex-col justify-between p-4 sm:p-8">
                    <div className="flex items-center justify-between text-white/80">
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em]">
                        First view
                      </span>
                      <span className="text-xs font-medium">Replace with your actual video file</span>
                    </div>

                    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center text-center text-white">
                      <video
                        controls
                        playsInline
                        className="h-full w-full rounded-xl object-cover"
                        src="https://drive.google.com/uc?export=view&id=1pYa4NlczYYxY--vqK2lxMbW7e4jQslMx"
                      >
                        Your browser does not support the video tag.
                      </video>
                      <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl">
                        Demo video
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-white/78 sm:text-base">
                        Play the demo to see the system in action.
                      </p>
                    </div>

                    <div className="mt-5 w-full">
                      <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-sm backdrop-blur text-white/84">
                        <p className="font-semibold">Point allocation</p>
                        <p className="mt-1 text-white/72">Track recyclables and rewards.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="relative -mt-8 grid gap-4 pb-4 sm:-mt-10 sm:gap-5 sm:pb-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(9,44,39,0.08)] sm:p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-700">Downloads</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Manuals and scan guide</h3>
              </div>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                Tap to download
              </span>
            </div>

            <div className="mt-4 grid gap-3">
              {manuals.map((manual) => (
                <a
                  key={manual.title}
                  href={manual.href}
                  className="group rounded-[1.4rem] border border-slate-200 bg-[#f8fbfa] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-[1.1rem] bg-gradient-to-br ${manual.accent} shadow-md`} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="font-bold tracking-tight text-slate-950">{manual.title}</h4>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 transition group-hover:translate-x-0.5">
                          Download
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{manual.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_18px_50px_rgba(9,44,39,0.08)] sm:p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-emerald-700">Gallery</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">Deployment documentation</h3>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800">
                Slider
              </span>
            </div>

            <div className="mt-4">
              <div className="overflow-hidden rounded-[1.4rem] border border-slate-200 bg-[#f8fbfa]">
                <div className="relative">
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() => setActiveSlide((value) => (value - 1 + gallery.length) % gallery.length)}
                    className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/55 px-3 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-slate-950/75"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() => setActiveSlide((value) => (value + 1) % gallery.length)}
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-slate-950/55 px-3 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-slate-950/75"
                  >
                    ›
                  </button>

                  <button
                    type="button"
                    onClick={() => setZoomedSlide(activeSlide)}
                    className="block w-full text-left"
                    aria-label={`Zoom image ${visibleSlide.title}`}
                  >
                    <div className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${visibleSlide.tone}`}>
                      <div className="text-center text-white">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.1rem] border border-white/20 bg-white/10 text-xs font-black uppercase tracking-[0.24em]">
                          {activeSlide + 1}
                        </div>
                        <p className="mt-3 text-sm font-semibold">Tap to zoom</p>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4 p-4">
                  <div>
                    <p className="font-bold tracking-tight text-slate-950">{visibleSlide.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{visibleSlide.caption}</p>
                  </div>
                  <div className="flex gap-2">
                    {gallery.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveSlide(index)}
                        className={`h-2.5 rounded-full transition ${index === activeSlide ? 'w-7 bg-emerald-700' : 'w-2.5 bg-slate-300'}`}
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-6 backdrop-blur-sm">
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
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
              <div className={`aspect-[4/3] bg-gradient-to-br ${gallery[zoomedSlide].tone}`}>
                <div className="flex h-full flex-col items-center justify-center text-white">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.4rem] border border-white/20 bg-white/10 text-sm font-black uppercase tracking-[0.24em]">
                    {zoomedSlide + 1}
                  </div>
                  <h4 className="mt-5 text-2xl font-black tracking-tight">{gallery[zoomedSlide].title}</h4>
                  <p className="mt-2 max-w-lg px-6 text-center text-sm leading-6 text-white/80">
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
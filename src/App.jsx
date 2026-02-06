export default function App() {
  return (
    <div>
      <header className="bg-slate-950">
        <div className="container-x section-y">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Kamogau UI Baseline
          </h1>
          <p className="mt-3 muted max-w-2xl">
            If this text is crisp and centered with padding, your global styling is ready.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              Card
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              Card
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              Card
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

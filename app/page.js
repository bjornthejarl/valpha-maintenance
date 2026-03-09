export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="background-grid" aria-hidden="true" />
      <div className="aurora aurora-left" aria-hidden="true" />
      <div className="aurora aurora-right" aria-hidden="true" />

      <section className="maintenance-card">
        <div className="status-pill">
          <span className="status-dot" />
          Scheduled refresh
        </div>

        <div className="content-grid">
          <div className="hero-copy">
            <p className="eyebrow">vAlpha</p>
            <h1>Site under maintenance.</h1>
            <p className="description">
              We&apos;re rebuilding the experience with a cleaner structure and a
              sharper launch. Thank you for your patience while we tune
              everything behind the scenes.
            </p>

            <div className="footer-note">
              <span className="footer-line" />
              <p>Please check back soon.</p>
            </div>
          </div>

          <aside className="signal-panel" aria-hidden="true">
            <div className="signal-core">
              <span className="signal-ring ring-one" />
              <span className="signal-ring ring-two" />
              <span className="signal-ring ring-three" />
              <span className="signal-center" />
            </div>

            <div className="signal-copy">
              <p className="signal-label">Maintenance in progress</p>
              <div className="progress-track">
                <span className="progress-fill" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-top" aria-hidden="true" />
      <div className="ambient ambient-bottom" aria-hidden="true" />

      <section className="maintenance-card">
        <div className="card-frame">
          <div className="brand-row">
            <p className="brand-mark">vAlpha</p>
            <div className="status-pill">
              <span className="status-dot" />
              Planned maintenance
            </div>
          </div>

          <div className="content-block">
            <p className="eyebrow">Temporary pause</p>
            <h1>We&apos;re preparing a more refined vAlpha experience.</h1>
            <p className="description">
              The site is temporarily offline while we complete a focused
              refresh. We&apos;ll be back shortly with a cleaner, more polished
              release.
            </p>
          </div>

          <div className="info-row">
            <div className="info-block">
              <p className="info-label">Status</p>
              <p className="info-value">Upgrade in progress</p>
            </div>

            <div className="info-block">
              <p className="info-label">Availability</p>
              <p className="info-value">Please check back soon</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

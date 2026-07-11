const SectionCard = ({ title, description, icon: Icon, children, className = '' }) => {
  return (
    <section className={`rounded-2xl border border-line bg-card p-5 sm:p-6 shadow-sm ${className}`}>
      <div className="mb-5 flex items-start gap-3">
        {Icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
        <div>
          <h2 className="text-lg font-semibold text-ink">{title}</h2>
          {description && <p className="mt-1 text-base text-muted">{description}</p>}
        </div>
      </div>
      {children}
    </section>
  );
};

export default SectionCard;

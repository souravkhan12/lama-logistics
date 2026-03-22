interface SectionBadgeProps {
  label: string;
  className?: string;
  backgroundColor?: string;
}

export default function SectionBadge({
  label,
  className = "",
  backgroundColor = "#EFE6D6",
}: SectionBadgeProps) {
  return (
    <div
      style={{ backgroundColor }}
      className={`inline-flex items-center gap-3 px-4 py-3 rounded-sm ${className}`}
    >
      <span className="w-5 h-5 rounded-xs bg-[linear-gradient(180deg,#0A0227_0%,#1F0280_33.17%,#495AEE_59.62%,#92A9EC_81.25%,#DCE1F4_100%)]" />
      <span className="font-mono text-[14px] tracking-[0.15em] font-medium text-black">
        {label}
      </span>
    </div>
  );
}

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  isPadding?: boolean;
}

export default function Container({
  children,
  className,
  isPadding = true,
}: ContainerProps) {
  return (
    <div
      className={`w-full max-w-(--space-container-max-width) ${isPadding ? `px-(--space-container-padding)` : ""} mx-auto ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

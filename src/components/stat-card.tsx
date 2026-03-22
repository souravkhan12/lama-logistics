interface CardProps {
  value?: string;
  content?: string;
}

export default function StatCard({ value, content }: CardProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-[40px] font-display font-medium leading-none">
        {value}
      </div>

      <div className="text-[14px] text-[#444] leading-snug max-w-[180px]">
        {content}
      </div>
    </div>
  );
}

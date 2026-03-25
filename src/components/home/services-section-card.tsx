import Image from "next/image";
import Link from "next/link";

export interface ServicesSectionCardProps {
  title: string;
  description: string;
  image: string;
}

export function ServicesSectionCard({
  title,
  description,
  image,
}: ServicesSectionCardProps) {
  return (
    <article className="flex h-full w-[332px] flex-col overflow-hidden rounded-md bg-(--color-surface-blush)">
      <div className="relative aspect-video w-full shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="flex min-h-[220px] flex-1 flex-col p-6">
        <h3 className="font-display text-b1 mb-2">{title}</h3>

        <p className="mb-4 flex-1 text-b3">{description}</p>

        <Link
          href="#"
          className="font-mono text-caption text-(--color-link-muted) underline underline-offset-4 decoration-(--color-link-muted) hover:decoration-fg w-fit"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}

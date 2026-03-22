import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  image: string;
}

export function ServiceCard({ title, description, image }: Props) {
  return (
    <article className="bg-[#FDF7ED] rounded-md w-[332px] overflow-hidden flex flex-col h-full">
      <div className="relative aspect-4/3 w-full shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="font-display text-b1  mb-2">{title}</p>

        <p className="text-b3 mb-4 flex-1">{description}</p>

        <Link
          href="#"
          className="font-mono text-caption text-[#8E8E93] underline underline-offset-4 decoration-[#8E8E93] hover:decoration-fg w-fit"
        >
          Read more
        </Link>
      </div>
    </article>
  );
}

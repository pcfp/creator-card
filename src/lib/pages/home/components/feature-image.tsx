import Image from 'next/image';

export interface FeatureImageProps {
  src: string;
  alt: string;
}

export function FeatureImage({ src, alt }: FeatureImageProps) {
  return (
    <Image
      src={src}
      width={400}
      height={400}
      alt={alt}
      className="mx-auto aspect-square overflow-hidden rounded-xl object-contain object-center w-full max-w-[400px]"
      sizes="(max-width: 640px) 100vw, 400px"
      loading="lazy"
    />
  );
} 
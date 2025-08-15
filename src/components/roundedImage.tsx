import Image from 'next/image';

interface RoundedImageProps {
  src: string;
  alt: string;
  caption?: string;
  [key: string]: any;
}

const RoundedImage = (props: RoundedImageProps) => {
  const { src, alt, caption, ...imageProps } = props;
  
  return (
    <figure className="my-4 flex flex-col items-center">
      <Image src={src} alt={alt} className="rounded-lg" {...imageProps} />
      {caption && (
        <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default RoundedImage;

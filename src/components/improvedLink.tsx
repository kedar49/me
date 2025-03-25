import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

function ImprovedLink(props) {
  const href = props.href;

  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link href={href} className="custom-link relative group">
        <span className="relative z-10 group-hover:text-primary transition-colors duration-300">{props.children}</span>
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
      </Link>
    );
  }

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="group custom-link relative">
      <span className="relative z-10 group-hover:text-primary transition-colors duration-300">{props.children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300 ease-in-out"></span>
      <span className="inline-flex items-center ml-1">
        <ArrowTopRightIcon className="h-3 w-3 -mt-1 group-hover:animate-nudge-top-right text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </span>
    </Link>
  );
}

export default ImprovedLink;

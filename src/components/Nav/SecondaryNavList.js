import Link from 'next/link';

export default function SecondaryNavList({ text, href, el }) {
  return (
    <li>
      <Link
        href={href}
        className="pl-0 py-[0.65rem] pr-[0.6rem] uppercase text-[13px] block text-light"
      >
        {el}
        {text}
      </Link>
    </li>
  );
}

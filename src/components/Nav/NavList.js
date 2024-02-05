import Link from 'next/link';

export default function NavList({ text, href }) {
  return (
    <li className="block">
      <Link
        href={href}
        className="block pl-[1.2rem] pr-[1.2rem] pt-[39px] pb-[39px] text-accent uppercase"
      >
        {text}
      </Link>
    </li>
  );
}

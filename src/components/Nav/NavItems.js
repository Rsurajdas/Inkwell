
import NavList from './NavList';

export default function NavItems() {
  return (
    <div className="flex basis-auto grow items-center">
      <ul className="flex list-none ml-auto">
        <NavList href="/" text="Home" />
        <NavList href="/blog" text="Blog" />
        <NavList href="/Categories" text="Categories" />
      </ul>
    </div>
  );
}

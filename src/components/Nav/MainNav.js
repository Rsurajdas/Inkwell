import Logo from '../logo/Logo';
import NavItems from './NavItems';

export default function MainNav() {
  return (
    <nav className="border-y-[1px] border-solid border-gray-400">
      <div className="relative flex items-center justify-start flex-wrap flex-row pt-0 pb-0 xl:container">
        <Logo />
        <NavItems />
      </div>
    </nav>
  );
}

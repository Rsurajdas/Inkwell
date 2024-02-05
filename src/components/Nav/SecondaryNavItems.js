import SecondaryNavList from './SecondaryNavList';

export default function SecondaryNavItems() {
  return (
    <ul className="flex flex-wrap pl-0 mb-0 list-none">
      <SecondaryNavList href="#" text="About" />
      <SecondaryNavList
        href="#"
        text="Contact"
        el={
          <span className="h-[5px] w-[5px] bg-accent1 mr-[0.6rem] mb-[3px] inline-block align-middle rounded-full">
            &nbsp;
          </span>
        }
      />
    </ul>
  );
}

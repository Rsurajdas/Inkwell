import SecondaryNavItems from './SecondaryNavItems';
import SocialHandles from './SocialHandles';

export default function SecondaryNav() {
  return (
    <nav>
      <div className="xl:container">
        <div className="flex items-center justify-between py-1 pb-0">
          <div className="w-7/12 relative grow-0 shrink-0 basis-[58.333333%]">
            <SecondaryNavItems />
          </div>
          <div className="w-5/12 relative grow-0 shrink-0 basis-[41.666667%]">
            <SocialHandles />
          </div>
        </div>
      </div>
    </nav>
  );
}

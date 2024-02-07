import HeaderContent from './HeaderContent';
import HeaderThumbnail from './HeaderThumbnail';

export default function MainHeader() {
  return (
    <div className="pb-6 md:mb-12 mb-6">
      <div className="xl:container">
        <div className="grid grid-cols-header gap-x-10 gap-y-5">
          <HeaderContent />
          <HeaderThumbnail />
        </div>
      </div>
    </div>
  );
}

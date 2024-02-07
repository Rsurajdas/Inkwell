import Image from 'next/image';
import Link from 'next/link';
import header from '@/assets/img/header.jpg';
import styles from './header.module.css';

export default function HeaderThumbnail() {
  return (
    <div className="pt-[62%] w-full relative rounded-[23px] overflow-hidden">
      <Link href="/">
        <Image
          src={header}
          alt="header thumbnail"
          className={`absolute top-0 left-0 bottom-0 right-0 w-full h-full object-cover object-center ${styles.headerThumbnail}`}
        />
      </Link>
    </div>
  );
}

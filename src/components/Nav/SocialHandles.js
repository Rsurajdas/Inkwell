import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import SocialHandlesList from './SocialHandleList';

export default function SocialHandles() {
  return (
    <ul className="flex flex-wrap pl-0 mb-0 list-none justify-end items-center">
      <SocialHandlesList
        href="#"
        sx={{ minWidth: '8px' }}
        icon={<FontAwesomeIcon icon={faFacebookF} />}
      />
      <SocialHandlesList
        href="#"
        sx={{ minWidth: '15px' }}
        icon={<FontAwesomeIcon icon={faXTwitter} />}
      />
      <SocialHandlesList
        href="#"
        sx={{ minWidth: '13px' }}
        icon={<FontAwesomeIcon icon={faInstagram} />}
      />
      <SocialHandlesList
        href="#"
        sx={{ minWidth: '13px' }}
        icon={<FontAwesomeIcon icon={faLinkedinIn} />}
      />
      <SocialHandlesList
        href="#"
        sx={{ minWidth: '15px' }}
        icon={<FontAwesomeIcon icon={faYoutube} />}
      />
    </ul>
  );
}

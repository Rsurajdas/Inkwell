export default function SocialHandlesList({ href, icon, sx }) {
  return (
    <li>
      <a
        href={href}
        className={`block text-light leading-[100%] py-2 mr-3`}
        style={sx}
      >
        {icon}
      </a>
    </li>
  );
}

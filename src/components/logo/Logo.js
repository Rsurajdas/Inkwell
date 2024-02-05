import Link from 'next/link';

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <h1 className="text-h1 font-normal">
          <span className="text-primary">ink</span>
          <span className="text-secondary">well</span>
        </h1>
      </Link>
    </div>
  );
}

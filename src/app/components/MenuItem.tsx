import Link from "next/link";

interface IconProps {
  className?: string;
}

interface Props {
  title: string;
  address: string;
  icon: React.ComponentType<IconProps>;
}

export default function MenuItem({ title, address, icon: Icon }: Props) {
  return (
    <div>
      <Link href={address} className="mx-4 md:mx-6 hover:text-amber-600">
        <Icon className="text-2xl sm:hidden mx-4" />
        <p className="hidden sm:inline my-2 text-sm">{title}</p>
      </Link>
    </div>
  );
}

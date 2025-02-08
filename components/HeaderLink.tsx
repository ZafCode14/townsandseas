'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
 name: string;
 path: string;
}
export default function HeaderLink({ path, name }: Props) {
  const active = usePathname();
  return (
    <Link className={`hover:underline ${path == active && "underline"}`} href={path}>{name}</Link>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function LogoMain() {
  return (
    <Link href="/">
      <div className="mb-4 flex items-center justify-center">
        <Image src="/lokblok-dark.png" alt="Lokblok Logo" className="w-auto h-10 mb-2" height={63} width={170} />
      </div>
    </Link>
  );
}

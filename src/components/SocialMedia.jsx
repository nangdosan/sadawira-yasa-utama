import Image from "next/image";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <div className="flex items-center -ml-2">
      <Link
        href="https://www.instagram.com/sadawiralogistik?igsh=NTc4MTIwNjQ2YQ=="
        target="_blank"
        className="w-16 h-16 bg-white p-4 rounded-full shadow-xl flex item-center justify-center scale-75 hover:scale-90 transition-all duration-200"
      >
        <Image
          src="/images/ig.png"
          alt="Instagram"
          width={33.33}
          height={33.33}
        />
      </Link>
      <Link
        href="https://www.tiktok.com/@sadawiralogistik?_t=8oQDWymO0Nr&_r=1"
        target="_blank"
        className="w-16 h-16 bg-white p-4 rounded-full shadow-xl flex item-center justify-center scale-75 hover:scale-90 transition-all duration-200"
      >
        <Image
          src="/images/tiktok.png"
          alt="Tiktok"
          width={30}
          height={26.13}
        />
      </Link>
      {/* <Link
        href="#"
        className="w-16 h-16 bg-white p-4 rounded-full shadow-xl flex item-center justify-center scale-75 hover:scale-90 transition-all duration-200"
      >
        <Image src="/images/yt.png" alt="Youtube" width={50} height={18} />
      </Link> */}
      <Link
        href="https://www.facebook.com/profile.php?id=100085500952297"
        target="_blank"
        className="w-16 h-16 bg-white p-4 rounded-full shadow-xl flex item-center justify-center scale-75 hover:scale-90 transition-all duration-200"
      >
        <Image src="/images/fb.png" alt="Facebook" width={40} height={33.33} />
      </Link>
    </div>
  );
}

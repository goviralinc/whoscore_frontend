import Image from "next/image";
import Link from "next/link";
import "./style.css";
import UserProfIcon from "@/components/Common/Icons/user-profile";

const Header = () => {
  return (
    <header className="bg-dark py-4 px-5 rounded-bl-[40px] rounded-br-[40px]">
      <div>
        <Image src="/logo.png" alt="WhoScore logo" width={118} height={100} />
      </div>

      <div className="flex justify-between gap-4 mt-8 text-xs">
        <div className="flex items-center gap-4">
          <div className={`user-border rounded-full size-12 bg-[#0E0E0E] shrink-0 p-1 grid place-content-center`}>
            <div className="size-[2.8rem] rounded-full bg-[#0e0e0e] grid place-content-center">
              <UserProfIcon />
            </div>
          </div>
          <p>
            Sign in to enjoy the full <br /> experience of WhoScore
          </p>
        </div>

        <Link href="/auth/login" className="font-bold underline text-primary hover:opacity-90 shrink-0 h-fit">
          Sign in
        </Link>
      </div>
    </header>
  );
};

export default Header;

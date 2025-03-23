import React from "react";
import Link from "next/link";
import Image from "next/image";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex mx-auto max-w-7xl flex-col gap-12 my-12 px-16 max-sm:px-4 max-sm:my-8">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={38} height={32} alt="PrepWise" />
          <h2 className="text-primary-100">PrepWise</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;

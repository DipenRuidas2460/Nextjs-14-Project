"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  const router = useRouter();
  const pathName = usePathname()
  const searchParam = useSearchParams()
  console.log(pathName);
  console.log(searchParam.get("ko"));

  const handleClick = () => {
    console.log("Clicked!");
    router.forward();
  };

  return (<div>
    <Link href="/" prefetch={false}>Click here</Link>
    <br/>
    <br/>
    <button onClick={handleClick}>Write and Redirect</button>
  </div>)
};

export default NavigationTestPage;

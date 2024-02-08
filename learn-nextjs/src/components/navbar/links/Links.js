import Link from "next/link";

function Links() {
  const links = [
    { title: "Homepage", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  return (
    <div>
      {links.map((link, index) => (
        <Link href={link.path} key={index}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Links;
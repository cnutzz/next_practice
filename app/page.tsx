import Link from "next/link";
import Navigation from "../components/navigation";

export default function Tomato() {
  return (
    <div>
      <Navigation />
      <h1>Hello NextJS</h1>
      <Link href="/about-us">Go to About us</Link>
    </div>
  );
}

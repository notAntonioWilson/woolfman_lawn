import Link from "next/link";
import { SectionCta } from "@/components/Sections";
import { BIZ } from "@/lib/site";

export const metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <div className="section">
      <div className="shell max-w-[700px] py-12 text-center">
        <div className="eyebrow mb-4">404</div>
        <h1 className="text-[clamp(34px,5vw,56px)] uppercase mb-5">
          That Page Grew Over
        </h1>
        <p className="text-stone mb-8">
          The page you were looking for is not here. Head back home, browse our services, or call{" "}
          {BIZ.phone} and we will point you the right way.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn btn-block btn-primary">
            Back to Home
          </Link>
          <Link href="/services" className="btn btn-block btn-line">
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}

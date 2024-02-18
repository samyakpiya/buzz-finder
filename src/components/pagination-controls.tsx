import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  previousPath: string;
  nextPath: string;
};

const btnStyles =
  "flex items-center gap-x-2 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm";

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationControlsProps) {
  return (
    <section className="w-full flex justify-between">
      {previousPath ? (
        <Link className={btnStyles} href={previousPath}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath ? (
        <Link className={btnStyles} href={nextPath}>
          Next
          <ArrowRightIcon />
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}

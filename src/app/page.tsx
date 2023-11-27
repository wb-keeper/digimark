import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
//24 25
export default function Home() {
  return (
    <MaxWidthWrapper className="">
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <div>hello</div>
      </div>
    </MaxWidthWrapper>
  );
}

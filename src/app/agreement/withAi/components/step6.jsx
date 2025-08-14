import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function StepSix({ setStep }) {
  return (
    <>
      {" "}
      <div className="p-8 flex items-center justify-center flex-col gap-14">
        <div className="text-center flex flex-col ">
          <h1 className="text-[28px] text-[#8E9A9A] font-bold">
            A moment, Custos Lawyer is cooking!
          </h1>
          <p>We are creating your agreement. It will be ready in a moment.</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/checkmark-circle-color.svg"
              alt="Crime Recorder Image"
              width={100}
              height={100}
              className="w-[1.5em] h-[1.5em] fade-in-image"
            />
            <p>Employment contract</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/checkmark-circle.svg"
              alt="Crime Recorder Image"
              width={100}
              height={100}
              className="w-[1.5em] h-[1.5em] fade-in-image"
            />
            <p>Effective from...</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/checkmark-circle.svg"
              alt="Crime Recorder Image"
              width={100}
              height={100}
              className="w-[1.5em] h-[1.5em] fade-in-image"
            />
            <p>Identifying second party</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/checkmark-circle.svg"
              alt="Crime Recorder Image"
              width={100}
              height={100}
              className="w-[1.5em] h-[1.5em] fade-in-image"
            />
            <p>Terms of agreement</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/checkmark-circle.svg"
              alt="Crime Recorder Image"
              width={100}
              height={100}
              className="w-[1.5em] h-[1.5em] fade-in-image"
            />
            <p>Creating agreement</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/checkmark-circle.svg"
              alt="Crime Recorder Image"
              width={100}
              height={100}
              className="w-[1.5em] h-[1.5em] fade-in-image"
            />
            <p>Adding extra spices</p>
          </div>
        </div>
      </div>
    </>
  );
}

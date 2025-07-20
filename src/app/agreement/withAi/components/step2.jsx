import { Input } from "@/components/ui/input";

export default function StepTwo() {
  return (
    <>
      {" "}
      <div className="p-8 flex items-center justify-center flex-col gap-4">
        <div className="text-center flex flex-col ">
          <h1 className="text-[28px] text-[#8E9A9A] font-bold">
            Verify your profile.
          </h1>
          <p>
            We sent you a verification code to your mail. Enter the code into
            the boxes.
          </p>
        </div>
        <div className="rounded-2xl box border-gradien w-fit p-6">
          <div className="sh"></div>
          <div className="flex flex-col gap-8">
            <div>
              <label htmlFor="name">Enter verification code</label>
              {/* <input type="text" /> */}
              <div className="flex gap-2 mt-[1em]">
                <Input
                  placeholder=""
                  className="w-[4em] h-[4em] text-center"
                  name="name"
                  maxLength={1}
                />
                <Input
                  placeholder=""
                  className="w-[4em] h-[4em] text-center"
                  name="name"
                  maxLength={1}
                />
                <Input
                  placeholder=""
                  className="w-[4em] h-[4em] text-center"
                  name="name"
                  maxLength={1}
                />
                <Input
                  placeholder=""
                  className="w-[4em] h-[4em] text-center"
                  name="name"
                  maxLength={1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

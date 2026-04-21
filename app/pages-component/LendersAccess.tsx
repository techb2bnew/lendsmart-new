import Image from "next/image";

export default function LendersAccess() {
  const items = [
    "Compare suitable loan options",
    "Help identify competitive solutions",
    "Streamline the finance application process",
  ];

  return (
    <section className="bg-white px-4 py-12 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center">
          <h2 className="text-[28px] font-extrabold text-black sm:text-[34px] lg:text-[40px]">
            Access to <span className="text-[#7cc242]">Multiple Lenders</span>
          </h2>
          <p className="mx-auto mt-2 max-w-[760px] text-[14px] leading-6 text-[#333]">
            LendSmart Mortgages works with a broad panel of lenders, giving clients access to a wider range of loan products and financing solutions.
          </p>
        </div>

        <div className="relative mt-6 overflow-hidden rounded-[12px]">
          <div className="relative h-[250px] sm:h-[320px] lg:h-[380px]">
            <Image src="/about/multiple.png" alt="Lenders meeting" fill className="object-cover" />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent p-4 sm:p-6">
            <div className="grid grid-cols-1 gap-2 text-[12px] text-white sm:grid-cols-3 sm:gap-3 sm:text-[13px]">
              {items.map((item) => (
                <p key={item} className="rounded-[6px] border border-white/20 bg-black/35 px-3 py-2">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

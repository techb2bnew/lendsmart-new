import Image from "next/image";

export default function CommitmentSection() {
  const points = [
    "Professional and honest advice",
    "Transparent communication",
    "Efficient loan processing",
    "Ongoing support even after settlement",
  ];

  return (
    <section className="bg-white px-4 py-12 lg:px-10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative h-[260px] overflow-hidden rounded-[16px] sm:h-[320px] lg:h-[360px]">
          <Image src="/about/our.png" alt="Commitment" fill className="object-cover" />
        </div>

        <div>
          <h2 className="text-[30px] font-extrabold leading-tight text-black lg:text-[40px]">
            Our Commitment to You
          </h2>
          <div className="mt-4 border-l-[5px] border-[#79c44a] pl-4">
            <p className="text-[15px] font-semibold text-black">When you work with LendSmart Mortgages, you can expect:</p>
            <ul className="mt-2 space-y-1 text-[15px] text-[#1f1f1f]">
              {points.map((point) => (
                <li key={point}>✓ {point}</li>
              ))}
            </ul>
          </div>
          <p className="mt-4 max-w-[720px] text-[15px] leading-6 text-[#333]">
            Our goal is to become your trusted lending partner for years to come.
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6">
      <Image src="/icon.png" alt="Site Link Engineers" width={120} height={120} priority />
      <h1 className="text-4xl font-bold tracking-tight">
        Site Link Engineers, Coming Soon!
      </h1>
    </div>
  );
}

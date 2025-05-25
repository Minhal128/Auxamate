import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-auto h-8">
      <Image src="/logo.png" alt="AUXAMATE Logo" width={120} height={32} className="object-contain" priority />
    </div>
  )
}

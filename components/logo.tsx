import Image from "next/image"

export function Logo() {
  return (
    <div className="relative w-8 h-8">
      <Image src="/logo.png" alt="AUXAMATE Logo" width={32} height={32} className="object-contain" />
    </div>
  )
}

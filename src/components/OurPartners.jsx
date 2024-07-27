import Image from "next/image";

export default function OurPartners() {
  return (
    <div className="mt-16 mx-7 lg:mx-0">
      <span className="block text-center text-sm text-amber-600">
        TRUSTED PARTNERS
      </span>
      <div className="flex items-center justify-center flex-wrap mt-3 space-x-7 lg:space-x-16 space-y-5">
        <Image
          src="/images/partners/shoppe.png"
          width={100}
          height={60}
          className="lg:-mt-1 mt-3"
        />
        <Image src="/images/partners/lazada.png" width={60} height={60} />
        <Image src="/images/partners/jne.png" width={80} height={60} />
        <Image src="/images/partners/mixue.png" width={80} height={60} />
        <Image src="/images/partners/temp.png" width={80} height={60} />
        <Image src="/images/partners/greendields.png" width={80} height={60} />
        <Image src="/images/partners/yusen.png" width={80} height={60} />
      </div>
    </div>
  );
}

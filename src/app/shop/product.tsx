import Image from 'next/image';

export default function products() {
  return (
    <div className="flex flex-col items-center my-8 py-24">
      
      <div className="flex flex-wrap justify-center mt-6 gap-6">
        <div className="flex flex-col items-center">
          <Image src="/p3.jpg" alt="Trenton modular sofa_3" width={200} height={200} />
          <p className="mt-2">Trenton modular sofa_3</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/p1.jpg" alt="Granite dining table with dining chair" width={200} height={200} />
          <p className="mt-2">Granite dining table with dining chair</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/p4.jpg" alt="Outdoor bar table and stool" width={200} height={200} />
          <p className="mt-2">Outdoor bar table and stool</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/p9.jpg" alt="Plain console with teak mirror" width={200} height={200} />
          <p className="mt-2">Plain console with teak mirror</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-6 gap-6">
        <div className="flex flex-col items-center">
          <Image src="/lc1.png" alt="Trenton modular sofa_3" width={200} height={200} />
          <p className="mt-2">Maya sofa three seater</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/round.png" alt="Granite dining table with dining chair" width={200} height={200} />
          <p className="mt-2">Round coffee table_color 2</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/p13.png" alt="Outdoor bar table and stool" width={200} height={200} />
          <p className="mt-2">Granite square side table</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/p1.jpg" alt="Plain console with teak mirror" width={200} height={200} />
          <p className="mt-2">Granite dining table with dining chair</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-6 gap-6">
        <div className="flex flex-col items-center">
          <Image src="/lch.png" alt="Trenton modular sofa_3" width={200} height={200} />
          <p className="mt-2">Granite square side table</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/p8.png" alt="Granite dining table with dining chair" width={200} height={200} />
          <p className="mt-2">Reclaimed teak coffee table</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/sf.png" alt="Outdoor bar table and stool" width={200} height={200} />
          <p className="mt-2">Maya Sofa Three Seater</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/p7.png" alt="Plain console with teak mirror" width={200} height={200} />
          <p className="mt-2">Round coffee table_color 2</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-6 gap-6">
        <div className="flex flex-col items-center">
          <Image src="/p3.jpg" alt="Trenton modular sofa_3" width={200} height={200} />
          <p className="mt-2">Trenton modular sofa_3</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/p1.jpg" alt="Granite dining table with dining chair" width={200} height={200} />
          <p className="mt-2">Granite dining table with dining chair</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/p4.jpg" alt="Outdoor bar table and stool" width={200} height={200} />
          <p className="mt-2">Outdoor bar table and stool</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/p9.jpg" alt="Plain console with teak mirror" width={200} height={200} />
          <p className="mt-2">Plain console with teak mirror</p>
          <p className="font-semibold">Rs. 25,000.00</p>
        </div>
      </div>
      <button className="mt-6 py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700">View More</button>
     
    </div>
  );
}
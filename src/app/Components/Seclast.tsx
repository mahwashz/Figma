import Image from "next/image";

export default function Seclast() {
    return (
     
        <div className="flex items-center justify-center bg-pink p-6">
            <Image width={200} height={200} 
        src="/sofa.png" 
        alt="Asgaard sofa" 
        className="w-1/2 h-auto object-cover"
      /> <div className="flex flex-col">
      <h2 className="text-muted font-bold">New Arrivals</h2>
      <h1 className="text-2xl font-bold text-primary">Asgaard sofa</h1>
      <button className="mt-4 bg-secondary text-secondary-foreground  hover:bg-secondary/80 py-2 px-4 rounded-lg">
        Order Now
      </button>
    </div>
         
        </div>
    )
}
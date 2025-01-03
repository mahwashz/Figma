import Image from "next/image";

export default function Insta() {
  return (
    <div className="bg-card p-8 text-center">
      {/* Image Section */}
      <div className="relative h-[300px] w-full mb-6">
        <Image
          src="/insta.jpeg" // Replace this with your image URL
          alt="Follow our store on Instagram for updates and exclusive content."
          style={{ objectFit: "cover" }} // Proper styling for Next.js image
          className="rounded-lg"
          fill // Ensures the image covers the parent container
        />
      </div>

      {/* Title Section */}
      <h2 className="text-3xl font-bold text-foreground">
        Follow Us on Instagram
      </h2>

      {/* Description Section */}
      <p className="text-muted-foreground mt-2">
        Follow our store on Instagram for updates and exclusive content. Stay
        connected!
      </p>

      {/* Button Section */}
      <button className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 py-2 px-4 rounded-lg">
        Follow Us
      </button>
    </div>
  );
}
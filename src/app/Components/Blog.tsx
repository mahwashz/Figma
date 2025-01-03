import Image from "next/image";

      export default function Blog() {
        return (
          <>
          <section className="py-10">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-primary">Our Blogs</h2>
              <p className="text-muted-foreground">Find a bright ideal to suit your taste with our great selection</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between px-4">
              <div className="bg-card p-4 rounded-lg shadow-md mb-6 md:mb-0">
                <Image width={200} height={200} 
                
                  alt="blog-1"
                  src="/p10.jpg"
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-4 font-semibold">Going all-in with millennial design</h3>
                <p className="text-muted-foreground">5 min</p>
                <p className="text-muted-foreground">12th Oct 2022</p>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-2 p-2 rounded">
                  Read More
                </button>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-md mb-6 md:mb-0">
                <Image width={200} height={200} 
              
                  alt="blog-2"
                  src="/p6.jpg"
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-4 font-semibold">Going all-in with millennial design</h3>
                <p className="text-muted-foreground">5 min</p>
                <p className="text-muted-foreground">12th Oct 2022</p>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-2 p-2 rounded">
                  Read More
                </button>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-md">
                <Image width={200} height={200} 
                 
                  alt="blog-3"
                  src="/p7.jpg"
                  className="w-full h-48 object-cover rounded-md"
                />
                <h3 className="mt-4 font-semibold">Going all-in with millennial design</h3>
                <p className="text-muted-foreground">5 min</p>
                <p className="text-muted-foreground">12th Oct 2022</p>
                <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 mt-2 p-2 rounded">
                  Read More
                </button>
              </div>
            </div>
            <div className="text-center mt-6">
              <button className="text-primary underline">View All Post</button>
            </div>
          </section></>
        );
      }
     
      
     
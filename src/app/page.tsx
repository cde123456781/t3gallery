import { Show } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { getImages } from "~/server/queries";

import Image from "next/image";


export const dynamic = "force-dynamic";


async function Images() {
  const images = await getImages();
  
  return (<div className="flex flex-wrap justify-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <Link href={"/image/" + image.id}>
              <Image src={image.url} style={{objectFit:"contain"}} width={480} height={480} alt={image.name}/>
            </Link>
            <div>{image.name}</div>
          </div>
      
        ))}

      </div>);
}


export default async function HomePage() {

    return (
    <main className="">
      <Show when="signed-out">
        <div className="h-full w-full text-2xl">Please sign in</div>
      </Show>
      <Show when="signed-in">
          <Images/>
      </Show>
    </main>
  );
}

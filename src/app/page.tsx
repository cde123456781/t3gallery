import { Show } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";


async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (<div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-48 flex-col">
            <img src={image.url} alt={image.name}/>
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

import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";


export default async function FullPageImageView(props: {photoId: number}) {
  const image = await getImage(props.photoId);

  const uploaderInfo = await (await clerkClient()).users.getUser(image.userId);
  return (
    <div className="flex w-full h-full min-w-0">
        <div className="flex-shrink flex justify-center items-center">
            <img src={image.url} className="object-contain flex-shrink"/>
        </div>
        <div className="w-48 flex flex-col flex-shrink-0 border-l">
           <div className="border-b p-2 text-center text-lg">{image.name}</div> 

           <div className="flex flex-col p-2">
                <span>
                    Uploaded by
                </span>
                <span>
                    {uploaderInfo.username}
                </span>
            </div>

            <div className="flex flex-col p-2">
                <span>
                    Created On
                </span>
                <span>
                    {image.createdAt.toLocaleDateString()}
                </span>
            </div>
        </div>
    </div>
  );
}
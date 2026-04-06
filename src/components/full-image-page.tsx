import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);

  const uploaderInfo = await (await clerkClient()).users.getUser(image.userId);
  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="flex-shrink object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>

        <div className="flex flex-col p-2">
          <span>Uploaded by</span>
          <span>{uploaderInfo.username}</span>
        </div>

        <div className="flex flex-col p-2">
          <span>Created On</span>
          <span>{image.createdAt.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}

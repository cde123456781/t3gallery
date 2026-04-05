import FullPageImageView from "~/components/full-image-page";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  const idAsNum = Number(photoId);
  if (Number.isNaN(idAsNum)) throw new Error("Invalid Id");
  return <div><FullPageImageView photoId={idAsNum}/></div>;
}
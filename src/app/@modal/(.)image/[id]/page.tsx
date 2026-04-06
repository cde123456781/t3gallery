//import { Modal } from "./modal";

import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNum = Number(photoId);
  if (Number.isNaN(idAsNum)) throw new Error("Invalid Id");

  return (
    <Modal>
      <FullPageImageView photoId={idAsNum} />
    </Modal>
  );
}

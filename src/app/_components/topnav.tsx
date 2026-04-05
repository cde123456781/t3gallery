'use client'

import { Show, SignInButton, UserButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
      <div>Gallery</div>
      <div className="flex flex-row items-center gap-4">
        <Show when="signed-out">
            <SignInButton/>
        </Show>
        <Show when="signed-in">
            <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {router.refresh();}}/>
            <UserButton/>
        </Show>
      </div>
    </nav>
  );
}
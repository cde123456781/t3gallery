import { Show, SignInButton, UserButton } from "@clerk/nextjs"
import { SimpleUploadButton } from "./simple-upload-button";


export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-2 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row items-center gap-4">
        <Show when="signed-out">
            <SignInButton/>
        </Show>
        <Show when="signed-in">
            <SimpleUploadButton/>
            <UserButton/>
        </Show>
      </div>
    </nav>
  );
}
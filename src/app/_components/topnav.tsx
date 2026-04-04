import { Show, SignInButton, UserButton } from "@clerk/nextjs"

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
      <div>Gallery</div>
      <div>
        <Show when="signed-out">
            <SignInButton/>
        </Show>
        <Show when="signed-in">
            <UserButton/>
        </Show>
      </div>
    </nav>
  );
}
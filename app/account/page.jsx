//account page
import {auth} from "@/app/_lib/auth"
export const metadata = {
  title:"Guest area",
};
async function Page() {
  const session = await auth();
  console.log(session);
  return (
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welecome {session.user.name}
      </h2>
  );
}

export default Page;

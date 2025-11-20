import { auth, signOut } from "@/auth";
import { db } from "@/lib/db";



// Needs to be changed. Just wanted to find user info from db.

export default async function Dashboard() {
    const session = await auth();
    console.log(session)

    return (
        <>
            <div className="flex items-center justify-center flex-col gap-y-[10px]">
                {JSON.stringify(session)}
                <form
                    action={async () => {
                        "use server";
                        await signOut();
                    }}
                >
                    <button type="submit" className="cursor-pointer bg-blue-300 rounded-sm p-1.5">
                        Sign Out
                    </button>
                </form>
            </div>
        </>
    )
}

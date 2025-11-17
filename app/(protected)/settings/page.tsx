import { auth, signOut } from "@/auth";
import React from "react";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <>
      <div className="">
        {JSON.stringify(session)}
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit" className="cursor-pointer bg-red-600">
            Sign Out
          </button>
        </form>
      </div>
    </>
  );
};

export default SettingsPage;

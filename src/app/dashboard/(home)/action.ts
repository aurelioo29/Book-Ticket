"use server";

import { getUser, lucia } from "@/lib/auth";
import { ActionResult } from "../(auth)/signin/form/action";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout(): Promise<ActionResult> {
  const { session } = await getUser();

  if (!session) {
    return {
      errorTitle: "Error",
      errorDesc: ["Unauthorized"],
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();

  const cookieStore = await cookies(); // Tambahkan await di sini
  cookieStore.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/dashboard/signin");
}

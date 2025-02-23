import { Metadata } from "next";
import React, { FC } from "react";
import FormSignIn from "./form";

// interface SignInPageProps {}

export const metadata: Metadata = {
  title: "Dashboard | Sign In",
};

const SignInPage: FC = ({}) => {
  return <FormSignIn />;
};

export default SignInPage;

"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { Social } from "./social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerlabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerlabel,
  backButtonLabel,
  backButtonHref,
  showSocial = true,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerlabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="w-full items-center justify-center">
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
  );
};

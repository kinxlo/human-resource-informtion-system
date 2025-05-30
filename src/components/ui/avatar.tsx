"use client";

import { cn } from "@/lib/utils";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

function Avatar({ className, ...properties }: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className)}
      {...properties}
    />
  );
}

function AvatarImage({ className, ...properties }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...properties}
    />
  );
}

function AvatarFallback({ className, ...properties }: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn("bg-muted flex size-full items-center justify-center rounded-full", className)}
      {...properties}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };

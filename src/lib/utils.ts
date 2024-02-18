import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEvents(city: string) {
  const events = await prisma.buzzEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
  });

  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.buzzEvent.findUnique({
    where: {
      slug,
    },
  });

  return event;
}

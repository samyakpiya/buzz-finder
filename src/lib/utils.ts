import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEvents(city: string, page = 1) {
  const events = await prisma.buzzEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });

  let totalCount;
  if (city === "all") {
    totalCount = await prisma.buzzEvent.count();
  } else {
    totalCount = await prisma.buzzEvent.count({
      where: {
        city: city === "all" ? undefined : capitalize(city),
      },
    });
  }

  return { events, totalCount };
}

export async function getEvent(slug: string) {
  const event = await prisma.buzzEvent.findUnique({
    where: {
      slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
}

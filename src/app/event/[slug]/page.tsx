import H1 from "@/components/h1";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = params;
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );

  const event = await response.json();

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center">
        <Image
          src={event.imageUrl}
          className="object-cover blur-3xl z-0 "
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />

        <div className="z-1 flex flex-col lg:flex-row gap-6 lg-gap-16 relative py-14 md:py-20">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className=" text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="bg-white/20 text-lg capitalize mt-5 lg:mt-auto w-[95vw] focus:scale-105 sm:w-full rounded-md bg-blur border-white/10 border-2 py-2 hover:scale-105 active:scale-[1.02] transition">
              Get tickets
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

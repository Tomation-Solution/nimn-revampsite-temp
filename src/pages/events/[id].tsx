import { event_data } from "@/assets/data";
import {
  EventDetailsShowCase,
  EventDetailsShowCard,
  EventPricing,
} from "@/components";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface EventProps {
  event?: Event;
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  type: string;
  image: any;
  // add any other properties of the event here
}

function EventDetails({ event }: EventProps) {
  return (
    <div className="">
      {/* <EventDetailsShowCase /> */}

      <EventDetailsShowCard
        key={event?.id}
        title={event?.title ?? "Default Title"}
        description={event?.description ?? "Default Description"}
        type={event?.type ?? "Default Type"}
        image={event?.image}
      />
      <EventPricing
        title={event?.title ?? "Default Title"}
        description={event?.description ?? "Default Description"}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = event_data.map((event) => ({
    params: { id: event.id.toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<EventProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  const event = event_data.find((event) => event.id.toString() === params?.id);
  return {
    props: {
      event,
    },
  };
};

export default EventDetails;

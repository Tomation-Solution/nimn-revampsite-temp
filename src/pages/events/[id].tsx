import { EventDetailsShowCase, EventDetailsShowCard } from '@/components';
import { Eventdata } from '@/components/Events/Events';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

interface EventProps {
    event?: Event;
}

interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    type: string;
    // add any other properties of the event here
}

function EventDetails({ event }: EventProps) {
    return (
        <div className=''>
            <EventDetailsShowCase />

            <EventDetailsShowCard
                key={event?.id}
                title={event?.title ?? 'Default Title'}
                description={event?.description ?? 'Default Description'}
                type={event?.type ?? 'Default Type'}

            />

        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Eventdata.map((event) => ({
        params: { id: event.id.toString() },
    }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<EventProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    const event = Eventdata.find((event) => event.id.toString() === params?.id);
    return {
        props: {
            event,
        },
    };
};

export default EventDetails;

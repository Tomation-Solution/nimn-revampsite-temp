import { InsightDetailsShowCase, InsightDetailsShowCard, } from '@/components';
import { Insightdata } from '@/components/Insight/Insights';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

interface InsightProps {
    Insight?: Insight;
}

interface Insight {
    id: number;
    title: string;
    description: string;
    date: string;
    type: string;
    // add any other properties of the Insight here
}

function InsightDetails({ Insight }: InsightProps) {
    return (
        <div className=''>
            <InsightDetailsShowCase />

            <InsightDetailsShowCard
                key={Insight?.id}
                title={Insight?.title ?? 'Default Title'}
                description={Insight?.description ?? 'Default Description'}
                type={Insight?.type ?? 'Default Type'}/>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Insightdata.map((Insight) => ({
        params: { id: Insight.id.toString() },
    }));
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<InsightProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    const Insight = Insightdata.find((Insight) => Insight.id.toString() === params?.id);
    return {
        props: {
            Insight,
        },
    };
};

export default InsightDetails;

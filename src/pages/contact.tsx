import React from 'react'
import HeadComponent from "@/components/head";
import {
    ContactShowcase,
    ContactForm,


} from "@/components";

function contact() {
    return (
        <>
            <HeadComponent pageName="ContactForm" />
            <main>
                <ContactShowcase />
                < ContactForm />
            </main>

        </>
    )
}

export default contact

import React from 'react';
import Form from './ReusedComp';

/*
create a newsletter form based on reused form
return a form with two input items 
submit button says "sign up for newsletter"
*/

const NewsletterForm = () => {
    const handleNewsletterSignup = (values) => {
        console.log(values);
    }
        
    
    return (
        <Form
        inputItems={[
            {
                id: 1,
                label: 'Email',
            },
            {
                id: 2,
                label: 'Name',
            }
        ]}
        headerText="Newsletter"
        submitButtonText="Sign up for newsletter"
        onSubmit={handleNewsletterSignup}
        />
    );
    };    

export default NewsletterForm;

import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import NewsLetterForm from './NewsLetterForm'

const NewsLetterSubscribe = () => {
    const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL
  return (
    <MailchimpSubscribe
    url={ url as string }
    render={ ( props: any ) => {
      const { subscribe, status, message } = props || {};
      return (
        <NewsLetterForm
          status={ status }
          message={ message }
          onValidated={ (formData: any) => subscribe( formData ) }
        />
      );
    } }
  />
  )
}

export default NewsLetterSubscribe
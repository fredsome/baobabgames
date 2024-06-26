import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Subscription } from "./Subscription";

export const MailchimpSubscription = () => {
  const postUrl = `https://group.us21.list-manage.com/subscribe/post?u=d4ca7649f3d65f3f8e4f31ccf&amp;&id=1225169726&amp;f_id=006c62e1f0`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Subscription
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}

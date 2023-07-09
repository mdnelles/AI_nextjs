import { hStyle, headerTop } from "app/constants/styles";
import React from "react";

const PrivacyPolicy = () => {
   return (
      <div>
         <h1 className={headerTop}>Privacy Policy for AI Next App</h1>
         <p>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you use the AI Next App (referred
            to as "the App").
         </p>
         <h2 className={hStyle}>1. Collection of Information</h2>
         <p>
            We may collect certain personally identifiable information from you
            when you use the App. This information may include your name, email
            address, and any other information you provide to us.
         </p>
         <h2 className={hStyle}>2. Use of Information</h2>
         <p>
            We use the collected information to provide, maintain, and improve
            the functionality of the App, as well as to communicate with you,
            respond to your inquiries, and provide you with updates or important
            information related to the App. We may also use your information to
            personalize your experience and enhance the features and
            functionality of the App.
         </p>
         <h2 className={hStyle}>3. Sharing of Information</h2>
         <p>
            We may share your personal information with trusted third-party
            service providers who assist us in operating the App and providing
            services to you. These third-party providers have access to your
            information only to the extent necessary to perform their tasks on
            our behalf and are obligated not to disclose or use it for any other
            purpose.
         </p>
         <p>
            We may also disclose your personal information if required by law or
            in response to valid legal requests or orders.
         </p>
         <h2 className={hStyle}>4. Data Retention</h2>
         <p>
            We will retain your personal information for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy unless a longer
            retention period is required or permitted by law.
         </p>
         <h2 className={hStyle}>5. Security</h2>
         <p>
            We implement reasonable security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. However, please note that no method of transmission
            over the internet or electronic storage is completely secure, and we
            cannot guarantee absolute security.
         </p>
         <h2 className={hStyle}>6. Children's Privacy</h2>
         <p>
            The App is not intended for use by individuals under the age of 13.
            We do not knowingly collect personal information from children under
            13 years of age. If we discover that we have collected personal
            information from a child under 13, we will take immediate steps to
            delete that information.
         </p>
         <h2 className={hStyle}>7. Changes to this Privacy Policy</h2>
         <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. We encourage you to review this Privacy Policy
            periodically for any updates. The revised Privacy Policy will be
            effective when posted.
         </p>
         <h2 className={hStyle}>8. Contact Us</h2>
         <p>
            If you have any questions or concerns regarding this Privacy Policy
            or our practices, please contact us at{" "}
            <a href='mailto:process.env.AMIN_EMAIL'>process.env.AMIN_EMAIL</a>.
         </p>
         <p>
            By using the AI Next App, you acknowledge that you have read and
            understood this Privacy Policy and agree to the collection, use, and
            disclosure of your personal information as described herein.
         </p>
      </div>
   );
};

export default PrivacyPolicy;

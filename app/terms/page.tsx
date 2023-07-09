import { hStyle, headerTop } from "app/constants/styles";
import React from "react";

const TermsOfService = () => {
   return (
      <div>
         <h1 className={headerTop}>Terms of Service for AI Next App</h1>
         <p>
            These Terms of Service ("Terms") govern your use of the AI Next App
            (referred to as "the App") provided by [Your Company Name] (referred
            to as "we" or "us"). By using the App, you agree to be bound by
            these Terms. If you do not agree with any part of these Terms,
            please refrain from using the App.
         </p>
         <h2 className={hStyle}>1. Use of the App</h2>
         <p>
            The App is provided for your personal and non-commercial use. You
            may not modify, copy, distribute, transmit, display, perform,
            reproduce, publish, license, create derivative works from, transfer,
            or sell any information, software, products, or services obtained
            from the App.
         </p>
         <h2 className={hStyle}>2. User Conduct</h2>
         <p>
            You agree to use the App only for lawful purposes and in a manner
            that does not infringe upon the rights of others or restrict or
            inhibit anyone else's use and enjoyment of the App. You shall not
            engage in any conduct that may be harmful, offensive, or
            objectionable while using the App.
         </p>
         <h2 className={hStyle}>3. Intellectual Property</h2>
         <p>
            All intellectual property rights in the App, including but not
            limited to copyrights, trademarks, trade secrets, and patents, are
            owned by us or our licensors. You may not use, reproduce, or
            distribute any intellectual property belonging to us without our
            prior written consent.
         </p>
         <h2 className={hStyle}>4. Disclaimer of Warranties</h2>
         <p>
            The App is provided on an "as is" and "as available" basis, without
            any warranties of any kind, whether express or implied. We do not
            guarantee that the App will be error-free, uninterrupted, secure, or
            free of viruses or other harmful components. Your use of the App is
            at your own risk.
         </p>
         <h2 className={hStyle}>5. Limitation of Liability</h2>
         <p>
            We shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or in connection
            with your use of the App. In no event shall our total liability to
            you for all damages exceed the amount paid by you, if any, for
            accessing the App.
         </p>
         <h2 className={hStyle}>6. Modifications to the Terms</h2>
         <p>
            We reserve the right to modify these Terms at any time without prior
            notice. By continuing to use the App after any modifications, you
            agree to be bound by the updated Terms. It is your responsibility to
            review these Terms periodically for any changes.
         </p>
         <h2 className={hStyle}>7. Governing Law</h2>
         <p>
            These Terms shall be governed by and construed in accordance with
            the laws of [Your Jurisdiction]. Any disputes arising under or in
            connection with these Terms shall be subject to the exclusive
            jurisdiction of the courts located in [Your Jurisdiction].
         </p>
         <h2 className={hStyle}>8. Contact Us</h2>
         <p>
            If you have any questions or concerns regarding these Terms, please
            contact us at{" "}
            <a href='mailto:process.env.AMIN_EMAIL'>process.env.AMIN_EMAIL</a>.
         </p>
         <p>
            By using the AI Next App, you acknowledge that you have read,
            understood, and agreed to these Terms of Service.
         </p>
      </div>
   );
};

export default TermsOfService;

import React from "react";

const COMPANY_NAME = "buildquick.app";
const WEBSITE_URL = "https://buildquick.app";
const LAW_GOVERNING = "Israel";
const LICENSE_ISSUE_DATE = "07 Nov 2024";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-700">
          By using {COMPANY_NAME}, you confirm your acceptance of, and agree to
          be bound by, these terms and conditions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          2. Agreement to Terms and Conditions
        </h2>
        <p className="text-gray-700">
          This Agreement takes effect on the date on which you first use the{" "}
          {COMPANY_NAME} application.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. License Duration</h2>
        <p className="text-gray-700">
          This license is perpetual, with the exception of you breaking any part
          of this license, in which case you lose all rights under the license.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Product Usage</h2>
        <p className="text-gray-700">
          By using {COMPANY_NAME}, you agree to receive important product
          updates from {COMPANY_NAME} via the email linked with your Google
          account or the email you used to register your account. You can
          opt-out of these product updates anytime by clicking the "Unsubscribe"
          link at the bottom of each email. We only send important product
          updates.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Disclaimer</h2>
        <p className="text-gray-700">
          It is not warranted that {COMPANY_NAME} will meet your requirements or
          that its operation will be uninterrupted or error-free. All express
          and implied warranties or conditions not stated in this Agreement
          (including without limitation, loss of profits, loss or corruption of
          data, business interruption or loss of contracts), so far as such
          exclusion or disclaimer is permitted under the applicable law, are
          excluded and expressly disclaimed. This Agreement does not affect your
          statutory rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          6. Warranties and Limitation of Liability
        </h2>
        <p className="text-gray-700">
          {COMPANY_NAME} does not give any warranty, guarantee, or other term as
          to the quality, fitness for purpose, or otherwise of the software.{" "}
          {COMPANY_NAME} shall not be liable to you by reason of any
          representation (unless fraudulent), or any implied warranty,
          condition, or other term, or any duty at common law, for any loss of
          profit or any indirect, special, or consequential loss, damage, costs,
          expenses, or other claims (whether caused by {COMPANY_NAME}'s
          negligence or the negligence of its servants or agents or otherwise)
          which arise out of or in connection with the provision of any goods or
          services by {COMPANY_NAME}. {COMPANY_NAME} shall not be liable or
          deemed to be in breach of contract by reason of any delay in
          performing, or failure to perform, any of its obligations if the delay
          or failure was due to any cause beyond its reasonable control.
          Notwithstanding contrary clauses in this Agreement, in the event that{" "}
          {COMPANY_NAME} is deemed liable to you for breach of this Agreement,
          you agree that {COMPANY_NAME}'s liability is limited to the amount
          actually paid by you for your services or software, which amount is
          calculated in reliance upon this clause. You hereby release{" "}
          {COMPANY_NAME} from any and all obligations, liabilities, and claims
          in excess of this limitation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Responsibilities</h2>
        <p className="text-gray-700">
          {COMPANY_NAME} is not responsible for what the user does with the
          user-generated content.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. General Terms and Law</h2>
        <p className="text-gray-700">
          This Agreement is governed by the laws of {LAW_GOVERNING}. You
          acknowledge that no joint venture, partnership, employment, or agency
          relationship exists between you and {COMPANY_NAME} as a result of your
          use of these services. You agree not to hold yourself out as a
          representative, agent, or employee of {COMPANY_NAME}. You agree that{" "}
          {COMPANY_NAME} will not be liable by reason of any representation,
          act, or omission to act by you.
        </p>
      </section>

      <footer className="text-sm text-gray-500 mt-4">
        Last updated: {LICENSE_ISSUE_DATE}
      </footer>
    </div>
  );
};

export default TermsAndConditions;

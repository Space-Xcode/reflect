import type { Metadata } from "next";
import CustomerSupportChat from "@/components/support/customer-support-chat";

export const metadata: Metadata = {
  title: "Customer Support | Reflect",
  description: "Get real-time assistance from our support team",
};

export default function SupportPage() {
  return (
    <div className="cosmic-bg pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 purple-gradient-text">
            Customer Support
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Need help with Reflect? Our support team is here to assist you.
            Start a conversation below and we'll respond as soon as possible.
          </p>
          <p className="text-lg text-gray-400 mb-4">
            Please note that our support team is available from 9 AM to 5 PM
            (UTC) on weekdays.
          </p>
          <p className="text-lg text-gray-400 mb-8">
            For urgent issues outside of these hours, please email us at{" "}
            <a href="mailto:support@reflect.com">support@reflect.com</a>.
          </p>
          <CustomerSupportChat />
          <div className="text-center mt-12">
            <p className="text-lg text-gray-400">
              We aim to respond within 24 hours during business days.
            </p>
            <p className="text-lg text-gray-400">
              Thank you for reaching out to Reflect Support!
            </p>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-400">
              If you have any feedback or suggestions, feel free to{" "}
              <a
                href="https://reflect.com/feedback"
                className="text-blue-500 hover:underline"
              >
                share your thoughts with us.
              </a>
            </p>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-400">
              By using our support services, you agree to our{" "}
              <a
                href="https://reflect.com/support-terms"
                className="text-blue-500 hover:underline"
              >
                Support Terms of Service
              </a>
              .
            </p>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-400">
              For more information about Reflect, visit our{" "}
              <a
                href="https://reflect.com"
                className="text-blue-500 hover:underline"
              >
                homepage
              </a>
              .
            </p>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-400">
              If you need help with billing or account issues, please visit our{" "}
              <a
                href="https://reflect.com/billing-support"
                className="text-blue-500 hover:underline"
              >
                Billing Support page
              </a>
              .
            </p>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-400">
              For technical issues, please check our{" "}
              <a
                href="https://reflect.com/technical-support"
                className="text-blue-500 hover:underline"
              >
                Technical Support page
              </a>
              .
            </p>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-400">
              If you have questions about our products or services, please
              visit our{" "}
              <a
                href="https://reflect.com/product-support"
                className="text-blue-500 hover:underline"
              >
                Product Support page
              </a>
            </p>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-400">
                For general inquiries, you can reach us at{" "}
                <a
                  href="https://reflect.com/contact"
                  className="text-blue-500 hover:underline"
                >
                  Contact Us
                </a>
                . You can also review our{" "}
                <a
                  href="https://reflect.com/terms-of-service"
                  className="text-blue-500 hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="https://reflect.com/privacy"
                  className="text-blue-500 hover:underline"
                >
                  Privacy Policy
                </a>
                <data className="text-blue-500 hover:underline"></data>
                For more information about how we handle your data and provide our service, please review our{" "}
                <a
                  href="https://reflect.com/data-policy"
                  className="text-blue-500 hover:underline"
                >
                  Data Policy
                </a>
                .
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

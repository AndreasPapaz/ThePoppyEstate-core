export type TermsSection = {
  id: string;
  title: string;
  content: string;
};

export type TermsContent = {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: TermsSection[];
};

export const terms: TermsContent = {
  title: "Terms of Service",
  lastUpdated: "October 2, 2026",
  intro:
    "These Terms of Service govern your use of The Poppy Estate venue and related services. Please read these terms carefully before booking an event.",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content:
        "[Placeholder — replace with The Poppy Estate's terms regarding acceptance and agreement to these terms of service]",
    },
    {
      id: "bookings-inquiries",
      title: "Bookings & Inquiries",
      content:
        "[Placeholder — replace with The Poppy Estate's terms regarding the booking process, inquiry procedures, availability confirmation, and reservation requirements]",
    },
    {
      id: "deposits-payments",
      title: "Deposits & Payments",
      content:
        "[Placeholder — replace with The Poppy Estate's terms regarding deposit amounts, payment schedules, accepted payment methods, final payment deadlines, and any applicable fees or charges]",
    },
    {
      id: "cancellations-rescheduling",
      title: "Cancellations & Rescheduling",
      content:
        "[Placeholder — replace with The Poppy Estate's terms regarding cancellation policies, refund eligibility, rescheduling procedures, advance notice requirements, and any associated fees]",
    },
    {
      id: "use-of-venue",
      title: "Use of the Venue",
      content:
        "[Placeholder — replace with The Poppy Estate's terms regarding permitted uses of the venue, prohibited activities, guest capacity limits, operating hours, access restrictions, and client responsibilities during events]",
    },
    {
      id: "vendors",
      title: "Vendors & Service Providers",
      content:
        "[Placeholder — replace with The Poppy Estate's terms regarding outside vendors, preferred vendor lists, vendor requirements, insurance obligations, setup and breakdown procedures, and vendor access to the venue]",
    },
    {
      id: "liability-insurance",
      title: "Liability & Insurance",
      content:
        "[Placeholder — replace with The Poppy Estate's terms regarding liability limitations, client insurance requirements, indemnification clauses, damage responsibilities, and claims procedures]",
    },
    {
      id: "alcohol-catering",
      title: "Alcohol & Catering",
      content:
        "[Placeholder — replace with The Poppy Estate's terms regarding alcohol service policies, licensed bartender requirements, catering options, outside catering permissions, and food and beverage restrictions]",
    },
    {
      id: "decorations-setup",
      title: "Decorations & Setup",
      content:
        "[Placeholder — replace with The Poppy Estate's terms regarding decoration guidelines, installation restrictions, prohibited items (e.g., open flames, confetti), setup and breakdown timelines, and venue protection requirements]",
    },
    {
      id: "force-majeure",
      title: "Force Majeure",
      content:
        "[Placeholder — replace with The Poppy Estate's terms regarding circumstances beyond reasonable control (weather, natural disasters, public health emergencies) and how such events affect bookings and obligations]",
    },
    {
      id: "privacy",
      title: "Privacy",
      content:
        "[Placeholder — replace with The Poppy Estate's terms regarding collection, use, and protection of client information, photography consent, and data privacy practices]",
    },
    {
      id: "modifications",
      title: "Changes to These Terms",
      content:
        "[Placeholder — replace with The Poppy Estate's terms regarding the right to modify these terms, notification procedures for changes, and client acknowledgment requirements]",
    },
    {
      id: "contact",
      title: "Contact Information",
      content:
        "[Placeholder — replace with The Poppy Estate's contact information for questions regarding these terms, including email address, phone number, and mailing address]",
    },
  ],
};

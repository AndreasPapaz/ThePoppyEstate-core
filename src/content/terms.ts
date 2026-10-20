export type TermsSection = {
  id: string;
  title: string;
  content: string;
};

export type TermsContent = {
  eyebrow: string;
  title: string;
  notice: string;
  sections: TermsSection[];
};

export const terms: TermsContent = {
  eyebrow: "October 2026 Wedding Venue Giveaway",
  title: "Official Terms & Conditions",
  notice:
    "NO PURCHASE NECESSARY TO ENTER OR WIN. A PURCHASE WILL NOT INCREASE YOUR CHANCES OF WINNING. VOID WHERE PROHIBITED OR RESTRICTED BY LAW.",
  sections: [
    {
      id: "sponsor",
      title: "Sponsor",
      content:
        'The October 2026 Wedding Venue Giveaway ("Promotion") is sponsored by The Poppy Estate, located at 251 S River St Aurora, IL 60506 ("Sponsor").\n\nThe Promotion is not sponsored, endorsed, administered by, or associated with Instagram, Facebook, Meta, TikTok, or any other social media platform on which it may be advertised.',
    },
    {
      id: "promotion-period",
      title: "Promotion Period",
      content:
        'The Promotion begins at 12:00 a.m. Central Time ("CT") on October 1, 2026, and ends at 8:00 p.m. CT on October 31, 2026 ("Promotion Period").\n\nTo qualify for entry, an eligible in-person venue tour must be completed during the Promotion Period. Tours scheduled during the Promotion Period but completed after 8:00 p.m. CT on October 31, 2026, will not qualify.',
    },
    {
      id: "eligibility",
      title: "Eligibility",
      content:
        'The Promotion is open to legal residents of the United States who are 18 years of age or older who are planning a wedding and otherwise satisfy these Official Terms & Conditions.\n\nFor purposes of this Promotion, a "couple" means the two individuals identified at the time of entry as the individuals whose wedding would be held at The Poppy Estate. Each individual may be associated with only one entry and one couple during the Promotion Period. Duplicate entries involving either member of an already-entered couple may be voided.\n\nEmployees, officers, directors, representatives, and agents of Sponsor, as well as members of their immediate families and households, are not eligible to participate or win.\n\nSponsor reserves the right to verify the eligibility of any entrant or potential winner.',
    },
    {
      id: "how-to-enter",
      title: "How to Enter",
      content:
        "No purchase is necessary.\n\nTo receive one entry, an eligible participant must complete an in-person tour of the participating wedding venue during the Promotion Period.\n\nThe tour must physically take place at the venue. Virtual tours, telephone consultations, video calls, online inquiries, previously completed tours, and tours that are scheduled but not completed do not constitute a qualifying tour.\n\nIf a member of the couple is not local to the venue or is otherwise unable to attend the tour in person, another individual may attend and complete the in-person tour on behalf of the couple. The representative must identify the couple for whom the tour is being completed at the time of the tour. A tour completed by a representative will constitute the couple's qualifying tour and will not create a separate entry for the representative.\n\nLimit one (1) entry per couple, regardless of the number of individuals who tour on the couple's behalf or the number of qualifying tours completed during the Promotion Period. Completing additional tours will not provide additional entries or increase the couple's odds of winning.\n\nSponsor may require entrants to provide their names, email address, telephone number, anticipated wedding date, and other information reasonably necessary to administer the Promotion and verify eligibility.",
    },
    {
      id: "prize",
      title: "Prize",
      content:
        'One (1) winner will receive a credit toward qualifying wedding venue rental charges for an eligible 2027 wedding at The Poppy Estate, with a maximum value and Approximate Retail Value ("ARV") of $6,000 ("Prize").\n\nThe actual value of the Prize will depend upon the eligible venue rental selected by the winner and may be less than $6,000. If the applicable venue rental charge is less than $6,000, the winner will not receive the difference in cash, credit, refund, or other consideration.\n\nThe Prize applies only to qualifying venue rental charges. The Prize does not apply to alcohol, beverages, bar services, drink packages, catering, food, rentals, staffing, security, taxes, gratuities, service charges, third-party vendors, upgrades, add-ons, or other products or services that are not included within the venue rental charge, unless Sponsor expressly agrees otherwise in writing.\n\nThe Prize has a maximum value of $6,000. If the applicable venue rental charge is less than $6,000, the winner will not receive the difference as cash, credit, or reimbursement.\n\nIf the winner selects a wedding date, package, rental period, service, upgrade, or other option that results in charges exceeding the $6,000 Prize, the winner is solely responsible for all charges exceeding $6,000, as well as all other costs associated with the wedding that are not expressly included in the Prize.\n\nThe $6,000 Prize may not be applied toward alcohol, bar service, or any drink or beverage package under any circumstances.',
    },
    {
      id: "wedding-date-requirements",
      title: "Wedding and Date Requirements",
      content:
        "The Prize must be used for a wedding event occurring in 2027. It may not be used for another type of event or converted to a credit for a non-wedding event.\n\nAll wedding dates are subject to venue availability and Sponsor's standard booking requirements.\n\nThe Prize may not be redeemed for a holiday or blackout date. Applicable holidays and blackout dates include the below:\n\n<strong>Blackout Dates.</strong> The Prize may not be redeemed for any date designated by Sponsor as a holiday, holiday weekend, blackout date, or other restricted date. Blackout dates for 2027 include January 1–3; March 26–28; May 7–9; May 28–31; June 18–20; July 2–5; September 3–6; October 8–11; October 29–31; November 11; November 24–28; December 23–26; and December 30, 2027–January 2, 2028. Selected peak-season Saturdays / all Saturdays September–November are also excluded. All dates remain subject to venue availability.\n\nAvailability is not guaranteed for any particular date merely because the date is not designated as a blackout date.\n\nThe winner will be required to enter into Sponsor's standard venue rental agreement and comply with the venue's standard policies, rules, deadlines, payment requirements, insurance requirements, and other applicable terms. Any amounts not covered by the Prize remain the winner's responsibility.",
    },
    {
      id: "winner-selection",
      title: "Winner Selection",
      content:
        "One (1) potential winner will be selected by random drawing from all eligible entries received during the Promotion Period.\n\nThe drawing is expected to occur on or about November 1, 2026.\n\nOdds of winning depend upon the total number of eligible entries received.\n\nSponsor's decisions concerning administration of the Promotion and determination of the potential winner are final, subject to applicable law.",
    },
    {
      id: "winner-notification",
      title: "Winner Notification and Acceptance",
      content:
        "The potential winner will be notified using the email address and cellular telephone number provided in connection with the qualifying tour or Promotion entry.\n\nSponsor may contact the potential winner by email, telephone call, and/or text message.\n\nThe potential winner must respond within 72 HOURS after Sponsor's first notification attempt and provide any information reasonably requested by Sponsor to confirm eligibility and accept the Prize.\n\nAs a condition of receiving the Prize, the potential winner may be required to execute an affidavit or declaration of eligibility, liability/publicity release where lawful, prize acceptance documentation, and/or Sponsor's standard venue rental agreement.\n\nIf the potential winner cannot be contacted, does not respond within the required period, is determined to be ineligible, declines the Prize, fails to complete required documentation, or otherwise fails to comply with these Official Terms & Conditions, the potential winner may be disqualified and Sponsor may select an alternate potential winner by random drawing from the remaining eligible entries.",
    },
    {
      id: "prize-restrictions",
      title: "Prize Restrictions",
      content:
        "The Prize is non-transferable and may not be sold, assigned, exchanged, substituted, or redeemed for cash except at Sponsor's discretion where required or permitted by law.\n\nThe Prize constitutes a maximum credit of $6,000 toward eligible venue rental charges and does not guarantee that the winner's wedding or total venue costs will be limited to $6,000.\n\nAny portion of the Prize that is not used toward eligible venue rental charges will be forfeited and will not be paid to the winner in cash or applied to otherwise ineligible expenses.\n\nThe winner is responsible for any federal, state, or local taxes associated with acceptance or use of the Prize, to the extent applicable.",
    },
    {
      id: "existing-bookings",
      title: "Existing Bookings",
      content:
        "Couples who entered into a venue rental agreement before October 1, 2026 are not eligible for this Promotion.",
    },
    {
      id: "entry-verification",
      title: "Entry Verification and Disqualification",
      content:
        "Sponsor reserves the right to verify all entries and qualifying tours.\n\nAny attempt to obtain multiple entries for the same couple by using different names, email addresses, telephone numbers, representatives, or other information may result in disqualification of all associated entries.\n\nSponsor may disqualify an entrant for fraud, misrepresentation, tampering with the entry or drawing process, failure to satisfy the eligibility requirements, or violation of these Official Terms & Conditions, subject to applicable law.",
    },
    {
      id: "changes-suspension",
      title: "Changes, Suspension, or Cancellation",
      content:
        "If fraud, technical problems, acts beyond Sponsor's reasonable control, or other circumstances materially impair the integrity or proper operation of the Promotion, Sponsor reserves the right, to the extent permitted by applicable law, to modify, suspend, or terminate the Promotion and, if appropriate, select a winner from eligible entries received before such action.",
    },
    {
      id: "release-liability",
      title: "Release and Limitation of Liability",
      content:
        "To the extent permitted by applicable law, entrants agree that Sponsor and its owners, affiliates, employees, representatives, and agents will not be responsible for losses, damages, claims, or injuries arising from participation in the Promotion or acceptance or use of the Prize, except to the extent such liability cannot lawfully be excluded or limited.\n\nNothing in these Official Terms & Conditions is intended to waive or limit any right or remedy that cannot legally be waived or limited.",
    },
    {
      id: "publicity",
      title: "Publicity",
      content:
        "Except where prohibited by law, acceptance of the Prize constitutes permission for Sponsor to use the winner's name and likeness for purposes of announcing the Promotion winner and promoting the Promotion without additional compensation, subject to applicable law.\n\nAny broader use of wedding photographs, testimonials, video, or other content should be governed by a separate written release or agreement.",
    },
    {
      id: "privacy",
      title: "Privacy",
      content:
        "Information collected in connection with the Promotion will be used to administer the Promotion, verify eligibility, communicate with participants and the winner, and otherwise in accordance with Sponsor's applicable privacy policy.\n\nProviding information for purposes of entering the Promotion does not, by itself, constitute consent to receive unrelated marketing communications where separate consent is required by law.",
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content:
        "The Promotion and these Official Terms & Conditions are governed by the laws of the State of Illinois, without regard to conflict-of-law principles, except where applicable law requires otherwise.",
    },
    {
      id: "sponsor-contact",
      title: "Sponsor Contact",
      content:
        "Questions regarding the Promotion or these Official Terms & Conditions may be directed to:\n\nSasha and Andreas Papazafeiropoulos, The Poppy Estate | 251 S River St Aurora, IL 60506 | hello@thepoppyestate.com",
    },
  ],
};

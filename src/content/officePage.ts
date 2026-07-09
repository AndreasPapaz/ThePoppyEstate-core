export type StaffMember = { name: string; role: string; email: string };

export type OfficePage = {
  slug: string;
  title: string;
  heroImage: { src: string; alt: string };
  intro: string;
  historyHeading: string;
  historyBody: string;
  staffHeading: string;
  staff: StaffMember[];
};

export const officePages: OfficePage[] = [
  {
    slug: "skrifstofa-forseta",
    title: "The Office at Staðastaður",
    heroImage: {
      src: "https://cdn.sanity.io/images/hq90xi2r/production/2b62698c658551aa1297aec9685f5d1680089126-3980x2653.jpg",
      alt: "Staðastaður, the office of the President of Iceland",
    },
    intro:
      "The president's office is housed in a historic building called Staðastaður, located at Sóleyjargata 1 in Reykjavík. The president and some of her staff have offices at Staðastaður. The office staff is responsible for organising events, meetings and visits, maintaining official records, answering inquiries on behalf of the president, manage the website and other communications, overseeing finances and operations and assist the president.",
    historyHeading: "The History of Staðastaður",
    historyBody:
      "Björn Jónsson, a government minister and editor, had Staðastaður built in 1912. Besides being a leading political figure in his day, Björn was also the father of Sveinn Björnsson, who became the first president of the Republic of Iceland in 1944. Björn's wife, Elísabet Sveinsdóttir, grew up on the Snæfellsnes peninsula, on a farm called Staðastaður, from which the building takes its name. Later on, the house belonged to Kristján Eldjárn, after he had served as the country's third president. Hence, it is safe to say that Staðastaður is deeply connected to the history of Iceland's presidency. Staðastaður was designed by the architect Rögnvaldur Ólafsson, a pioneer of Icelandic architecture. The addition to the building on the side facing Fjólugata street was designed by Gunnlaugur Halldórsson. At the time Staðastaður was built, the house was located on the outskirts of Reykjavík.",
    staffHeading: "Staff of the Presidency",
    staff: [
      { name: "Sif Gunnarsdóttir", role: "Chief of Staff", email: "sif@forseti.is" },
      { name: "Atli Már Sigurðsson", role: "Caretaker at Bessastaðir", email: "atli@forseti.is" },
      { name: "Birna Þórunn Pálsdóttir", role: "Financial Manager", email: "birna@forseti.is" },
      { name: "Guðrún Dögg Guðmundsdóttir", role: "Special Advisor", email: "gudrun.d.gudmundsdottir@forseti.is" },
      { name: "Helga Kr. Einarsdóttir", role: "on leave", email: "helga@forseti.is" },
      { name: "Jóhann Gunnar Arnarsson", role: "Butler at Bessastaðir", email: "johann.g.arnarsson@forseti.is" },
      { name: "Jón Karl Helgason", role: "Specialist", email: "jon.k.helgason@forseti.is" },
      { name: "Kristín Ólafsdóttir", role: "Employee at Bessastaðir", email: "kristin.olafsdottir@forseti.is" },
      { name: "Ríkarður Már Ríkarðsson", role: "Chauffeur", email: "rikki@forseti.is" },
      { name: "Sandra Hrönn Traustadóttir", role: "Employee at Bessastaðir", email: "sandra@forseti.is" },
      { name: "Sigríður Björk Gunnarsdóttir", role: "Financial and Operations Manager", email: "sigridur.b.gunnarsdottir@forseti.is" },
      { name: "Sigrún Sandra Ólafsdóttir", role: "Employee at the President's Office", email: "sigrun.s.olafsdottir@forseti.is" },
    ],
  },
];

export function getOfficePage(slug: string) {
  return officePages.find((p) => p.slug === slug);
}

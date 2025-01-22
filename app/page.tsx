export default function Home() {
  return (
    <div className="w-screen prose dark:prose-invert bg-hero-pattern p-8">
      <h1>
        Welcome to Blockchain at the University of Washington
      </h1>
      <h1>
        Mission
      </h1>
      <p>
        Blockchain Society at the University of Washington is a non-profit organization dedicated to facilitating blockchain education and adoption, fostering the next generation of blockchain innovators, and advancing our students to the professional industry through collaboration, multidisciplinary, and networking opportunities in the **pacific northwest region**.

        Within our space, we value development, community, diversity and inclusion.
      </p>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="flex-1">
          <h2>
            Development
          </h2>
          <p>
            UW Blockchain aims to engage and support our students through many educational programs and workshops series, fostering the next generation of developers, entrepreneurs, and researchers.
          </p>
        </div>

        <div className="flex-1">
          <h2>
            Community
          </h2>
          <p>
            UW Blockchain plans to have students activites and involvements to facilitate campus initiatives, as well as to facilitate community engagement through professional networking events and regular-basis speakers event.
          </p>
        </div>
        <div className="flex-1">
          <h2>
            Diversity & Inclusion
          </h2>
          <p>
            At UW Blockchain, we commit to foster an inclusive and diverse community. We promote diverse perspectives, experiences, and identities. By committing to this, we hope to bring value to the people and the community, and further dedicating to our mission.
          </p>
        </div>
      </div>
    </div>
  );
}

import { TeamMember } from "@/components/TeamMember"

export default function Team() {
  return (
    <div className="prose dark:prose-invert w-screen">
      <h1 className="text-3xl font-bold mb-8"> Our Team </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <TeamMember
            type="student"
            name="Leon Leng"
            title="Operation Director"
            major="PhD Philosophy - Foster School of Business, Information System & Operation Management"
            graduationYear={2030}
            imageSrc="/headshots/leon-leng.jpg"
            linkedin="https://www.linkedin.com/in/baikun-leng/"
          />
          <TeamMember
            type="student"
            name="Yasmine Aziz"
            title="Operation Director"
            major="BBA - Business Administration"
            graduationYear={2030}
            imageSrc="/headshots/yasmine.jpg"
            linkedin="https://www.linkedin.com/in/nurah-yasmine-aziz-458a31197/"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Faculty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <TeamMember
            type="faculty"
            name="Wei Cai"
            title="Operation Director"
            department="Director @UW Tacoma Decentralized Computing Laboratory"
            imageSrc="/headshots/wei-cai.jpg"
            linkedin="https://www.linkedin.com/in/ubcweicai/"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Alumni Network
          <TeamMember
            type="alumni"
            name="Han Pham"
            title="Board Advisor"
            imageSrc="/headshots/han.jpg"
            linkedin="https://www.linkedin.com/in/hansopham/"
          />
        </h2>
      </section>

    </div>
  )
}


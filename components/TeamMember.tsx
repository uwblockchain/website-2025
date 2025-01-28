import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Linkedin } from "lucide-react"

interface BaseTeamMemberProps {
  name: string
  title: string
  imageSrc: string
  linkedin?: string
}

interface StudentProps extends BaseTeamMemberProps {
  type: "student"
  major: string
  graduationYear: number
}

interface FacultyProps extends BaseTeamMemberProps {
  type: "faculty"
  department: string
}

interface AlumniProps extends BaseTeamMemberProps {
  type: "alumni"
  bio?: string
}

type TeamMemberProps = StudentProps | FacultyProps | AlumniProps

export function TeamMember(props: TeamMemberProps) {
  const { name, title, imageSrc } = props

  const renderDetails = () => {
    switch (props.type) {
      case "student":
        return (
          <div className="space-y-2">
            <p className="text-sm">
              <strong>Major:</strong> {props.major}
            </p>
            <p className="text-sm">
              <strong>Graduation Year:</strong> {props.graduationYear}
            </p>
          </div>
        )
      case "faculty":
        return (
          <div className="space-y-2">
            <p className="text-sm">
              <strong>Department:</strong> {props.department}
            </p>
          </div>
        )
      case "alumni":
        return <div className="space-y-2">{props.bio && <p className="text-sm">{props.bio}</p>}</div>
    }
  }

  return (
    <Card className="w-4/6 max-w-sm overflow-hidden">
      <CardHeader className="bg-slate-100 p-0">
        <div className="relative w-full h-48">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="mt-0 rounded-t-lg"
          />
        </div>
        <div className="px-2">
          {props.linkedin && (
            <a
              href={props.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          <CardTitle className="text-xl my-2">{name}</CardTitle>
          <p className="text-sm text-muted-foreground font-bold">{title}</p>
        </div>
      </CardHeader>
      <CardContent>{renderDetails()}</CardContent>
    </Card>
  )
}


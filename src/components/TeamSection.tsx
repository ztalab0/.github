import { Sparkles, Mail } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./SocialIcons";

const teamMembers = [
  {
    name: "Zul Ikram Musaddik Rayat",
    shortName: "Zul",
    role: "Founder, Lead Backend & Cloud",
    image: "/assets/people/zul.png",
    linkedin: "https://www.linkedin.com/in/zim-rayat/",
    github: "https://github.com/devrayat000",
    email: "mailto:rayat@ztalab.com",
  },
  {
    name: "Tamim Ahmed",
    shortName: "Tamim",
    role: "Founder, Business & Operations",
    image: "/assets/people/tamim.jpeg",
    linkedin: "https://www.linkedin.com/in/tamim-ahmed19/",
    email: "mailto:tamim@ztalab.com",
  },
  {
    name: "Abir Hossen",
    shortName: "Abir",
    role: "Founder, Lead Frontend",
    image: "/assets/people/abir.jpeg",
    linkedin: "https://www.linkedin.com/in/abirhossen54321/",
    email: "mailto:abir@ztalab.com",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-24 bg-card/60 border-t border-border/50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-border w-fit mb-3">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Our Team
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground">
            Meet the Minds Behind ZTA Lab
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            A collective of passionate engineers and digital strategists
            committed to precision and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group glass-panel bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 shadow-2xl flex flex-col justify-between transition-colors duration-300"
            >
              <div>
                {/* Team Portrait Image Box with 3:4 Aspect Ratio */}
                <div className="relative w-full aspect-3/4 overflow-hidden bg-secondary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/10 to-transparent opacity-90" />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary font-bold uppercase tracking-wider mt-2">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Social Action Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-border/40 flex items-center justify-center gap-3 text-gray-400">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} GitHub`}
                    className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={member.email}
                    aria-label={`Email ${member.name}`}
                    className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

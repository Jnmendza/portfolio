import { CaseStudy } from "@/types";

const CaseStudySection = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  return (
    <div className='bg-blackBlue rounded-lg p-6 space-y-6 mt-6'>
      <h2 className='text-primary text-2xl font-bold'>Case Study</h2>

      <Section title='🎡 Elevator Pitch' content={caseStudy.elevatorPitch} />
      <Section title='💡 Motivation' content={caseStudy.motivation} />
      <Section title='⚖️ Goals' content={caseStudy.goals.join("\n")} isList />
      <Section title='🚀 Tech Stack' content={caseStudy.stack} isList />
      <Section title='🔌 Architecture' content={caseStudy.architecture} />
      <Section title='🛠 Planning' content={caseStudy.planning} />
      <Section title='⚡ Challenges' content={caseStudy.challenges} />
      <Section
        title='🔧 Features Deep Dive'
        content={caseStudy.featuresDeep}
        isList
      />
      <Section
        title='🧠 Reflections'
        content={Object.entries(caseStudy.reflections)
          .map(([k, v]) => `**${k}**: ${v}`)
          .join("\n\n")}
      />
    </div>
  );
};

const Section = ({
  title,
  content,
  isList = false,
}: {
  title: string;
  content: string | string[];
  isList?: boolean;
}) => (
  <div>
    <h3 className='text-lg font-bold mb-1'>{title}</h3>
    {isList && Array.isArray(content) ? (
      <ul className='list-disc ml-6 space-y-1'>
        {content.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className='text-sm leading-relaxed text-gray-300 whitespace-pre-line'>
        {content}
      </p>
    )}
  </div>
);

export default CaseStudySection;

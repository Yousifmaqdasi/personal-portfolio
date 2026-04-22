type Props = {
    title: string,
    description: string
}

const SkillsCard = ({title, description}: Props) => {
  return (
    <div
      className="bg-card border border-border p-7 rounded-xl h-34 justify-center flex flex-col 
            hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer w-5/6 m-auto"
    >
      <p className="font-medium mb-1">{title}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default SkillsCard;

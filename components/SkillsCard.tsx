type Props = {
    title: string,
    description: string
}

const SkillsCard = ({title, description}: Props) => {
  return (
    <div
  className="group bg-card border border-border p-7 rounded-xl h-34 justify-center flex flex-col 
  hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer w-65 m-auto 
  hover:bg-primary hover:text-white"
>
  <p className="font-medium mb-1">{title}</p>
  <p className="text-sm text-muted-foreground group-hover:text-white leading-relaxed">
    {description}
  </p>
</div>
  );
};

export default SkillsCard;

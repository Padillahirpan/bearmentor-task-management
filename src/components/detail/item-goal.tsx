export const ItemGoalContent = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <>
      <div className="p-4 items-start">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-start">
          {title}
        </h3>
        <p className="text-start text-neutral-400">{desc}</p>
      </div>
    </>
  );
};

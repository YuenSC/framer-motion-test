import SlideIn from "./SlideIn";

const SlideInDemo = () => {
  return (
    <div className="mt-[300px] flex gap-2 pb-10">
      <SlideIn direction="left" className="rounded-sm border-2 border-red-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus
        sapiente dignissimos, sed officia sunt aut dolorum? Nemo in error,
        ratione laudantium modi asperiores cupiditate nobis adipisci, animi,
        quia eius! Repellendus ipsum quisquam blanditiis dicta ducimus iusto
        quod iure enim obcaecati quia molestiae ipsam, suscipit laboriosam sunt
        maiores? Inventore, dignissimos.
      </SlideIn>
      <SlideIn direction="right">
        <div className="h-10 w-10 bg-red-500"></div>
      </SlideIn>
      <SlideIn direction="top">
        <div className="h-10 w-10 bg-red-500"></div>
      </SlideIn>
      <SlideIn direction="bottom">
        <div className="h-10 w-10 bg-red-500"></div>
      </SlideIn>
    </div>
  );
};

export default SlideInDemo;

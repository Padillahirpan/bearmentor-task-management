import Card, { CardProps } from "./card";

function CardListView({ cardList }: { cardList: [CardProps] }) {
  return (
    <>
      <p>This is your cards</p>
      <div className="flex px-2 py-1">
        {cardList.map((item, index) => {
          return (
            <div key={index} className="px-4">
              <Card
                image={item.image}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardListView;

export const calcTotalPrice = ({
  title,
  price,
  count,
  option: { weight },
}: {
  title: string;
  price: number;
  count: number;
  option: {
    weight: number;
  };
}): string => {
  const totalPrice: number = price * count;
  const totalWeight: number = weight * count;

  return `${title}: цена ${totalPrice}, общий вес ${totalWeight}`;
};

export const CatalogShipItem = ({ item }) => {
  console.log(item);

  return (
    <div>
      <img src={item.img} alt="" />
      <div>
        <p>{item.name}</p>
        <p>{item.rating}</p>
      </div>
    </div>
  );
};

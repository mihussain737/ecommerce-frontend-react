export const FormatPrice = (amount) => {
  return (
    new Intl.NumberFormat("en-US",{
     style:'currency',
     currency:'USD'
    }).format(amount)
  )
};

export const FormatPriceCalculation = (quantity,price) => {
  return (Number(quantity) * Number(price)).toFixed(2);
};

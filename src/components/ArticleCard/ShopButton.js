export default function ShopButton(){
  const shopButton = () =>{
    console.log("Du har handlet");
  }
  return <button className="shop-btn" onClick={shopButton}>Legg i handlekurv</button>
}
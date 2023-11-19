import './styles/quotebox.css'

const Quotebox = ({ quoter,handleChangeQuote }) => {
  console.log(quoter)
  return (
    <article className="Quotebox">
<h1 className="Quotebox__title">Galleta de la Fortuna</h1><br />
<div className="Quotebox__box">
    <p>{quoter.phrase}</p><br />
</div>
<span className="Quotebox__author">Autor: {quoter.author}</span><br /><br /><br />
<button className="Quotebox__btn"  onClick={handleChangeQuote}>Ver Otro</button><br />
    </article>
  )
}
export default Quotebox
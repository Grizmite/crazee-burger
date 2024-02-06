
 // eslint-disable-next-line react/prop-types
 function Product({imageSource, title, price}) {

  //STATE

  //BEHAVIOUR

  //RETURN
    return (
                 <div className='produit'>
            <div  className='image'>
                <img src={imageSource} alt={title} />
            </div>
            <div className='info-text'>
           <div className='description'>
           <div className='title'>{title}</div>
           <div className='price'>{price}</div>
           <button className='add-button'>X</button>
           </div>
           </div>   
           </div> 
  )}

export default Product;


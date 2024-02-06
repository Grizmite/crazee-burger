import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function Product({ imageSource, title, price }) {
  //STATE

  //BEHAVIOUR

  //RETURN
  return (
    <ProductStyled className='produit'>
      <div className='image'>
        <img src={imageSource} alt={title} />
      </div>
      <div className='info-text'>
      <div className='title'>{title}</div>
        <div className='description'>
          <div className='price'>{price}</div>
          <button className='add-button'>Add</button>
        </div>
      </div>
    </ProductStyled>
  );
}

export default Product;

const ProductStyled = styled.div`
  &.produit {
    background: red;
    width: 200px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr ;
    padding: 20px;
    padding-bottom: 10px;
  }

  .image {
    width: 100%;
    height: auto;
    border: 1px solid yellow;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info-text {
    border: 1px solid fuchsia;
    display: grid;

    .description{
      border: 1px solid black;

    .price{
      border: 1px solid blue;
    }

    .add-button{
      border: 1px solid green;
    }
    }
  }
`;

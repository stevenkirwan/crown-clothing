import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const CheckoutItemImage = styled.div`
    width: 23%;
    padding-right: 15px;
  
    img {
        width: 100%;
        height: 100%;
    }
`;

export const CheckoutItemBlock = styled.span`
    width: 23%;
`;

export const CheckoutItemQuantity = styled.span`
     display:flex;
     width: 23%;
      .arrow{
        cursor:pointer;
      }
      .value{
        margin:0 10px;
      }
`;

export const CheckoutItemRemove = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;
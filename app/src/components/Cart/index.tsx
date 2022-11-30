import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { ProductProps } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { Text } from '../Text';

import {
  Item,
  ProductContainer,
  Image,
  ProductDetails,
  QuantityContainer,
  Actions,
  Summary,
  TotalContainer,
} from './styles';

interface CartProps {
  cartItems: CartItem[];
  onAddToCart(product: ProductProps): void;
  onDecrementToCart(product: ProductProps): void;
  onConfirmOrder(): void;
}

export function Cart({
  cartItems,
  onAddToCart,
  onDecrementToCart,
  onConfirmOrder,
}: CartProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoading] = useState(false);

  const totalPriceCart = cartItems.reduce((acc, item) => {
    return (acc += item.product.price * item.quantity);
  }, 0);

  function handleConfirmOrder() {
    setIsOpenModal(true);
  }

  function handleOk() {
    onConfirmOrder();
    setIsOpenModal(false);
  }

  return (
    <>
      <OrderConfirmedModal
        visible={isOpenModal}
        onOk={handleOk}
        onClose={() => setIsOpenModal(false)}
      />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={(cartItem) => cartItem.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 142 }}
          renderItem={({ item: cartItem }) => (
            <Item>
              <ProductContainer>
                <Image
                  source={{
                    uri: `http://192.168.0.2:3001/uploads/${cartItem.product.imagePath}`,
                  }}
                />
                <QuantityContainer>
                  <Text color="#666">{cartItem.quantity}x</Text>
                </QuantityContainer>

                <ProductDetails>
                  <Text size={14} weight="600">
                    {cartItem.product.name}
                  </Text>
                  <Text size={14} color="#666" style={{ marginTop: 4 }}>
                    {formatCurrency(cartItem.product.price)}
                  </Text>
                </ProductDetails>
              </ProductContainer>

              <Actions>
                <TouchableOpacity
                  onPress={() => onAddToCart(cartItem.product)}
                  style={{ marginRight: 24 }}
                >
                  <PlusCircle />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => onDecrementToCart(cartItem.product)}
                >
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}
      <Summary>
        <TotalContainer>
          {cartItems.length > 0 ? (
            <>
              <Text color="#666">Total</Text>
              <Text size={20} weight="600">
                {formatCurrency(totalPriceCart)}
              </Text>
            </>
          ) : (
            <Text color="#666">Seu carrinho está vazio</Text>
          )}
        </TotalContainer>

        <Button
          onPress={handleConfirmOrder}
          disabled={!cartItems.length}
          loading={isLoading}
        >
          Confirmar pedido
        </Button>
      </Summary>
    </>
  );
}

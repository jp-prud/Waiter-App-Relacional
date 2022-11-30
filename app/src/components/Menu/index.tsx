import { useState } from 'react';
import { FlatList } from 'react-native';

import { Text } from '../Text';

import {
  Product,
  ProductImage,
  ProductDetails,
  AddToCartButton,
  Separator,
} from './styles';

import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';
import { ProductProps } from '../../types/Product';

interface MenuProps {
  onAddToCart(product: ProductProps): void;
  products: Array<ProductProps>
}

export function Menu({ onAddToCart, products }: MenuProps) {
  const [isModalVisible, setIsModalVisibility] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
    null,
  );

  function handleOpenModal(product: ProductProps) {
    setIsModalVisibility(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisibility(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <>
            <Product onPress={() => handleOpenModal(product)}>
              <ProductImage
                source={{
                  uri: `http://192.168.0.2:3001/uploads/${product.imagePath}`,
                }}
              />

              <ProductDetails>
                <Text weight="600">{product.name}</Text>
                <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                  {product.description}
                </Text>
                <Text size={14} weight="600">
                  {formatCurrency(product.price)}
                </Text>
              </ProductDetails>

              <AddToCartButton onPress={() => onAddToCart(product)}>
                <PlusCircle />
              </AddToCartButton>
            </Product>
          </>
        )}
      />
    </>
  );
}

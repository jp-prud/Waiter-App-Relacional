import { useEffect, useState } from 'react';
import { api } from '../utils/api';

import { Header } from '../components/Header';
import { Categories } from '../components/Categories';
import { Menu } from '../components/Menu';
import { Button } from '../components/Button';
import { TableModal } from '../components/TableModal';

import {
  Container,
  CenteredContainer,
  CategoriesContainer,
  MenuContainer,
  Footer,
  FooterContainer,
} from './styles';

import { Cart } from '../components/Cart';
import { CartItem } from '../types/CartItem';
import { ProductProps } from '../types/Product';
import { ActivityIndicator } from 'react-native';

import { Empty } from '../components/Icons/Empty';
import { Text } from '../components/Text';

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTable, setSelectedTable] = useState('');
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([api.get('/categories'), api.get('/products')]).then(
      ([categoriesResponse, productsResponse]) => {
        setCategories(categoriesResponse.data);
        setProducts(productsResponse.data);
        setIsLoading(false);
      },
    );
  }, []);

  async function handleSelectCategory(categoryId: string) {
    const { data } = await api.get(`/categories/${categoryId}/products`);

    setProducts(data);
  }

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleCancelTable() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleResetOrder() {
    setSelectedTable('');
    setCartItems([]);
  }

  function handleClickAddToCart(product: ProductProps) {
    if (!selectedTable) {
      setIsTableModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id,
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleClickDecrementToCart(product: ProductProps) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        (cartItem) => cartItem.product._id === product._id,
      );
      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelTable}
        />

        {isLoading && (
          <CenteredContainer>
            <ActivityIndicator color="#d73035" size="large" />
          </CenteredContainer>
        )}

        {!isLoading && (
          <>
            <CategoriesContainer>
              <Categories
                categories={categories}
                onSelectCategory={handleSelectCategory}
              />
            </CategoriesContainer>

            {products.length > 0 && (
              <MenuContainer>
                <Menu onAddToCart={handleClickAddToCart} products={products} />
              </MenuContainer>
            )}

            {!products.length && (
              <CenteredContainer>
                <Empty />

                <Text color="#666" style={{ marginTop: 24 }}>
                  Nenhum produto foi encontrado!
                </Text>
              </CenteredContainer>
            )}
          </>
        )}
      </Container>

      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button
              onPress={() => setIsTableModalVisible(true)}
              disabled={isLoading}
            >
              Novo Pedido
            </Button>
          )}

          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAddToCart={handleClickAddToCart}
              onDecrementToCart={handleClickDecrementToCart}
              onConfirmOrder={handleResetOrder}
            />
          )}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  );
}

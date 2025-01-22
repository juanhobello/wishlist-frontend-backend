import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from '@/pages';
import { Wishlist } from '@/pages';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@/redux/store';
import { useGetProductsQuery } from '@/redux/services';
import { useWishlist } from '@/hooks';
import { products } from '@/__mocks__/producst.mock';
import { MemoryRouter } from 'react-router-dom';
import { Product } from '@/redux/types';

jest.mock('@/redux/services', () => ({
  useGetProductsQuery: jest.fn(),
}));

jest.mock('@/hooks', () => ({
  useWishlist: jest.fn(),
}));

const localStorageMock: unknown = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global['localStorage'] = localStorageMock as Storage;

const setupHomePage = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
);

const setupWishlistPage = () => (
  <Provider store={store}>
    <MemoryRouter initialEntries={['/wishlist']}>
      <Wishlist />
    </MemoryRouter>
  </Provider>
);

describe('Home and Wishlist Interaction', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add a product to the wishlist from Home', () => {
    const toggleWishlistItem = jest.fn((product) => {
      const wishlist = JSON.parse(localStorage.getItem('persist:root') || '{}').wishlist || [];
      localStorage.setItem(
        'persist:root',
        JSON.stringify({ wishlist: [...wishlist, product] })
      );
    });

    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: products,
      isLoading: false,
      isError: false,
    });

    (useWishlist as jest.Mock).mockReturnValue({
      isItemInWishlist: jest.fn(() => false),
      toggleWishlistItem,
    });

    render(setupHomePage());

    const likeButton = screen.getByLabelText(`like-button-${products[0].code}`);
    fireEvent.click(likeButton);

    const storedState = JSON.parse(localStorage.getItem('persist:root') || '{}');
    const storedWishlist = storedState.wishlist;
    expect(storedWishlist).toHaveLength(1);
    expect(storedWishlist[0]).toEqual(products[0]);
  });

  it('should render the wishlist page with the added product', () => {
    const toggleWishlistItem = jest.fn((product) => {
      const wishlist = JSON.parse(localStorage.getItem('persist:root') || '{}').wishlist || [];
      localStorage.setItem(
        'persist:root',
        JSON.stringify({ wishlist: [...wishlist, product] })
      );
    });

    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: products,
      isLoading: false,
      isError: false,
    });

    (useWishlist as jest.Mock).mockReturnValue({
      wishlist: products,
      hasWishlistItems: true,
      isItemInWishlist: jest.fn(() => true),
      toggleWishlistItem,
    });

    render(setupWishlistPage());

    expect(screen.getByText(products[0].name)).toBeInTheDocument();
    const removeButton = screen.getByLabelText(`remove-button-${products[0].code}`);
    expect(removeButton).toBeInTheDocument();
  });

  it('should remove a product from the wishlist', () => {
    const removeItemWishlist = jest.fn((productCode) => {
      const wishlist = JSON.parse(localStorage.getItem('persist:root') || '{}').wishlist || [];
      const newWishlist = wishlist.filter((item: Product) => item.code !== productCode);
      localStorage.setItem('persist:root', JSON.stringify({ wishlist: newWishlist }));
    });

    (useWishlist as jest.Mock).mockReturnValue({
      wishlist: products,
      hasWishlistItems: true,
      removeItemWishlist,
    });

    render(setupWishlistPage());

    const removeButton = screen.getByLabelText(`remove-button-${products[0].code}`);
    fireEvent.click(removeButton);

    const updatedState = JSON.parse(localStorage.getItem('persist:root') || '{}');
    const updatedWishlist = updatedState.wishlist;
    expect(updatedWishlist).toHaveLength(0);
  });
});

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from '@/pages';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@/redux/store';
import { useGetProductsQuery } from '@/redux/services';
import { useWishlist } from '@/hooks';
import { products } from '@/__mocks__/producst.mock';

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
)

describe('Home Page', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('matches snapshot', () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: products,
      isLoading: false,
      isError: false,
    });

    (useWishlist as jest.Mock).mockReturnValue({
      isItemInWishlist: jest.fn(() => false),
      toggleWishlistItem: jest.fn(),
    });

    const { container } = render(setupHomePage());

    expect(container).toMatchSnapshot();
  });

  it('should render the product correctly', () => {
    (useGetProductsQuery as jest.Mock).mockReturnValue({
      data: products,
      isLoading: false,
      isError: false,
    });

    (useWishlist as jest.Mock).mockReturnValue({
      isItemInWishlist: jest.fn(() => false),
      toggleWishlistItem: jest.fn(),
    });

    render(setupHomePage());

    expect(screen.getByText(products[0].name)).toBeInTheDocument();
    const likeButton = screen.getByLabelText(`like-button-${products[0].code}`);
    expect(likeButton).toBeInTheDocument();
  });

  it('should add a product to the wishlist and store it in localStorage', () => {
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
});

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Wishlist } from '@/pages';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@/redux/store';
import { useWishlist } from '@/hooks';
import { products } from '@/__mocks__/producst.mock';

jest.mock('@/hooks', () => ({
  useWishlist: jest.fn(),
}));

const localStorageMock: unknown = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global['localStorage'] = localStorageMock as Storage;

const setupWishlistPage = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wishlist />
    </BrowserRouter>
  </Provider>
);

describe('Wishlist Page', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('matches snapshot', () => {
    (useWishlist as jest.Mock).mockReturnValue({
      wishlist: products,
      hasWishlistItems: true,
      removeItemWishlist: jest.fn(),
    });

    const { container } = render(setupWishlistPage());

    expect(container).toMatchSnapshot();
  });

  it('should render the wishlist correctly with products', () => {
    (useWishlist as jest.Mock).mockReturnValue({
      wishlist: products,
      hasWishlistItems: true,
      removeItemWishlist: jest.fn(),
    });

    render(setupWishlistPage());

    expect(screen.getByText(products[0].name)).toBeInTheDocument();
    const removeButton = screen.getByLabelText(`remove-button-${products[0].code}`);
    expect(removeButton).toBeInTheDocument();
  });

  it('should render empty state when no items in wishlist', () => {
    (useWishlist as jest.Mock).mockReturnValue({
      wishlist: [],
      hasWishlistItems: false,
      removeItemWishlist: jest.fn(),
    });

    render(setupWishlistPage());

    expect(screen.getByText('Você ainda não possui itens salvos na sua Lista de Desejos.')).toBeInTheDocument();
  });

  it('should remove a product from the wishlist when the remove button is clicked', () => {
    const removeItemWishlist = jest.fn();

    (useWishlist as jest.Mock).mockReturnValue({
      wishlist: products,
      hasWishlistItems: true,
      removeItemWishlist,
    });

    render(setupWishlistPage());

    const removeButton = screen.getByLabelText(`remove-button-${products[0].code}`);
    fireEvent.click(removeButton);

    expect(removeItemWishlist).toHaveBeenCalledWith(products[0].code);
  });
});

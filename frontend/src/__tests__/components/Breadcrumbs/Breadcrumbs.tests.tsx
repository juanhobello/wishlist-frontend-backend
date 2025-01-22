import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import { Breadcrumbs, BreadcrumbItem } from '@/components/Breadcrumbs';

describe('Breadcrumbs Component', () => {
  test('renders Breadcrumbs with children correctly', () => {
    render(
      <MemoryRouter>
        <Breadcrumbs>
          <BreadcrumbItem path="/" >Home</BreadcrumbItem>
          <BreadcrumbItem path="/products">Products</BreadcrumbItem>
          <BreadcrumbItem path="/products/item">Item</BreadcrumbItem>
        </Breadcrumbs>
      </MemoryRouter>
    );

    const breadcrumbList = screen.getByRole('list');
    expect(breadcrumbList).toBeInTheDocument();

    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems).toHaveLength(3);

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toHaveAttribute('href', '/');

    const productsLink = screen.getByText(/products/i);
    expect(productsLink).toHaveAttribute('href', '/products');

    const itemLink = screen.getByText(/item/i);
    expect(itemLink).toHaveAttribute('href', '/products/item');
  });
});

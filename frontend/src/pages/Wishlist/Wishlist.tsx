import { BreadcrumbItem, Breadcrumbs, Divider } from "@/components";

export default function Wishlist() {
  return (
    <>
      <Breadcrumbs>
        <BreadcrumbItem path="/">Home</BreadcrumbItem>
        <BreadcrumbItem path="/wishlist">Wishlist</BreadcrumbItem>
      </Breadcrumbs>
      <Divider />
    </>
  )
}

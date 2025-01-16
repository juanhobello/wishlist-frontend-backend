import { BreadcrumbItem, Breadcrumbs, Divider } from "@/components";

export default function Home() {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem path="/">Home</BreadcrumbItem>
      </Breadcrumbs>
      <Divider />
    </div>
  )
}

import { BreadcrumbItem, Breadcrumbs, Divider } from "@/components";
import { useGetProductsQuery } from "@/redux/services";
import { useEffect } from "react";

export default function Home() {
  const { data } = useGetProductsQuery('')

  useEffect(() => {
    console.log(data)
  }, [data])
  
  
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem path="/">Home</BreadcrumbItem>
      </Breadcrumbs>
      <Divider />
    </div>
  )
}

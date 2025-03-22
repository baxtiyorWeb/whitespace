"use client"
import ItemCard from "@/components/ItemCard";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Progress from "@/components/ui/Progress";
import Text from "@/components/ui/Text";
import useGetAllQuery from "@/hooks/api/useGetAllQuery";
import Container from "@/shared/Container";
import { get } from "lodash";
import Image from "next/image";
import { useEffect } from "react";
import { HeartIcon } from "../assets/houzing-images";
export default function Home() {
  const { data } = useGetAllQuery({
    key: "posts",
    url: 'https://jsonplaceholder.typicode.com/posts',
    params: {
      params: {
        size: 10,
        page: 1
      }
    }
  })


  useEffect(() => {
    console.log(get(data, "data"))
  }, [data])

  return (
    <Container >
      <h1>ok</h1>
      <ItemCard className="w-[250px]  h-[300px] border " items={[1, 2, 3, 4, 5]} slider sliderConfig={{
        slidesToShow: 3

      }} />
      <Button variant="primary" disabled={false} className="cursor-pointer">download</Button>
      <Text >html</Text>
      <Progress value={100} max={100} showValue />
      <Input type="checkbox" />
      <div className="relative">
        <Image src={HeartIcon} alt="img" />
      </div>
    </Container>
  );
}

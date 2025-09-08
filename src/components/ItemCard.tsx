import { Card, Group, Badge, ActionIcon, Text, Stack } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

type FoodProps = {
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
  onDelete: () => void;
};

export default function ItemCard({name, price, quantity, category}:FoodProps) {
  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0
  let total: number = Number(price)*Number(quantity);

  return (
    /* Type additional text here. */
    <Card>
      <Group justify="space-between" align="flex-start">
        <Stack>
          <Text>Name: {name}  Category: {category}</Text>
          <Text>Price: {price} x {quantity}</Text>
          <Badge color="yellow">total: {total}</Badge>
        </Stack>
        <Group>
          <ActionIcon><IconTrash/></ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}

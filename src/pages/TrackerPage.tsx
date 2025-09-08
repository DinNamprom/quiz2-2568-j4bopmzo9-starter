import { useState } from "react";
import { Button, Stack, Title, Divider, Container } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import ItemCard from "../components/ItemCard";
import Modal from "../components/Modal";

type FoodItem = {
  id: string;
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
};

export default function FoodTracker() {
  const [opened, setOpened] = useState(false);
  const [items, setItems] = useState<FoodItem[]>([]);
  const categories = ["Main Course", "Drink", "Dessert"];

  const open = () => {
    setOpened(!opened);
  };

  const Item = () => {

  };

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Modal opened={opened} onClose={open} onAdd={Item}/>
      <Button onClick={open}>Add Food Item</Button>
      {/* Type additional AddFoodModal here. */}
      <ItemCard name="smt" price={"300"} quantity={"3"} category="Drink" onDelete={function (): void {
        throw new Error("Function not implemented.");
      } }/>
      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack>{/* Type additional food card list here. */}</Stack>
    </Container>
  );
}

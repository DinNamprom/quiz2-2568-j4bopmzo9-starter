import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Container,
} from "@mantine/core";

type AddFoodModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};

export default function AddFoodModal({opened, onClose}: AddFoodModalProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>(0);
  const [category, setCategory] = useState<string | null>(null);

  const NameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const PriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };
  const QuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = () => {
    let isname = false;
    let isprice = false;
    let isquan = false;
    let iscate = false;
    let nquan: number = Number(quantity);
    let nprice: number = Number(price);
    if (name !== "") isname = true;
    if (price !== "" || nprice !== 0) isprice = true;
    if (quantity !== "" || nquan !== 0) isquan = true;
    if (category !== "" || category !== null) iscate = true;

    if (isname && isprice && isquan && iscate) {
      console.log("add item");
    }
  };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    /* Type additional text here. */
    <Modal opened={opened} onClose={onClose} title="Add Food">
      <Container m="xs">
      <TextInput
        leftSectionPointerEvents="none"
        label="Food name"
        placeholder="name"
        onChange={NameChange}
      />
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        label="Price"
        placeholder="bath"
        onChange={PriceChange}
      />
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        label="Quantity"
        placeholder="number"
        onChange={QuantityChange}
      />
      <Select
        mt = "md"
        label="Catagory"
        placeholder="food catagory"
        data={["Main Course", "Drink", "Dessert"]}
        onChange={(_value) => setCategory(_value)}
      />
      <Button mt="md" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
    </Modal>
  );
}

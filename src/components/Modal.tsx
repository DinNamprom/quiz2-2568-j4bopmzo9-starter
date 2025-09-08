import { useState } from "react";
import {
  Modal,
  TextInput,
  Select,
  Button,
  Container,
  NumberInput,
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

  const handleSubmit = () => {
    let isname = true;
    let isprice = true;
    let isquan = true;
    let iscate = true;
    let nquan: number = Number(quantity);
    let nprice: number = Number(price);
    if (name === "") isname = false;
    if (price === "" || nprice === 0) isprice = false;
    if (quantity === "" || nquan === 0) isquan = false;
    if (category === "" || category === null) iscate = false;

    if (isname && isprice && isquan && iscate) {
      console.log("Total Price = " + nprice*nquan);
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
        description= "Name of item"
        label="Name of item"
        placeholder="e.g., Chicken rice"
        onChange={NameChange}
      />
      <NumberInput
        mt="md"
        rightSectionPointerEvents="none"
        label="Price"
        placeholder="price per dish"
        value={price}
        onChange={setPrice}
        min={1}
        max={10000}
      />
      <NumberInput
        mt="md"
        rightSectionPointerEvents="none"
        label="Quantity"
        placeholder="Quantity"
        value={quantity}
        onChange={setQuantity}
        min={1}
        max={100}
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

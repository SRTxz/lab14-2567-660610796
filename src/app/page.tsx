"use client";
import { Container, Text, Title, Rating, Textarea, Button, Divider, Group, Pagination} from "@mantine/core";
import Footer from "@components/Footer";
export default function Home() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title> 
      
      <Title order={4} mt="sm">Your rating</Title>
      
      <Rating size="lg"/>
      
      <Textarea label="Your review" placeholder="Do you enjoy eating?" mt="xs" minRows={3} autosize/>
      
      <Button variant="filled" color="orange" mt="xs">Submit Review</Button>
      
      <Divider my="md" />
      
      <Group justify="center" >
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} readOnly size="sm"/>
      </Group>
      
      <Text ta="center" c="dimmed">Best pizza in this world. I give you X score.</Text>
      
      <Divider my="md" />
      
      <Group justify="center" >
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} readOnly size="sm"/>
      </Group>
      
      <Text ta="center" c="dimmed">My favourite part is pepperoni</Text>
      
      <Group justify="center">
        <Pagination total={20} color="orange" mt="md" />
      </Group>
      
      <Text ta="center" my="sm" c="dimmed">
        <Footer year="2024" fullName="Saran Maihom" id="660610796"></Footer>
      </Text>
    </Container>
  );
}

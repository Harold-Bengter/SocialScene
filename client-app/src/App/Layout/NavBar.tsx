import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default function NavBar() {
  const {activityStore} = useStore();


  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img src="/Assets/logo.jpg" alt="logo" style={{ marginRight: 10 }} />
          Open World
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button onClick={() =>activityStore.openForm()} positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}

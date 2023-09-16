import { Link } from "react-router-dom";
import { Container, Header, Segment, Image, Button } from "semantic-ui-react";

export default function HomePage() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container text>
        <Header as="h1" inverted>
          <Image
            size="massive"
            src="/Assets/logo.jpg"
            alt="logo"
            style={{ marginBottom: 12 }}
          />
          Open World
        </Header>
        <Header
          as="h2"
          inverted
          content="Welcome to Open World.
             Where the world is open to you"
        />
        <Button as={Link} to="/activities" size="huge" inverted>
          Take me to open world
        </Button>
      </Container>
    </Segment>
  );
}

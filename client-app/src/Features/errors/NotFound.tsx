import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="search" />
        Sorry Obi-wan! We don't have the page you're looking for
      </Header>
      <Segment.Inline>
        <Button as={Link} to="/activities">
          Return to Home page
        </Button>
      </Segment.Inline>
    </Segment>
  );
}

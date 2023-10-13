import { observer } from "mobx-react-lite";
import { Image, List, Popup } from "semantic-ui-react";
import { Profile } from "../../../App/Layout/Models/profile";
import { Link } from "react-router-dom";
import ProfileCard from "../../profiles/ProfileCard";

interface Props {
  attendees: Profile[];
}

export default observer(function ActivityListITemAttendee({ attendees }: Props) {
  const styles = {
    borderColor: 'green',
    borderWidth: '4'
  }

  return (
    <List horizontal>
      {attendees.map(attendee => (
        <Popup
        hoverable
        key={attendee.username}
        trigger={
          <List.Item as={Link} to={`/profiles/${attendee.username}`}>
          <Image size="mini"
              style={attendee.following ? styles : null}
              bordered
              circular
              src={attendee.image || `/Assets/stoic.jpg`} />
          </List.Item>
        }
      >
          <Popup.Content>
            <ProfileCard profile={attendee} />
          </Popup.Content>
        </Popup>
      ))}
    </List>
  );
});

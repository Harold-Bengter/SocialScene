import { Card, Icon, Image } from "semantic-ui-react";
import { Profile } from "../../App/Layout/Models/profile";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

interface Props {
    profile: Profile;
}


export default observer (function ProfileCard({profile}: Props){
    return (
        <Card as={Link} to={`/profiles/${profile.username}`}>
            <Image src={profile.image || '/Assets/stoic.jpg'} />
            <Card.Content>
                <Card.Header>{profile.displayName}</Card.Header>
                <Card.Description>Bio goes here</Card.Description>
            </Card.Content>
            <Card.Content extra>
                 <Icon name='user' />
                 10 followers
            </Card.Content>
        </Card>
    )
})

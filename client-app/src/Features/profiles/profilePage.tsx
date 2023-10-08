import { Grid } from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStore } from "../../App/stores/store";
import { useEffect } from "react";
import LoadingComponent from "../../App/Layout/LoadingComponents";

export default observer(function ProfilePage() {
  const { username } = useParams();
  const { profileStore } = useStore();
  const { loadingProfile, loadProfile, profile } = profileStore;

  useEffect(() => {
    if (username) loadProfile(username);
  }, [loadProfile, username]);

  if (loadingProfile) return <LoadingComponent inverted content='loading profile...' />

  return (
    <Grid>
      <Grid.Column width='16'>
        {profile && 
        <>
        <ProfileHeader profile={profile} />
        <ProfileContent profile={profile} />
        </>   }
      </Grid.Column>
    </Grid>
  );
});

import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../Features/activities/dashboard/ActivityDashboard";
import LoadingComponent from "./LoadingComponents";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

//Start this to have page then start api to have data. cd into client-app/cd into api
function App() {
  const { activityStore } = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="loading app" />;

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);

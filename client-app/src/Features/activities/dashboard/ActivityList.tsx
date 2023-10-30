import { Header } from "semantic-ui-react";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";
import { Fragment } from "react";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header hidden>
            {group}
          </Header>
          {activities.map((activity) => (
              <ActivityListItem key={activity.id} activity={activity} />
            ))}
        </Fragment>
      ))}
    </>
  );
});

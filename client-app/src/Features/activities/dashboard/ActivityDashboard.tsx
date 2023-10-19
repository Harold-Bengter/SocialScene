import {  Grid, Loader } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../App/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import ActivityFilters from "./ActivityFilters";
import { PagingParams } from "../../../App/Layout/Models/pagination";
import InfiniteScroll from "react-infinite-scroller";
import ActivityListItemPlaceholder from "./ActivityListItemPlaceholder";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry, setPagingParams, pagination } =
    activityStore;
  const [loadingNext, setLoadingNext] = useState(false);

  function handleGetNext() {
    setLoadingNext(true);
    setPagingParams(new PagingParams(pagination!.currentPage + 1));
    loadActivities().then(() => setLoadingNext(false));
  }

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities, activityRegistry.size]);


  return (
    <Grid>
      <Grid.Column width="10">
      <ActivityList />
        {activityStore.loadingInitial && activityRegistry.size === 0 && !loadingNext ? (
          <>
             <ActivityListItemPlaceholder />
             <ActivityListItemPlaceholder />
          </>
          
        ) : (
          <InfiniteScroll
            pageStart={0}
            loadMore={handleGetNext}
            //Make sure not loading next or will go into loop, check to make sure paginationobject is in, when current page is less than total we have more
            hasMore={
              !loadingNext &&
              !!pagination &&
              pagination.currentPage < pagination.totalPages}
            initialLoad={false}
          >
          </InfiniteScroll>
        )}
      </Grid.Column>
      <Grid.Column width="6">
        <ActivityFilters />
      </Grid.Column>
      <Grid.Column width="10">
        <Loader active={loadingNext}  />
      </Grid.Column>
    </Grid>
  );
});

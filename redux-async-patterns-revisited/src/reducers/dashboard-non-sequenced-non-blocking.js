export default function dashboardSequenced(state = {}, action) {
  switch(action.type) {
    case 'FETCH_DASHBOARD_NON_SEQUENCED_NON_BLOCKING_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }

    default :
      return state;
  }
}

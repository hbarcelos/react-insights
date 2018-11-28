export default function dashboardSequenced(state = {}, action) {
  switch(action.type) {
    case 'FETCH_DASHBOARD_SEQUENCED_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }

    default :
      return state;
  }
}

const initialState = {
  loading: false,
  articles: []
}

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GET_NEWS':
      return { ...state, loading: true };
    case 'NEWS_RECEIVED':
      return { ...state, loading: false, articles: action.articles }
    default:
      return state;
  }
}

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;
    case "CREATE_POST":
      return posts;
    default:
      return posts;
  }
};

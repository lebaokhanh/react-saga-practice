import React from "react";
import { connect, useSelector } from "react-redux";

const Loading = () => {
  const isLoading = useSelector(state => state.loading);

  return isLoading && (
    <div>
      <h1>LOADING...</h1>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     isLoading: state.loading,
//   }
// }

// export default connect(mapStateToProps, null)(Loading)
export default Loading;

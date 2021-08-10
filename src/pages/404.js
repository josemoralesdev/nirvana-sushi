import * as React from "react"
import { navigate } from "@reach/router"

const NotFoundPage = () => {
  React.useEffect(() => {
    navigate("/");
  }, [])
  return null;
}

export default NotFoundPage

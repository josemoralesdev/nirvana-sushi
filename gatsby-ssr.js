import React from "react";
import { Layout } from "./src/components/layout.component"
import "./src/css/typography.css";
// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
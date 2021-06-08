import React from "react";
import { Button, Alert } from "antd";

function Welcome({ name }) {
  return (
    <div>
      <h2>Welcome to this {name}</h2>
      <h4>More coming soon....</h4>
      <Button type="submit">Follow</Button>
      <Alert
        message="Success Text"
        description="Success Description Success Description Success Description"
        type="success"
      />
    </div>
  );
}

export default Welcome;

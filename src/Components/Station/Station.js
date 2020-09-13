import React from "react";
import Card from "../Card/Card";

const Station = ({ station }) => {
const [show, setShow] = React.useState(false);
  return (
    <Card title={station.name}>
      <>
        <div>
          <span>Address: </span> {station.address}
        </div>
        <div>
          <span>Capacity: </span> {station.capacity}
        </div>
        <button>Show Status</button>
      </>
    </Card>
  );
};

export default Station;

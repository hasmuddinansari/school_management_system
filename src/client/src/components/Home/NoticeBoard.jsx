import React from "react";

function NoticeBoard() {
  const updates = ["New Routine has been added", "xyz"];
  const events = ["Foudners Day on 25'th", "Intra Class Debate"];
  return (
    <div className="row">
      <div className="co-md-4 m-auto">
        <h2>Today's Updates</h2>
        <hr />
        {updates.map(ele => (
          <p className="lead">
            <i class="far fa-arrow-alt-circle-right"></i>
            {ele}
          </p>
        ))}
      </div>
      <div className="col-md-4 m-auto">
        <h2>Upcoming Events</h2>
        <hr />
        {events.map(ele => (
          <p className="lead">
            <i class="far fa-arrow-alt-circle-right"></i>
            {ele}
          </p>
        ))}
      </div>
    </div>
  );
}

export default NoticeBoard;

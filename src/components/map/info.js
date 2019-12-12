import React, { Component } from 'react';


const Info = (props) => (
 <div>
      <h1 id="firstHeading" className="firstHeading">
        {props.b_type}
      </h1>
      <div id="bodyContent">
        <p>
            {props.details}
        </p>
        <p>
        start date: {props.start_date}
        </p>
        <p>
        end date: {props.end_date}
        </p>
    </div>
    </div>
  );

export default Info;

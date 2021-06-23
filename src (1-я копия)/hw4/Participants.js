import React, { useState } from "react";
import { connect } from "react-redux";

import Participant from "./Participant.js";

const Participants = (props) => {

  const [finder, setFinder] = useState("");
  const { participants } = props;

  return (
    <div className="catalog">
      <input
        type="text"
        placeholder="Enter participant name or ID..."
        onChange={(e) => setFinder(e.target.value)}
      />
      <div className="participants">  
        { participants.filter((item) => {
            if (finder === "") return item;
            if (item.name.includes(finder) || item.id.toString().includes(finder)) return item;
            return false;
          }).map((item) => (
            <Participant participant={item} key={item.name} />
          ))}
      </div>
    </div>
  );
};

const StateToProps = state => state;

const WrapParticipants = connect(StateToProps)(Participants);

export default WrapParticipants;

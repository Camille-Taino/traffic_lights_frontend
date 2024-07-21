import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsTurnRight } from "@fortawesome/free-solid-svg-icons";

interface TrafficLightProps {
  direction: string;
  current_light_state: string;
  is_direction_right_turn: boolean;
}

const Light = styled(Paper)(({ color }) => ({
  height: "100px",
  width: "100px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color,
  color: "black",
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: "10px",
}));

const TrafficLight: React.FC<TrafficLightProps> = ({
  direction,
  current_light_state,
  is_direction_right_turn,
}) => {
  const getColor = (state: string) => {
    switch (state) {
      case "GREEN":
        return "green";
      case "YELLOW":
        return "yellow";
      case "RED":
        return "red";
      default:
        return "grey";
    }
  };

  return (
    <div>
      <Light color={getColor(current_light_state)} elevation={4}>
        {direction}
      </Light>
      {is_direction_right_turn && direction === "North" && (
        <button style={{ marginTop: "30px" }}>
          <div style={{ color: "GREEN", marginTop: "10px", fontSize: "24px" }}>
            <FontAwesomeIcon icon={faArrowsTurnRight} /> Turn Right
          </div>
        </button>
      )}
    </div>
  );
};

export default TrafficLight;

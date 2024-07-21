import React, { useEffect, useState } from "react";
import TrafficLight from "./TrafficLight";
import { Grid } from "@mui/material";
import axios from "axios";

interface TrafficLightData {
  direction: string;
  current_light_state_color: string;
  is_direction_right_turn: boolean;
}

const TrafficLightsContainer: React.FC = () => {
  const [trafficLights, setTrafficLights] = useState<TrafficLightData[]>([]);

  useEffect(() => {
    const fetchTrafficLights = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7071/api/traffic_lights_api"
        );
        setTrafficLights(response.data);
      } catch (error) {
        console.error("Failed to fetch traffic lights", error);
      }
    };

    fetchTrafficLights();
    const interval = setInterval(fetchTrafficLights, 1000); // Poll every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Grid container justifyContent="center">
      {trafficLights.map((light) => (
        <TrafficLight
          key={light.direction}
          direction={light.direction}
          current_light_state={light.current_light_state_color}
          is_direction_right_turn={light.is_direction_right_turn}
        />
      ))}
    </Grid>
  );
};

export default TrafficLightsContainer;

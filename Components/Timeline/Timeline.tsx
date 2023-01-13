import styles from "./TimeLine.module.css";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

export default function TimelineF() {
  return (
    <div className={styles.timeline}>
      <p className={styles.head}>Timeline</p>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="grey"
            className="styles.timing"
          >
            9:30 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector
              sx={{
                background: "linear-gradient(black,#4a404a)",
                width: "40%",
                height: "2rem",
              }}
            />
            <TimelineDot color="secondary" sx={{ margin: 0, padding: "7px" }}>
              {/* <FastfoodIcon /> */}
            </TimelineDot>
            <TimelineConnector
              sx={{ background: "#4a404a", width: "40%", height: "6rem" }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              component="span"
              color={"white"}
              className={styles.shape}
            >
              Freelancer
            </Typography>
            <Typography
              color={"white"}
              fontStyle={"italic"}
              className={styles.text}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              optio .{" "}
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color={"grey"}
            className="styles.timing"
          >
            10:00 am
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector
              sx={{ background: "#4a404a", width: "40%", height: "2rem" }}
            />
            <TimelineDot color="secondary" sx={{ margin: 0, padding: "7px" }}>
              {/* <FastfoodIcon /> */}
            </TimelineDot>
            <TimelineConnector
              sx={{ background: "#4a404a", width: "40%", height: "6rem" }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              component="span"
              color={"white"}
              className={styles.shapeLeft}
            >
              Freelancer
            </Typography>
            <Typography
              color={"white"}
              fontStyle={"italic"}
              className={styles.text}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              optio .{" "}
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="grey"
            className="styles.timing"
          >
            9:30 am
          </TimelineOppositeContent>

          <TimelineSeparator>
            <TimelineConnector
              sx={{ background: "#4a404a", width: "40%", height: "2rem" }}
            />
            <TimelineDot color="secondary" sx={{ margin: 0, padding: "7px" }}>
              {/* <FastfoodIcon /> */}
            </TimelineDot>
            <TimelineConnector
              sx={{
                background: "linear-gradient(#4a404a,black)",
                width: "40%",
                height: "6rem",
              }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              component="span"
              color={"white"}
              className={styles.shape}
            >
              Freelancer
            </Typography>
            <Typography
              color={"white"}
              fontStyle={"italic"}
              className={styles.text}
            >
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              optio .{" "}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

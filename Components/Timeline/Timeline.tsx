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
           <Typography>Thu Jan 22 2023 IST</Typography>
          <Typography>08:00:00 AM</Typography>
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
             NSCC WebXplore
            </Typography>
            <Typography
              color={"white"}
              fontStyle={"italic"}
              className={styles.text}
            >
              Hackathon Begins
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
           <Typography>Thu Jan 26 2023 IST</Typography>
          <Typography>02:00:00 PM - 05:00:00 PM (3hrs)</Typography>
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
             NSCC CodeHive
            </Typography>
            <Typography
              color={"white"}
              fontStyle={"italic"}
              className={styles.text}
            >
              Competitive Programming Contest
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
           <Typography>Thu Jan 28 2023 IST</Typography>
          <Typography>09:00:00 PM - 12:00:00 AM (3 hrs)</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector
              sx={{
                background: "#4a404a",
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
              Newton School CodeRush-X
            </Typography>
            <Typography
              color={"white"}
              fontStyle={"italic"}
              className={styles.text}
            >
             Competitive Programming Contest
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
          <Typography>Thu Jan 29 2023 IST</Typography>
          <Typography>11:59:59</Typography>
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
             NSCC WebXplore
            </Typography>
            <Typography
              color={"white"}
              fontStyle={"italic"}
              className={styles.text}
            >
              Hackathon Ends
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
           <Typography>Thu Jan 28 2023 IST</Typography>
          <Typography>09:00:00 PM - 12:00:00 AM (3 hrs)</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector
              sx={{
                background: "#4a404a",
                width: "40%",
                height: "2rem",
              }}
            />
            <TimelineDot color="secondary" sx={{ margin: 0, padding: "7px" }}>
              {/* <FastfoodIcon /> */}
            </TimelineDot>
            <TimelineConnector
              sx={{ background:"linear-gradient(#4a404a,black)", width: "40%", height: "6rem" }}
            />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography
              variant="h6"
              component="span"
              color={"white"}
              className={styles.shape}
            >
             Happy Valentines Week ❤️
            </Typography>
            <Typography
              color={"white"}
              fontStyle={"italic"}
              className={styles.text}
            >
             Single Dal at NSCC will host next event in 2nd week of Feb :)
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

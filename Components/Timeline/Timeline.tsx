import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import TerminalTwoToneIcon from '@mui/icons-material/TerminalTwoTone';
import styles from "./TimeLine.module.css"
export default function TimelineF() {
  return (
    <div>
    <h3 className={styles.text}>Timeline</h3>
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <Typography color={"white"}>Thu Jan 22 2023 IST</Typography>
          <Typography color={"white"}>08:00:00 AM</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '48px', px: 2 }}>
          <Typography  variant="h6" component="span" sx={{color:"rgba(122, 156, 224, 1)",fontWeight:"800",fontSize:"28px"}}>
            NSCC WebXplore
          </Typography>
          <Typography color={"grey"}>Hackathon Begins</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ py: '48px', px: 2 }}
          color="text.secondary"
        >
          <Typography color={"white"}>Thu Jan 26 2023 IST</Typography>
          <Typography color={"white"}>02:00:00 PM - 05:00:00 PM (3hrs)</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <DeveloperModeIcon sx={{color:"white"}}/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '48px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{color:"rgba(122, 156, 224, 1)",fontWeight:"800",fontSize:"28px"}}>
            NSCC CodeHive
          </Typography>
          <Typography color={"grey"}>Competitive Programming Contest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ py: '48px', px: 2 }}
          color="text.secondary"
        >
          <Typography color={"white"}>Thu Jan 28 2023 IST</Typography>
          <Typography color={"white"}>09:00:00 PM - 12:00:00 AM (3 hrs)</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <TerminalTwoToneIcon sx={{color:"white"}}/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '48px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{color:"rgba(122, 156, 224, 1)",fontWeight:"800",fontSize:"28px"}}>
            Newton School CodeRush-X
          </Typography>
          <Typography color={"grey"}>Competitive Programming Contest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          <Typography color={"white"}>Thu Jan 29 2023 IST</Typography>
          <Typography color={"white"}>11:59:59</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '48px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{color:"rgba(122, 156, 224, 1)",fontWeight:"800",fontSize:"28px"}}>
            NSCC WebXplore
          </Typography>
          <Typography color={"grey"}>Hackathon Ends</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '48px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{color:"rgba(122, 156, 224, 1)",fontWeight:"800",fontSize:"28px"}}>
            Happy Valentines Week ❤️
          </Typography>
          <Typography color={"grey"}>
            Single Dal at NSCC will host next event in 2nd week of Feb :)
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}

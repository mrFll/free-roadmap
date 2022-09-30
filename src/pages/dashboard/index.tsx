import { Grid } from "@mui/material";
import { NextPage } from "next";
import WeekColumn from "../../components/WeekColumn";
import theme from "../../theme/theme";
import { Week } from "../../types/types";
import styles from "./index.module.scss";

const Dashboard: NextPage = () => {
  const weeksPerView = 4;
  const weekMdSize = 12 / weeksPerView;
  const weeks: Array<Week> = [
    {
      id: 1,
      courses: [
        {
          id: "js",
          name: "JS",
          lessons: [
            { id: "l1", name: "Lesson 1" },
            { id: "l2", name: "Lesson 2" },
            { id: "l3", name: "Lesson 3" },
            { id: "l2", name: "Lesson 4" },
          ],
          color: theme.palette.common.green.lighter,
        },
        {
          id: "db",
          name: "Database",
          lessons: [
            { id: "l1", name: "Lesson 1" },
            { id: "l2", name: "Lesson 2" },
            { id: "l3", name: "Lesson 3" },
            { id: "l2", name: "Lesson 4" },
          ],
          color: theme.palette.common.blue.lighter,
        },
      ],
    },
    {
      id: 2,
      courses: [
        {
          id: "db",
          name: "Database",
          lessons: [
            { id: "l1", name: "Lesson 1" },
            { id: "l2", name: "Lesson 2" },
          ],
          color: theme.palette.common.blue.lighter,
        },
        {
          id: "uiux",
          name: "UI/UX",
          lessons: [
            { id: "l1", name: "Lesson 1" },
            { id: "l2", name: "Lesson 2" },
            { id: "l3", name: "Lesson 3" },
            { id: "l2", name: "Lesson 4" },
          ],
          color: theme.palette.common.red.lighter,
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing="16px" className={styles.gridContainer}>
        {weeks
          .filter((_, index) => index < weeksPerView)
          .map((week) => (
            <Grid
              item
              md={weekMdSize}
              className={styles.gridItem}
              key={week.id}
            >
              <WeekColumn week={week} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Dashboard;

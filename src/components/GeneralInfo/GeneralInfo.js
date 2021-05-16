import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"

const GeneralInfo = ({ data }) => {
  const useStyles = makeStyles((theme) => ({
    space: {
      paddingBottom: "20px",
    },
    workersNumber: {
      height: 165,
    },
    heighestSalary: {
      height: 73,
    },
    rightCol: {
      minHeight: "100%",
    },
  }))
  const classes = useStyles()

  // Highest Salary
  const hs = (data) => {
    const salaryArr = Array.from(data, (item) => {
      return item.salary
    })
    const highestSalary = Math.max(...salaryArr)
    return data.filter((x) => x.salary === highestSalary)
  }

  // Employee Most Recently Joined
  const emrc = (data) => {
    const dateArr = new Date(
      Math.max(
        ...data.map((x) => new Date(x.dateJoined.split(" ", 4).join(" ")))
      )
    )

    const latestEmployee = data.filter(
      (employee) =>
        employee.dateJoined.split(" ", 4).join(" ") ===
        String(dateArr).split(" ", 4).join(" ")
    )
    return latestEmployee[0]
  }

  const highestEarningEmployeeObj = hs(data)[0]
  const mostRecentlyJoined = emrc(data)

  return (
    <>
      <Container style={{ marginBottom: "16px" }}>
        <Grid
          container
          direction="row"
          justify="auto"
          alignItems="center"
          spacing={2}
        >
          <Grid item md={3} sm={12} xs={12}>
            <Paper
              elevation={10}
              style={{ borderRadius: "16px", padding: "20px" }}
              className={classes.workersNumber}
            >
              <Typography
                style={{ minWidth: "100%" }}
                variant="h6"
                align="center"
              >
                Number Of Workers
              </Typography>
              <Typography variant="h1" align="center">
                {data.length}
              </Typography>
            </Paper>
          </Grid>
          <Grid
            md={9}
            sm={12}
            xs={12}
            item
            direction="column"
            justify="flex-start"
            // alignItems="space-between"
            className="rightCol"
          >
            <Grid item>
              <Paper
                elevation={10}
                style={{
                  marginBottom: 20,
                  borderRadius: "16px",
                  padding: "20px",
                }}
                className={classes.heighestSalary}
              >
                <Typography variant="body">
                  Highest Earning Employee :{" "}
                  <strong>{`${highestEarningEmployeeObj.firstname} ${highestEarningEmployeeObj.lastname}`}</strong>
                </Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper
                elevation={10}
                style={{ borderRadius: "16px", padding: "20px" }}
                className={classes.heighestSalary}
              >
                <Typography variant="body">
                  Employee Most Recently Joined :{" "}
                  <strong>{`${mostRecentlyJoined.firstname} ${mostRecentlyJoined.lastname}`}</strong>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default GeneralInfo

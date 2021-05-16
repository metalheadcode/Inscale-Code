import React from "react"
import Container from "@material-ui/core/Container"
import NewTable from "./components/Table/NewTable"
import GeneralInfo from "./components/GeneralInfo/GeneralInfo"
import data from "./data/data.js"
import BgImage from "./img/wallpaper.png"

const App = () => {
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <img
          src={BgImage}
          alt="bgimage"
          style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
          }}
        />
        <Container
          style={{
            position: "absolute",
          }}
        >
          <GeneralInfo data={data} />
          <NewTable data={data} />
        </Container>
      </section>
    </>
  )
}

export default App

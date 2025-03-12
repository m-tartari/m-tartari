import React from 'react'
import { Box, Typography } from '@mui/material'

import { ViewportProvider } from 'components/utils/viewport'
import { AcademyIconLink, DescriptionIconLink, ExternalAppIconLink, GitHubIconLink, VideoIconLink } from 'components/atoms'
import { Footer, Hero, Toolbar, ProjectSpotlight } from 'components/molecules'

const MainPage = () => {
  React.useEffect(() => {
    document.title = 'Michele Tartari'
  }, [])

  const refIITLinfa = React.useRef<HTMLSelectElement>(null)
  const refIITModular = React.useRef<HTMLSelectElement>(null)
  const refIITCalibration = React.useRef<HTMLSelectElement>(null)
  const refWUTThesis = React.useRef<HTMLSelectElement>(null)

  return (
    <ViewportProvider>
      <Box aria-label="page" sx={{ flexGrow: 1 }}>
        <Toolbar position="absolute" sx={{ backgroundColor: 'transparent' }} />
        <Hero scrollTarget={refIITLinfa} />
        {/*  1 IIT - Linfa */}
        <ProjectSpotlight
          ref={refIITLinfa}
          scrollTarget={refIITModular}
          anchor="bottom"
          image="images/IIT_Linfa.webp"
          title="LINFA: An Intuitive Block-Programming Interface for Reconfigurable Robots"
          caption={
            <>
              <VideoIconLink size="small" fontSize="small" href="https://www.linkedin.com/feed/update/urn:li:activity:7034480841569284096/" />
              <Typography component="span" color="text.secondary" ml={1}>
                Software Engineer @ IIT
              </Typography>
            </>
          }>
          This project aims to simplify the control, monitoring, and programming of reconfigurable robots through an intuitive block-programming
          interface. It includes a front-end web app, built with TypeScript and React, allowing users to effortlessly change robot operating modes and
          settings, monitor the robot's state, and assemble programs by dragging and dropping code blocks representing various robot capabilities.
          Additionally, back-end services, developed with TypeScript and Python, translate these programs into formats compatible with the underlying
          systems and manage mission execution. The project emphasizes extensibility, enabling users with Python experience to integrate custom blocks
          and capabilities. Automated CI/CD pipelines further streamline integration and deployment processes.
        </ProjectSpotlight>
        {/*  2 IIT - Modular */}
        <ProjectSpotlight
          ref={refIITModular}
          scrollTarget={refIITCalibration}
          anchor="right"
          // anchor="left"
          image="images/IIT_Modular.png"
          mobileImage="images/IIT_Modular_Mobile.webp"
          title="Revamping HHCM's Modular: Swift Generation of Modular Robot Models"
          caption={
            <>
              <GitHubIconLink size="small" fontSize="small" href="https://github.com/ADVRHumanoids/motor_calibration" />
              <ExternalAppIconLink size="small" fontSize="small" href="https://modular.alberobotics.it" />
              <Typography component="span" color="text.secondary" ml={1}>
                Software Engineer @ IIT
              </Typography>
            </>
          }>
          This project focused on overhauling HHCM's Modular, enhancing its graphical interface, API, and deployment pipeline. Modular serves as a web
          application for the swift generation of modular robot models, with an offline approach (Building Mode) enabling users to set up robots in a
          virtual environment by selecting and assembling reconfigurable modules, immediately visualized in 3D. Additionally, an online approach
          (Discovery Mode) allows users to query the EtherCAT master for network topology, recognizing and displaying robots built from physical
          modules in 3D. The system seamlessly produces URDF, SRDF, and a full ROS package that can then be utilized for simulating and controlling
          the robot.
        </ProjectSpotlight>
        {/*  3  IIT - Motor Calibration */}
        <ProjectSpotlight
          ref={refIITCalibration}
          scrollTarget={refWUTThesis}
          anchor="left"
          image="images/IIT_Modules.webp"
          title="Automated Actuators and Robotic Modules Calibration"
          caption={
            <>
              <GitHubIconLink size="small" fontSize="small" href="https://github.com/ADVRHumanoids/motor_calibration" />
              <Typography component="span" color="text.secondary" ml={1}>
                Embedded Engineer @ IIT
              </Typography>
            </>
          }>
          This project focused on automating the calibration of EtherCAT actuators and robotic modules, aiming for a fully automated procedure for
          newly assembled actuators. The process involved testing the PDO, conducting phase angle calibration, torque sensor calibration, ripple and
          position-dependent torque offset calibration, inertia and friction identification, and frequency response calibration. The goal was to
          optimize motor performance and collect necessary data for accurate characterization, with results stored centrally and presented in a
          comprehensive PDF report.
        </ProjectSpotlight>
        {/*  4 WUT - Master Thesis */}
        <ProjectSpotlight
          ref={refWUTThesis}
          anchor="bottom"
          image="images/thesis.jpg"
          mobileImage="images/thesis.webp"
          title="Voice Controlled Mobile Robot for Indoor Applications"
          caption={
            <>
              <AcademyIconLink size="small" fontSize="small" href="https://doi.org/10.1007/978-3-030-58380-4_7" />

              <DescriptionIconLink
                size="small"
                fontSize="small"
                href="https://drive.google.com/file/d/1wBfvAzy9N8uChNxNj9Kd_hcvI0Qq3uQj/view?usp=sharing"
              />
              <Typography component="span" color="text.secondary" ml={1}>
                Master Thesis @ WUT
              </Typography>
            </>
          }>
          This thesis proposes a design for a small mobile robot controlled by voice. Firstly a preliminary analysis of the state of art of
          human-robot interaction has been conducted. Then, an analysis of the equipment selected took place, and, later, appropriate methodologies
          for voice recognition and user detection have been evaluated for this specific case. Finally, an overview of the complete software
          architecture of the system was given with three possible structures and their comparison. The results obtained show both the feasibility of
          using low power boards and some of their limitations.
        </ProjectSpotlight>
        <Footer />
      </Box>
    </ViewportProvider>
  )
}

export default MainPage

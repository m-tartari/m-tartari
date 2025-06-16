import { Box, Divider, Link, Typography } from '@mui/material'

import { GitHubIconLink, DescriptionIconLink, VideoIconLink, AcademyIconLink, ExternalAppIconLink } from 'components/atoms/index.js'
import { Project } from 'components/molecules/index.js'
import { Page } from 'components/templates/index.js'

const ProjectsPage = () => {
  return (
    <Page title="Projects">
      <Box component="section" id="robotics">
        <Typography variant="h4" color="primary.main" gutterBottom>
          Robotics
        </Typography>
        <Typography gutterBottom>
          Here is a collection of all the projects that are strictly related to the design, development and functioning of robots:
        </Typography>
        <Project
          title="LINFA: An Intuitive Block-Programming Interface for Reconfigurable Robots"
          subtitle={
            <>
              <Typography color="text.secondary" display={{ sm: 'none' }}>
                Software Engineer @ IIT
              </Typography>
              <VideoIconLink
                pt={0.5}
                fontSize="small"
                href="https://www.linkedin.com/feed/update/urn:li:activity:7034480841569284096/"
                sx={{ color: 'text.secondary' }}
              />
              {/* <Typography color="text.secondary" display="inline-block"> */}
              <Typography color="text.secondary" display={{ xs: 'none', sm: 'inline' }}>
                Software Engineer @ IIT
              </Typography>
            </>
          }>
          <Typography>
            This project aims to simplify the control, monitoring, and programming of reconfigurable robots through an intuitive block-programming
            interface. It includes a frontend web app, built with TypeScript and React, allowing users to effortlessly change robot operating modes
            and settings, monitor the robot's state, and assemble programs by dragging and dropping code blocks representing various robot
            capabilities. Additionally, backend services, developed with TypeScript and Python, translate these programs into formats compatible with
            the underlying systems and manage mission execution. The project emphasizes extensibility, enabling users with Python experience to
            integrate custom blocks and capabilities. Automated CI/CD pipelines further streamline integration and deployment processes.
          </Typography>
        </Project>
        <Project
          title="Revamping HHCM's Modular: Swift Generation and Control of Modular Robot Models"
          subtitle={
            <>
              <Typography color="text.secondary" display={{ sm: 'none' }}>
                Software Engineer @ IIT
              </Typography>
              <GitHubIconLink pt={0.5} fontSize="small" href="https://github.com/ADVRHumanoids/modular_hhcm/" sx={{ color: 'text.secondary' }} />
              <ExternalAppIconLink pt={0.5} fontSize="small" href="https://modular.alberobotics.it" sx={{ color: 'text.secondary' }} />
              <Typography color="text.secondary" display={{ xs: 'none', sm: 'inline' }}>
                Software Engineer @ IIT
              </Typography>
            </>
          }>
          <Typography>
            This project centered on overhauling HHCM's Modular by redesigning its graphical interface, API, and deployment pipeline. Modular serves
            as a web application for swiftly generating models of modular robots. Starting with a collection of fundamental robotic modules, the
            system produces URDF, SRDF, and a full ROS package seamlessly and without coding. These can then be utilized for simulating and
            controlling the robot.
          </Typography>
        </Project>
        <Project
          title="Voice Controlled Mobile Robot for Indoor Applications"
          subtitle={
            <>
              <Typography color="text.secondary" display={{ sm: 'none' }}>
                Master Thesis @ WUT
              </Typography>
              <AcademyIconLink pt={0.5} fontSize="small" href="https://doi.org/10.1007/978-3-030-58380-4_7" sx={{ color: 'text.secondary' }} />
              <DescriptionIconLink
                pt={0.5}
                fontSize="small"
                href="https://drive.google.com/drive/folders/1Y7TJJN8z1llCkSTnpVHMELD3PqsX8VF9?usp=sharing"
                sx={{ color: 'text.secondary' }}
              />
              <Typography color="text.secondary" display={{ xs: 'none', sm: 'inline' }}>
                Master Thesis @ WUT
              </Typography>
            </>
          }>
          <Typography>
            This thesis proposes a design for a small mobile robot controlled by voice. Firstly a preliminary analysis of the state of art of
            human-robot interaction has been conducted. Then, an analysis of the equipment selected took place, and, later, appropriate methodologies
            for voice recognition and user detection have been evaluated for this specific case. Finally, an overview of the complete software
            architecture of the system was given with three possible structures and their comparison. The results obtained show both the feasibility
            of using low power boards and some of their limitations.
          </Typography>
        </Project>
        <Project
          title="Recharging Electric Cars with a Mobile Robot"
          subtitle={
            <DescriptionIconLink
              pt={0.5}
              fontSize="small"
              href="https://drive.google.com/file/d/1wBfvAzy9N8uChNxNj9Kd_hcvI0Qq3uQj/view?usp=sharing"
              sx={{ color: 'text.secondary' }}
            />
          }>
          <Typography>
            The aim of this project was to prove the possibility to design an autonomous mobile robot whose task was to recharge electric cars in a
            parking lot. This was done in simulation, using the Gazebo and ROS.
          </Typography>
        </Project>
        <Project
          title="Mobile Robot Self-Localization"
          subtitle={
            <>
              <GitHubIconLink pt={0.5} fontSize="small" href="https://github.com/m-tartari/ekf_matlab" sx={{ color: 'text.secondary' }} />
              <DescriptionIconLink
                pt={0.5}
                fontSize="small"
                href="https://drive.google.com/file/d/1BgPj-fgtYDDEsFHmDk2fGVm7DCPFWEeN/view?usp=sharing"
                sx={{ color: 'text.secondary' }}
              />
            </>
          }>
          <Typography>
            For this project we worked using Matlab on data retrieved from a differential drive robot for its localization in a certain area by the
            means of the Extended Kalman filter (EKF).
          </Typography>
        </Project>
        <Project
          title="Onychophora-Inspired Firefighting Robot"
          subtitle={
            <>
              <GitHubIconLink pt={0.5} fontSize="small" href="https://github.com/m-tartari/firebot" sx={{ color: 'text.secondary' }} />
              <DescriptionIconLink
                pt={0.5}
                fontSize="small"
                href="https://drive.google.com/open?id=1a_ZvgaQjzvedeo296zrDpdvNL_VJDWTX"
                sx={{ color: 'text.secondary' }}
              />
            </>
          }>
          <Typography>
            This project proposes a conceptual design for a firefighting robot suitable for indoor environments by taking inspiration from the
            biological world.
          </Typography>
        </Project>
        <Project
          title="Point-to-Point Trajectory Optimization"
          subtitle={
            <>
              {/* */}
              <GitHubIconLink
                pt={0.5}
                fontSize="small"
                href="https://github.com/m-tartari/simple_trajectory_optimization"
                sx={{ color: 'text.secondary' }}
              />
              <DescriptionIconLink
                pt={0.5}
                fontSize="small"
                href="https://drive.google.com/open?id=11m7r7fLda_jpDEZ-9qAWvnfRN2kLkhlA"
                sx={{ color: 'text.secondary' }}
              />
            </>
          }>
          <Typography>
            For this project we worked to find the optimal trajectory for a simple model of a robot performing point-to-point navigation in a room
            with some obstacles using MATLAB.
          </Typography>
        </Project>
        <Project
          title="3RRR Planar Parallel Manipulator"
          subtitle={
            <>
              <GitHubIconLink
                pt={0.5}
                fontSize="small"
                href="https://github.com/m-tartari/3RRR_planar_parallel_manipulator"
                sx={{ color: 'text.secondary' }}
              />
              <DescriptionIconLink
                pt={0.5}
                fontSize="small"
                href="https://drive.google.com/open?id=11lCJM3EjVsua379BKD5NcEDHQLL4jdQn"
                sx={{ color: 'text.secondary' }}
              />
            </>
          }>
          <Typography>This project concerns the design and optimization of a 3RRR planar parallel manipulator using MATLAB and CATIA</Typography>
        </Project>
        <Project
          title="Simple Swarm"
          subtitle={
            <>
              <GitHubIconLink pt={0.5} fontSize="small" href="https://github.com/m-tartari/simple_swarm" sx={{ color: 'text.secondary' }} />
            </>
          }>
          <Typography>
            Simple simulation and visualization of swarms of differential drive robots following a leader. Developed using C++ and ROS.
          </Typography>
        </Project>
        <Project
          title="Industrial Robot Programming"
          subtitle={
            <>
              <GitHubIconLink
                pt={0.5}
                fontSize="small"
                href="https://github.com/m-tartari/industrial_robot_programming"
                sx={{ color: 'text.secondary' }}
              />
            </>
          }>
          <Typography>Industrial Robot Programming using VAL II and V+ tested on a PUMA and a RX90 robots.</Typography>
        </Project>
        <Project
          title="Modelling and Control of Manipulators"
          subtitle={
            <>
              <GitHubIconLink
                pt={0.5}
                fontSize="small"
                href="https://github.com/m-tartari/modelling_and_control_of_manipulators"
                sx={{ color: 'text.secondary' }}
              />
            </>
          }>
          <Typography>
            This contains several projects regarding modelling and control of various manipulators using MATLAB, Simulink and ADAMS.
          </Typography>
        </Project>
      </Box>
      <Divider sx={{ mt: 4, mb: 4 }} />
      <Box component="section" id="engineering">
        <Typography variant="h4" color="primary.main" gutterBottom sx={{ mt: 4 }}>
          Engineering
        </Typography>
        <Typography gutterBottom>Here there is a collection of all the projects that are related to all the other fields of engineering:</Typography>
        <Project
          title="Automated Actuators and Robotic Modules Calibration"
          subtitle={
            <>
              <Typography color="text.secondary" display={{ sm: 'none' }}>
                Embedded Engineer @ IIT
              </Typography>
              <GitHubIconLink pt={0.5} fontSize="small" href="https://github.com/ADVRHumanoids/motor_calibration" sx={{ color: 'text.secondary' }} />
              <Typography color="text.secondary" display={{ xs: 'none', sm: 'inline' }}>
                Embedded Engineer @ IIT
              </Typography>
            </>
          }>
          <Typography>
            This project focused on automating the calibration of EtherCAT actuators and robotic modules, aiming for a fully automated procedure for
            newly assembled actuators. The process involved testing the PDO, conducting phase angle calibration, torque sensor calibration, ripple and
            position-dependent torque offset calibration, inertia and friction identification, and frequency response calibration. The goal was to
            optimize motor performance and collect necessary data for accurate characterization, with results stored centrally and presented in a
            comprehensive PDF report.
          </Typography>
        </Project>
        <Project
          title="Solar Panel Fault Detection Method Based on Infrared Image
                Processing"
          subtitle={
            <>
              <Typography color="text.secondary" display={{ sm: 'none' }}>
                Bachelor Thesis @ TONGJI
              </Typography>
              <DescriptionIconLink
                pt={0.5}
                fontSize="small"
                href="https://drive.google.com/file/d/0B1z42QMR-0UtYzBYSVhRV3ZPWk0/view?resourcekey=0-3O0frJlyho7TRKwNcy8f4g"
                sx={{ color: 'text.secondary' }}
              />
              <Typography color="text.secondary" display={{ xs: 'none', sm: 'inline' }}>
                Bachelor Thesis @ TONGJI
              </Typography>
            </>
          }>
          <Typography>
            My Chinese bachelor thesis that proposes a method to detect malfunctioning solar panels by processing thermal images using MATLAB.
          </Typography>
        </Project>
        <Project
          title="Design of a Testing Machine for Flexure Hinges"
          subtitle={
            <>
              <Typography color="text.secondary" display={{ sm: 'none' }}>
                Bachelor Thesis @ UNIBO
              </Typography>
              <DescriptionIconLink
                pt={0.5}
                fontSize="small"
                href="https://drive.google.com/file/d/0B1z42QMR-0UtSkxRVzJPTk1IX0k/view?resourcekey=0-LN4KALZlLWc_lKekqqQbIw"
                sx={{ color: 'text.secondary' }}
              />
              <Typography color="text.secondary" display={{ xs: 'none', sm: 'inline' }}>
                Bachelor Thesis @ UNIBO
              </Typography>
            </>
          }>
          <Typography>
            My Italian bachelor thesis that proposes a design from scratch of a machine for the empirical characterization of flexure hinges.
          </Typography>
        </Project>
        <Project
          title="Control of a Nonlinear System"
          subtitle={
            <>
              <GitHubIconLink pt={0.5} fontSize="small" href="https://github.com/m-tartari/nonlinear_control" sx={{ color: 'text.secondary' }} />
              <DescriptionIconLink
                pt={0.5}
                fontSize="small"
                href="https://drive.google.com/file/d/1TE3TWkXZjVq8OuBkLl497c_MQSs3MiLQ/view?usp=sharing"
                sx={{ color: 'text.secondary' }}
              />
            </>
          }>
          <Typography>
            The aim of this project was to implement control laws for a nonlinear system (based on the model of a PVTOL aircraft).
          </Typography>
        </Project>
        <Project
          title="Multi-Body System's Kinematic Analysis"
          subtitle={
            <>
              <GitHubIconLink pt={0.5} fontSize="small" href="https://github.com/m-tartari/multi-body-kinematics" sx={{ color: 'text.secondary' }} />
              <DescriptionIconLink
                pt={0.5}
                fontSize="small"
                href="https://drive.google.com/file/d/15yrDU2blkb34Jy2GXkCIe4qNmDRmp31w/view?usp=sharing"
                sx={{ color: 'text.secondary' }}
              />
            </>
          }>
          <Typography>
            For this project the kinematic analysis has been performed upon agiven mechanism using MATLAB. It has been then validated by comparing it
            to the ADAMS model of the same mechanism.
          </Typography>
        </Project>
        <Project
          title="Signal Processing"
          subtitle={
            <GitHubIconLink pt={0.5} fontSize="small" href="https://github.com/m-tartari/signal_processing" sx={{ color: 'text.secondary' }} />
          }>
          <Typography>Several Signal processing projects developed using MATLAB.</Typography>
        </Project>
        <Project
          title="Real Time Systems"
          subtitle={
            <GitHubIconLink pt={0.5} fontSize="small" href="https://github.com/m-tartari/real_time_systems" sx={{ color: 'text.secondary' }} />
          }>
          <Typography>Several real-time systems' projects developed using C++ and OIL, and run using Trampoline RTOS on a Teensy board.</Typography>
        </Project>
      </Box>
      <Divider sx={{ mt: 4, mb: 4 }} />
      <Box component="section" id="hobbies">
        <Typography variant="h4" color="primary.main" gutterBottom sx={{ mt: 4 }}>
          Hobbies
        </Typography>
        <Typography gutterBottom>Here there is a collection of projects related to things I do for fun:</Typography>
        <Project
          title="Medieval Furniture"
          subtitle={
            <GitHubIconLink pt={0.5} fontSize="small" href="https://github.com/m-tartari/medieval_furniture" sx={{ color: 'text.secondary' }} />
          }>
          <Typography>
            A collection of pdf and CAD models to create late XIV century furniture and medieval camp equipment. These objects are being realized by{' '}
            <Link target="_blank" rel="noopener noreferrer" href="http://www.compagniadarmedelsantoluca.it/">
              Compagnia d'Arme del Santo Luca
            </Link>
            .
          </Typography>
        </Project>
        <Project
          title="Pinterest Pinner"
          subtitle={
            <GitHubIconLink pt={0.5} fontSize="small" href="https://github.com/m-tartari/pinterest_pinner" sx={{ color: 'text.secondary' }} />
          }>
          <Typography>
            Publishes all photos from a{' '}
            <Link target="_blank" rel="noopener noreferrer" href="http://www.compagniadarmedelsantoluca.it/">
              selected website
            </Link>{' '}
            into a target Pinterest board using Python3 and the Pinterest API
          </Typography>
        </Project>
      </Box>
    </Page>
  )
}

export default ProjectsPage

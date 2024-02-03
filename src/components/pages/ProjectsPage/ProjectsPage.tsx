import { Box, Link, Typography } from '@mui/material'

import { GitHubIconLink, DescriptionIconLink } from 'components/atoms'
import { Project } from 'components/molecules'
import { Page } from 'components/templates'

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
        <Project title="Voice Controlled Mobile Robot for Indoor Applications">
          <DescriptionIconLink
            size="small"
            fontSize="small"
            href="https://drive.google.com/file/d/1wBfvAzy9N8uChNxNj9Kd_hcvI0Qq3uQj/view?usp=sharing"
          />
          <Typography component="span" variant="caption">
            Master Thesis
          </Typography>
          <Typography>
            This thesis proposes a design from scratch for a small mobile robot controlled by voice using ROS. The results obtained show both the
            feasibility of using low power boards and some of their limitations. (Research publication in preparation)
          </Typography>
        </Project>
        <Project title="Recharging Electric Cars with a Mobile Robot">
          <DescriptionIconLink
            size="small"
            fontSize="small"
            href="https://drive.google.com/file/d/1BgPj-fgtYDDEsFHmDk2fGVm7DCPFWEeN/view?usp=sharing"
          />
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/ekf_matlab" />
          <Typography>
            The aim of this project was to prove the possibility to design an autonomous mobile robot whose task was to recharge electric cars in a
            parking lot. This was done in simulation, using the Gazebo and ROS.
          </Typography>
        </Project>
        <Project title="Mobile Robot Self-Localization">
          <DescriptionIconLink size="small" fontSize="small" href="https://drive.google.com/open?id=1a_ZvgaQjzvedeo296zrDpdvNL_VJDWTX" />
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/firebot" />
          <Typography>
            For this project we worked using Matlab on data retrieved from a differential drive robot for its localization in a certain area by the
            means of the Extended Kalman filter (EKF).
          </Typography>
        </Project>
        <Project title="Onychophora-Inspired Firefighting Robot">
          <DescriptionIconLink size="small" fontSize="small" href="https://drive.google.com/open?id=11lCJM3EjVsua379BKD5NcEDHQLL4jdQn" />
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/3RRR_planar_parallel_manipulator" />
          <Typography>
            This project proposes a conceptual design for a firefighting robot suitable for indoor environments by taking inspiration from the
            biological world.
          </Typography>
        </Project>
        <Project title="3RRR Planar Parallel Manipulator">
          <Typography>This project concerns the design and optimization of a 3RRR planar parallel manipulator using MATLAB and CATIA</Typography>
        </Project>
        <Project title="Point-to-Point Trajectory Optimization">
          <DescriptionIconLink size="small" fontSize="small" href="https://drive.google.com/open?id=11m7r7fLda_jpDEZ-9qAWvnfRN2kLkhlA" />
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/simple_trajectory_optimization" />
          <Typography>
            For this project we worked to find the optimal trajectory for a simple model of a robot performing point-to-point navigation in a room
            with some obstacles using MATLAB.
          </Typography>
        </Project>
        <Project title="Simple Swarm">
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/simple_swarm" />
          <Typography>
            Simple simulation and visualization of swarms of differential drive robots following a leader. Developed using C++ and ROS.
          </Typography>
        </Project>
        <Project title="Industrial Robot Programming">
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/industrial_robot_programming" />
          <Typography>Industrial Robot Programming using VAL II and V+ tested on a PUMA and a RX90 robots.</Typography>
        </Project>
        <Project title="Modelling and Control of Manipulators">
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/modelling_and_control_of_manipulators" />
          <Typography>
            This contains several projects regarding modelling and control of various manipulators using MATLAB, Simulink and ADAMS.
          </Typography>
        </Project>
      </Box>
      <Box component="section" id="engineering">
        <Typography variant="h4" color="primary.main" gutterBottom sx={{ mt: 4 }}>
          Engineering
        </Typography>
        <Typography gutterBottom>Here there is a collection of all the projects that are related to all the other fields of engineering:</Typography>
        <Project
          title="Solar Panel Fault Detection Method Based on Infrared Image
                Processing">
          <DescriptionIconLink size="small" fontSize="small" href="https://drive.google.com/file/d/0B1z42QMR-0UtYzBYSVhRV3ZPWk0/view?usp=sharing" />
          <Typography component="span" variant="caption">
            Bachelor Thesis
          </Typography>
          <Typography>
            My Chinese bachelor thesis that proposes a method to detect malfunctioning solar panels by processing thermal images using MATLAB.
          </Typography>
        </Project>
        <Project title="Design of a Testing Machine for Flexure Hinges">
          <DescriptionIconLink size="small" fontSize="small" href="https://drive.google.com/file/d/0B1z42QMR-0UtSkxRVzJPTk1IX0k/view?usp=sharing" />
          <Typography component="span" variant="caption">
            Bachelor Thesis
          </Typography>
          <Typography>
            My Italian bachelor thesis that proposes a design from scratch of a machine for the empirical characterization of flexure hinges.
          </Typography>
        </Project>
        <Project title="Control of a Nonlinear System">
          <DescriptionIconLink
            size="small"
            fontSize="small"
            href="https://drive.google.com/file/d/1TE3TWkXZjVq8OuBkLl497c_MQSs3MiLQ/view?usp=sharing"
          />
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/modelling_and_control_of_manipulators" />
          <Typography>
            The aim of this project was to implement control laws for a nonlinear system (based on the model of a PVTOL aircraft).
          </Typography>
        </Project>
        <Project title="Multi-Body System's Kinematic Analysis">
          <DescriptionIconLink
            size="small"
            fontSize="small"
            href="https://drive.google.com/file/d/15yrDU2blkb34Jy2GXkCIe4qNmDRmp31w/view?usp=sharing"
          />
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/multi-body-kinematics" />
          <Typography>
            For this project the kinematic analysis has been performed upon agiven mechanism using MATLAB. It has been then validated by comparing it
            to the ADAMS model of the same mechanism.
          </Typography>
        </Project>
        <Project title="Signal Processing">
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/signal_processing" />
          <Typography>Several Signal processing projects developed using MATLAB.</Typography>
        </Project>
        <Project title="Real Time Systems">
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/real_time_systems" />
          <Typography>Several real-time systems' projects developed using C++ and OIL, and run using Trampoline RTOS on a Teensy board.</Typography>
        </Project>
      </Box>
      <Box component="section" id="robotics">
        <Typography variant="h4" color="primary.main" gutterBottom sx={{ mt: 4 }}>
          Hobbies
        </Typography>
        <Typography gutterBottom>Here there is a collection of projects related to things I do for fun:</Typography>
        <Project title="Medieval Furniture">
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/medieval_furniture" />
          <Typography>
            A collection of pdf and CAD models to create late XIV century furniture and medieval camp equipment. These objects are being realized by{' '}
            <Link target="_blank" rel="noopener noreferrer" href="http://www.compagniadarmedelsantoluca.it/">
              Compagnia d'Arme del Santo Luca
            </Link>
            .
          </Typography>
        </Project>
        <Project title="Pinterest Pinner">
          <GitHubIconLink size="small" fontSize="small" href="https://github.com/m-tartari/pinterest_pinner" />
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

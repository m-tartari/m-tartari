import { Box, Divider, Link, Stack, Table, TableCell, TableRow, Typography } from '@mui/material'

import { Award, ExternalIconLink, Extracurricular, Publication } from 'components/atoms'
import { CurriculumItem } from 'components/molecules'
import { Page } from 'components/templates'

const Curriculum = () => {
  return (
    <Page title="Curriculum">
      <Box component="section" id="work">
        <Typography variant="h4" color="primary.main" gutterBottom>
          Work Experience
        </Typography>

        {/* id="selfemployed-software" */}
        <CurriculumItem title="Software Engineering Consultant" dates="04/24 - Today" company="Self-Employed" location="Remote">
          <Typography>
            <ul style={{ paddingLeft: '1em', marginTop: 0 }}>
              <li>
                Design and development of customized graphical interfaces and software components to facilitate the use of robots and industrial
                machines.
              </li>
              <li>Production and maintenance of revisions of the documentation.</li>
              <li>Providing technical assistance for R&D activities.</li>
            </ul>
          </Typography>
        </CurriculumItem>
        {/* id="MinHub-lead" */}
        <CurriculumItem title="Business Partner & Technical Lead" dates="03/23 - 12/24" company="MindHub Ferrara" location="Ferrara, Italy">
          <Typography>
            Co-founded{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              // href="https://www.facebook.com/profile.php?id=61550278936416"
              // href="https://mind-hub.it/contact-hall/mindhub-ferrara/"
              href="https://www.linkedin.com/company/mindhub-ferrara/">
              MindHub Ferrara
            </Link>
            , the first programming school for children in Ferrara, under the{' '}
            <Link target="_blank" rel="noopener noreferrer" href="https://mind-hub.it/">
              MindHub Academy franchise
            </Link>
            , dedicated to teaching programming fundamentals and enhancing logical and analytical skills. My duties include:
            <ul style={{ paddingLeft: '1em', marginTop: 0 }}>
              <li>Selecting and validating the hardware, the software, and the curriculum taught at our hall.</li>
              <li>Supporting the hiring process and training of instructors and teachers.</li>
              <li>Providing technical assistance for educational activities.</li>
            </ul>
          </Typography>
        </CurriculumItem>
        {/* id="IIT-software" */}
        <CurriculumItem title="Software Engineer" dates="06/21 - 04/24" company="Istituto Italiano di Tecnologia" location="Remote">
          <Typography>
            Worked in{' '}
            <Link target="_blank" rel="noopener noreferrer" href="https://web.archive.org/web/20220706131402/https://alberobotics.it/">
              Alberobotics
            </Link>
            : a technology transfer project within the{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="assets/archive/iit-hhcm/www.iit.it/it/web/humanoids-human-centered-mechatronics.html">
              Humanoid and Human Centred Mechatronics (HHCM) Research Line
            </Link>{' '}
            of the Italian Institute of Technology (IIT). My duties included:
            <ul style={{ paddingLeft: '1em', marginTop: 0 }}>
              <li>developing customized graphical interfaces and front-end/back-end software components to facilitate the use of robots.</li>
              <li>evaluating, integrating, and maintaining perception systems for the development of new use cases and demonstrators.</li>
              <li>
                participating in the company stands at trade fairs and interacting with potential investors for the promotion of our project and
                robot.
              </li>
              <li>producing and maintaining revisions of documentation.</li>
              <li>providing technical assistance for research activities.</li>
            </ul>
          </Typography>
        </CurriculumItem>
        {/* id="IIT-embedded" */}
        <CurriculumItem title="Embedded Engineer" dates="04/20 - 06/21" company="Istituto Italiano di Tecnologia" location="Genoa, Italy">
          <Typography>
            Worked in{' '}
            <Link target="_blank" rel="noopener noreferrer" href="https://web.archive.org/web/20220706131402/https://alberobotics.it/">
              Alberobotics
            </Link>
            : a technology transfer project within the{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="assets/archive/iit-hhcm/www.iit.it/it/web/humanoids-human-centered-mechatronics.html">
              Humanoid and Human Centred Mechatronics (HHCM) Research Line
            </Link>{' '}
            of the Italian Institute of Technology (IIT). My duties included:
            <ul style={{ paddingLeft: '1em', marginTop: 0 }}>
              <li>developing tests and procedures for the automatic calibration of EtherCAT actuators and robotic modules.</li>
              <li>developing a suite of tests for the evaluation of prototypes' hardware and firmware.</li>
              <li>developing firmware for electronic boards associated with customized sensing.</li>
              <li>producing and maintaining revisions of documentation.</li>
              <li>providing technical assistance for research activities.</li>
            </ul>
          </Typography>
        </CurriculumItem>
        {/* id="WUT-intern" */}
        <CurriculumItem
          title="Researcher - Internship"
          dates="01/19 - 06/19"
          company="Warsaw University of Technology - Division of Theory of Machines and Robots"
          location="Warsaw, Poland">
          <Typography>
            My main duties included:
            <ul style={{ paddingLeft: '1em', marginTop: 0 }}>
              <li>Developing a voice interface and some user detection strategies for low-power robotic systems using ROS.</li>
              <li>Developing a robotic setup for educational purposes.</li>
              <li>Updating older robotics equipment.</li>
            </ul>
          </Typography>
        </CurriculumItem>
        {/* id="WUT-intern" */}
        <CurriculumItem title="Researcher - Internship" dates="01/17 - 02/17" company="LAR - University of Bologna" location="Bologna, Italy">
          <Typography>
            My main duties included:
            <ul style={{ paddingLeft: '1em', marginTop: 0 }}>
              <li>Developing a setup to control a shape memory alloy material using an embedded PC (a Beagle Bone Black).</li>
              <li>Developing two X20 PLC systems to control synchronous motors connected to flexible joints.</li>
              <li>Implementating the control logic using Matlab and Automation Studio.</li>
            </ul>
          </Typography>
        </CurriculumItem>

        <Divider sx={{ mt: 4, mb: 4 }} />
        <Typography variant="h4" color="primary.main" gutterBottom>
          Education
        </Typography>

        <Typography variant="h5" gutterBottom>
          Certifications
        </Typography>
        {/* id="WUT" */}
        <CurriculumItem title="IBM Full Stack Software Developer Professional Certificate" dates="03/24">
          <Stack direction="row" alignItems="center" gap={0.5}>
            <Typography>Credential ID: EZ34GWQLRHEG</Typography>
            <ExternalIconLink fontSize="inherit" href="https://www.coursera.org/account/accomplishments/professional-cert/EZ34GWQLRHEG" />
          </Stack>
        </CurriculumItem>

        <Typography
          variant="h5"
          onClick={() => window.open('https://master-emaro.ec-nantes.fr/', '_blank')}
          sx={{
            mt: 2,
            cursor: 'pointer',
            ':hover': {
              backgroundColor: 'transparent',
              color: 'primary.main',
            },
          }}
          gutterBottom>
          EMARO+ Program - Master Studies
        </Typography>
        {/* id="WUT" */}
        <CurriculumItem
          title="M.Eng. in Robotics and Control"
          company="Warsaw University of Technology"
          // (grade: 5/5,summa cum laude)
          location="Warsaw, Poland"
          dates="09/18 - 06/19">
          <Typography>
            <ul style={{ paddingLeft: '1em', marginTop: 0 }}>
              <li>Consortium scholarship issued for EMARO+ students based on academic merits and offered to top applicants only.</li>
              <li>Relevant courses: Research Methodology, Bio-Robotics, Dynamics of Multi-Body Systems, Advanced Mechanical Design.</li>
              <li>Other relevant courses: 2 exams of Polish language and 1 of Polish culture.</li>
              <li>
                Thesis:{' '}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/drive/folders/1Y7TJJN8z1llCkSTnpVHMELD3PqsX8VF9?usp=sharing">
                  Voice Controlled Mobile Robot for Indoor Applications
                </Link>{' '}
                (research publication available{' '}
                <Link target="_blank" rel="noopener noreferrer" href="https://doi.org/10.1007/978-3-030-58380-4_7">
                  <em>here</em>
                </Link>
                ).
              </li>
            </ul>
          </Typography>
        </CurriculumItem>
        {/* id="ECN" */}
        <CurriculumItem
          title="M.S. in Robotics and Control Engineering"
          company="Ecole Centrale de Nantes"
          location="Nantes, France"
          dates="09/17 - 06/18">
          <Typography>
            <ul style={{ paddingLeft: '1em', marginTop: 0 }}>
              <li>Consortium scholarship issued for EMARO+ students based on academic merits and offered to top applicants only.</li>
              <li>
                Relevant courses: Mobile Robotics, Non-linear Control Theory, Software Architecture for Robotics, Artificial Intelligence, Computer
                Vision, Real Time Systems, Mechanical Design Methods in Robotics, Optimization Techniques.
              </li>
              <li>Other relevant courses: 2 exams of French language.</li>
              <li>
                Project:{' '}
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1wBfvAzy9N8uChNxNj9Kd_hcvI0Qq3uQj/view?usp=sharing">
                  Recharging electric cars with a mobile robot
                </Link>
                .
              </li>
            </ul>
          </Typography>
        </CurriculumItem>

        <Typography
          variant="h5"
          onClick={() => window.open('https://corsi.unibo.it/2cycle/AutomationEngineering/almatong-bachelor-programme', '_blank')}
          sx={{
            mt: 2,
            cursor: 'pointer',
            ':hover': {
              backgroundColor: 'transparent',
              color: 'primary.main',
            },
          }}
          gutterBottom>
          Almatong Project - Bachelor Studies
        </Typography>
        {/* id="TJ" */}
        <CurriculumItem
          title="B.S. in Control Theory and Control Engineering"
          company="Tongji Univeristy"
          // (grade: 5/5)
          location="Shanghai, China"
          dates="09/14 - 06/17">
          <Typography>
            <ul style={{ paddingLeft: '1em', marginTop: 0 }}>
              <li>Relevant courses: Automation Controls, Electrical Circuit, Logical Design of Digital Systems.</li>
              <li>Other relevant courses: 2 Exams about Chinese Language and 3 Exams about Chinese Culture.</li>
              <li>
                Thesis:{' '}
                <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/0B1z42QMR-0UtYzBYSVhRV3ZPWk0/view?usp=sharing">
                  Solar Panel Fault Detection Method Based on Infrared Image Processing
                </Link>
                .
              </li>
            </ul>
          </Typography>
        </CurriculumItem>
        {/* id="UniBo" */}
        <CurriculumItem
          title="B.S. in Automation Engineering"
          company="Alma Mater Studiorum - University of Bologna"
          location="Bologna, Italy"
          //(grade: 102/110)
          dates="09/13 - 12/16">
          <Typography>
            <ul style={{ paddingLeft: '1em', marginTop: 0 }}>
              <li>Scholarship issued for Almatong Project student based on academic merits and offered to top applicants only.</li>
              <li>Relevant courses: Foundation of Industrial Robotics, Automatic Machines, Computer Architectures.</li>
              <li>Other relevant courses: 2 exams of French language.</li>
              <li>
                Thesis:{' '}
                <Link target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/0B1z42QMR-0UtSkxRVzJPTk1IX0k/view?usp=sharing">
                  Design of a Testing Machine for Flexure Hinges
                </Link>
                .
              </li>
            </ul>
          </Typography>
        </CurriculumItem>

        <Typography variant="h5" sx={{ mt: 2 }} gutterBottom>
          High School Studies
        </Typography>
        {/*  id="Roiti" */}
        <CurriculumItem
          title="Scientific High School Diploma"
          company="Liceo scientifico “Antonio Roiti”"
          location="Ferrara, Italy"
          // (grade: 92/100)
          dates="09/08 - 06/13">
          <Typography>
            Liceo scientifico “Antonio Roiti” is a public high school in Ferrara, Italy. There I followed a P.N.I. specialism (“National Plan of
            Computer studies”). This curriculum is devised by the Ministry of Education, and emphasises the link between the humanistic tradition and
            scientific culture. It covers a complete and widespread range of disciplines, including Italian language and literature, mathematics,
            physics, chemistry, biology, history, philosophy, Latin language and culture, English language and culture, art history and technical
            drawing. At the end of the fifth year all students sit for the esame di Stato, a final examination which leads to the maturità
            scientifica.
            <br />
            The school website can be found{' '}
            <Link target="_blank" rel="noopener noreferrer" href="https://www.liceoroiti.edu.it">
              here
            </Link>
            .
          </Typography>
        </CurriculumItem>
        {/* id="EMHS" */}
        <CurriculumItem title="Foreign Exchange Student Program" company="El Modena High School" dates="09/11 - 06/12" location="California, US">
          <Typography>
            El Modena High School is a traditional 4 year public high school located in the El Modena neighborhood in the eastern portion of the city
            of Orange in Orange County, California. I studied there as a senior year stundent through a foreign exchange student program. <br />
            The school website can be found{' '}
            <Link target="_blank" rel="noopener noreferrer" href="https://www.elmodenahs.org/">
              here
            </Link>
            .
          </Typography>
        </CurriculumItem>

        <Divider sx={{ mt: 4, mb: 4 }} />
        <Typography variant="h4" color="primary.main" gutterBottom>
          Skills
        </Typography>
        <Table>
          <TableRow>
            <TableCell width="15%">
              <b>Languages</b>
            </TableCell>
            <TableCell width="85%">Italian (Native Speaker), English (Proficient, IELTS 7.5), French (Good), Chinese (Basic, HSK3)</TableCell>
          </TableRow>

          <TableRow>
            <TableCell rowSpan={4} width="15%" id="digital_skills">
              <b>Digital</b>
            </TableCell>
            <TableCell width="85%">
              <b>Languages:</b> TypeScript/Javascript (Proficient), Python (Proficient), Bash (Good), C++ (Good), C (Fair)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>Softwares:</b> git (Proficient), Matlab (Good), LaTeX (Good), CATIA (Fair)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>Middleware:</b> Robotic Operative System (ROS, Good)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <b>OS Used:</b> Linux, Microsoft
            </TableCell>
          </TableRow>
          <TableRow sx={{ '&:last-child td': { borderBottom: 0 } }}>
            <TableCell width="15%">
              <b>Softskills</b>
            </TableCell>
            <TableCell width="85%">
              Adaptability, Communication, Creativity, Critical Thinking, Problem-Solving, Self-Organization, Teamworking
            </TableCell>
          </TableRow>
        </Table>

        {/* Accomplishments */}
        <Divider sx={{ mt: 4, mb: 4 }} />
        <Typography variant="h4" color="primary.main" gutterBottom>
          Accomplishments
        </Typography>
        <Box pb={1}>
          <Typography variant="h5">Awards</Typography>

          <Award
            year="2021"
            title="Premio Innovazione Robotica ed Automazione - Horizon"
            organization={
              <>
                21
                <sup>
                  <small>st</small>
                </sup>{' '}
                MECSPE fair
              </>
            }
            location="Bologna, Italy"
          />
          {/* https://twitter.com/IITalk/status/1466745516851617796 */}
          {/* https://www.linkedin.com/feed/update/urn:li:activity:6869549011855032321/ */}
          <Award year="2018" title="Consortium schoolarship" organization="EMARO+ Consortium" location="Warsaw, Poland" />
          <Award year="2017" title="Consortium schoolarship" organization="EMARO+ Consortium" location="Nantes, France" />
          <Award year="2014" title="Study Grant" organization="Università di Bologna" location="Bologna, Italy" />
        </Box>

        <Box pb={1}>
          <Typography variant="h5">Press Releases</Typography>
          <Award
            year="2020"
            title="Covid-19: L'impatto sui giovani talenti"
            titleProps={{
              onClick: () => window.open('https://www.youtube.com/watch?v=Blat-e2Vyzk&feature=youtu.be', '_blank'),
              sx: {
                cursor: 'pointer',
                ':hover': {
                  backgroundColor: 'transparent',
                  color: 'primary.main',
                },
              },
            }}
            organization="Talents in Motion"
            location="Rome, Italy"
          />
        </Box>

        <Box py={1}>
          <Typography variant="h5">Publications</Typography>
          <Publication
            year="2020"
            title="Control System Design for Human Assisting Robot"
            authors={
              <>
                Zielinska T.,{' '}
                <Typography component="span" color="text.primary">
                  Tartari M.
                </Typography>
              </>
            }
            location="ROMANSY 23 - Robot Design, Dynamics and Control. CISM International Centre for Mechanical Sciences (Courses and Lectures), vol
              601. Springer, Cham."
            link="https://doi.org/10.1007/978-3-030-58380-4_7"
          />
        </Box>

        {/* Extacurricoular  */}
        <Divider sx={{ mt: 4, mb: 4 }} />
        <Typography variant="h4" color="primary.main" gutterBottom>
          Extracurricular
        </Typography>
        {/* Volunteering  */}
        <Typography variant="h5">Volunteering</Typography>
        <Box component="ul" pl={4} mt={0}>
          <Extracurricular Component="li" year="2013 - Today" title="Blood Donor, Bone Marrow Donor at AVIS & ADMO" />
          <Extracurricular Component="li" year="2008 - 2014" title="Scoutism and associated volunteering activities in Agesci" />
          <Extracurricular Component="li" year="2011 - 2012" title="Boy Scout of America (BSA)" />
        </Box>
        {/* Other */}
        {/* Interests */}
        <Typography variant="h5">Interests</Typography>
        <Box component="ul" pl={4} mt={0}>
          <Extracurricular Component="li" title="Historical Handcrafting & Reenactment" />
          <Extracurricular Component="li" title="Hiking/Travelling" />
          <Extracurricular Component="li" title="Ju-jitsu" />
        </Box>
      </Box>
    </Page>
  )
}

export default Curriculum

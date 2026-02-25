import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const ToggleSwitchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
`;

const ToggleSwitchLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-left: 8px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ToggleSwitch = styled.input`
  position: relative;
  width: 40px;
  height: 20px;
  appearance: none;
  background: ${({ theme }) => theme.primary + 20};
  outline: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s;

  &:checked {
    background: ${({ theme }) => theme.primary};
  }

  &::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 2px;
    left: 2px;
    background: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
    transform: ${({ checked }) => (checked ? "translateX(20px)" : "translateX(0)")};
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Projects = () => {
  const [toggle, setToggle] = useState("all");
  const [sourceFilter, setSourceFilter] = useState(false);

  const filteredProjects = projects.filter((project) => {
    // Check if the project category includes the selected toggle category
    if (toggle !== "all" && !project.category.includes(toggle)) return false;
    if (sourceFilter && !project.github) return false;
    return true;
  });

  const projectCount = (type = "all") => {
    console.log(type)
    if (type == "all") {
      return ` (${(sourceFilter ?
        projects.filter(project => project.github)
        : projects).length})`
    }

    return `(${projects.filter(project => {
      return sourceFilter ?
        (project?.github && project.category.includes(type))
        : project.category.includes(type)
    }).length})`
  }
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          I have worked on a diverse range of products, from scaling high-impact
          fintech ecosystems to building AI-driven automation workflows and
          innovative startup concepts. Here are some of my featured projects.
        </Desc>

        {/* <ToggleButtonGroup>
          <ToggleButton
            active={toggle === "all"}
            onClick={() => setToggle("all")}
          >
            ALL{projectCount()}
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "Mobile app"}
            onClick={() => setToggle("Mobile app")}
          >
            Mobile App {projectCount("Mobile app")}
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "web app"}
            onClick={() => setToggle("web app")}
          >
            Web App{projectCount("web app")}
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === "backend"}
            onClick={() => setToggle("backend")}
          >
            Backend {projectCount("backend")}
          </ToggleButton>
        </ToggleButtonGroup> */}

        {/* <ToggleSwitchContainer>
          <ToggleSwitch
            type="checkbox"
            checked={sourceFilter}
            onChange={() => { setSourceFilter(!sourceFilter); }}
          />
          <ToggleSwitchLabel>
            Source Code Available Only
          </ToggleSwitchLabel>
        </ToggleSwitchContainer> */}

        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
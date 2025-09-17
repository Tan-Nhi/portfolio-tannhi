import { PROJECTS } from "helpers/data";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ProjectCard from "./project.card";

type TLanguage = "vi" | "en";
const Project = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage: TLanguage = (i18n.resolvedLanguage)! as TLanguage;
  return (
    <>
      <Row>
        <Col xs={12}>
          <h3 className="text-center">{t("projectPage.titleLine1")}<span className="brand-red"> {t("projectPage.titleLine2")}</span> </h3>
          <h6 className="text-center mb-md-5 mb-2"> {t("projectPage.description")} </h6>
        </Col>
      </Row>
      <Row
        style={{ justifyContent: "center", paddingBottom: "10px" }}
      >
        {PROJECTS?.map(item => {
          return (
            <Col md={4} className="project-card" key={item.id} identifier={`item-${item.id}`}>
              <ProjectCard
                imgPath={item.imgPath}
                title={item.title[currentLanguage]}
                description={item.description[currentLanguage]}
                githubLink={item.githubLink}
                demoLink={item.demoLink}
                isDeployed={item.id === 1}
              />
            </Col>
          )
        })}

      </Row>
      <div className="mb-7"></div>
    </>
  )
}

export default Project;
import { Col, Row } from "react-bootstrap";
import AnimationLottie from "components/share/animation-lottie";
import codingJSON from 'assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";

import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2" > <span className="brand-red"> {t("aboutPage.title")} </span> </h3>
          <div >
            <div>
              <p>{t("aboutPage.greeting")}</p>
              <p>{t("aboutPage.job")}</p>
              <p>{t("aboutPage.educationLine1")}</p>
              <p>{t("aboutPage.educationLine2")}</p>
            </div>
          </div>
          <div>
            <p>
              {t("aboutPage.hobbyIntro")}
            </p>
            <ul>
              <li>{t("aboutPage.hobbies.game")}</li>
              <li>{t("aboutPage.hobbies.tech")}</li>
              <li>{t("aboutPage.hobbies.travel")}</li>
            </ul>
          </div>
          <div>
            <p className="text-center brand-red">{t("aboutPage.quote")}</p>
            <p className="text-center brand-red">{t("aboutPage.quoteAuthor")}</p>
          </div>
        </Col>
        <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
          <AnimationLottie
            width="80%"
            animationPath={codingJSON} />
        </Col>
      </Row>

      <Row>
        <Col md={6} xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie
            width="50%"
            //animation with rp => convert sang text
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <div><h4 className="text-center brand-red">{t("aboutPage.educationTitle")}</h4></div>
            <div >
              <GlowCard identifier={`experience-5`}>
                <div className="p-3 relative">
                  <div className="experience-container">
                    <div className="duration-text">
                      <p>2022-2024</p>
                    </div>
                    <div className="details">
                      <div className="icon">
                        <FaGraduationCap size={36} />
                      </div>
                      <div className="info">
                        <p className="title">{t("aboutPage.degree")}</p>
                        <p className="company">{t("aboutPage.school")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col md={6} xs={12} className=" mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">{t("aboutPage.findMe")} </h3>
          <SocialMedia
            gmail={APP_DATA.GMAIL_URL}
            github={APP_DATA.GITHUB_URL}
          />
        </Col>
        <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />
          <h4 className="text-center">{t("aboutPage.contactTitle")}</h4>
        </Col>
      </Row>
      <div className="mb-5"></div>
    </>
  )
}

export default About;
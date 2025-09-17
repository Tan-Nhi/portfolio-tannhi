import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

interface IProps {
    imgPath: string;
    title: string;
    description: string;
    githubLink: string;
    demoLink: string;
    isDeployed: boolean;
}

function ProjectCard(props: IProps) {
    const [showToast, setShowToast] = useState(false);


    const handleDemoClick = () => {
        if (!props.isDeployed || !props.demoLink) {
            setShowToast(true);
            return;
        }
        window.open(props.demoLink, "_blank");
    };

    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ maxHeight: 215 }} />
            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    {props.title}
                </Card.Title>
                <div className="d-flex flex-column justify-content-between h-100">
                    <Card.Text style={{ textAlign: "justify" }}>
                        {props.description}
                    </Card.Text>
                    <div>
                        <Button variant="primary" href={props.githubLink} target="_blank">
                            <BsGithub /> &nbsp;
                            "GitHub"
                        </Button>

                        <Button
                            variant="primary"
                            onClick={handleDemoClick}
                            style={{ marginLeft: "10px" }}
                        >
                            <CgWebsite /> &nbsp;
                            {"Demo"}
                        </Button>

                    </div>
                </div>


            </Card.Body>
            <ToastContainer position="top-end" className="p-3 fw-bold">
                <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide bg="warning">
                    <Toast.Header>
                        <strong className="me-auto fw-bold">Thông báo</strong>
                    </Toast.Header>
                    <Toast.Body className="text-dark">Dự án này chưa deploy!</Toast.Body>
                </Toast>
            </ToastContainer>
        </Card>
    );
}
export default ProjectCard;
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

interface IProps {
    gmail: string;
    github: string;

}

const SocialMedia = (props: IProps) => {
    const { gmail, github } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            {/* github,gmail  */}
            <a href={gmail} target='_blank' className="highlight" title="Gmail: nguyentannhi2003bh@gmail.com">
                <SiGmail size={30} />

            </a>
            <a href={github} target='_blank' className="highlight" title="GitHub Tấn Nhi">
                <FaGithub size={30} />
            </a>


        </div>
    )
}

export default SocialMedia;
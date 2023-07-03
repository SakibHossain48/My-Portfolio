import { Typewriter } from "react-simple-typewriter";
import SectionHead from "../components/SectionHead";

const About = () => {
  const words = [
    "Junior Web Developer",
    "Frontend Developer",
    "Web Developer",
  ];

  // ?? Handle Download Resume
  const handleDownload = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1AbxFC2EigjuPBVwhHsY-O-sm0Gv6Pt14/view?usp=sharing";
    const fileIdMatch = resumeUrl.match(/[-\w]{25,}/);
    const fileId = fileIdMatch?.[0] ?? "";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.location.href = downloadUrl;
  };
  return (
    <section className="section" id="about">
      <SectionHead parallaxValue="About" value="About me" />
      <div className="lg:mt-20 lg:grid grid-cols-2 gap-20">
        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="text-desc-color lg:text-lg text-justify"
        >
          Sakib Hossain is a skilled Junior web developer with
          expertise in ReactJS, Typescript, MongoDB, ExpressJS, NodeJS, and
          various other technologies related to JavaScript and Typescript.Sakib is a Student of CSE Dept in Shanto-Mariam University and Creative Technology. With
          a passion for crafting dynamic and interactive web applications, Sakib
          brings creativity and proficiency to every project. With a keen eye
          for details and a strong problem-solving mindset, Sakib is committed to
          delivering high-quality, efficient, and user-friendly solutions. From
          front-end development to back-end implementation, Sakib possesses the
          comprehensive skills necessary to build robust and scalable web
          applications.
        </p>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="space-y-4 lg:mt-0 mt-4"
        >
          <h3 className="lg:text-2xl text-lg font-black">
            I am a{" "}
            <span className="text-main-color">
              <Typewriter
                words={words}
                loop={0}
                cursor={true}
                cursorColor="rgb(114 226 174)"
              />
            </span>
          </h3>
          <ul className="list-disc list-inside space-y-3">
            <li className="my-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                First Name
              </strong>
              : Sakib
            </li>
            <li className="my-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Last Name
              </strong>
              : Hossain
            </li>
            <li className="my-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Age
              </strong>
              : 24 years
            </li>
            <li className="my-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Nationality
              </strong>
              : Bangladesh
            </li>
            <li className="my-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Language
              </strong>
              : Bangla, English
            </li>
            <li className="my-list relative">
              <strong className="inline-block lg:min-w-[120px] min-w-[100px] font-medium">
                Address
              </strong>
              : Tongi, Gazipur, Bangladesh
            </li>
          </ul>
          <button onClick={handleDownload} className="social-btn">
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

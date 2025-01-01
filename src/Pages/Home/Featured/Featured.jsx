import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./featured.css";

const Featured = () => {
  return (
    <div className="max-w-screen featured bg-fixed my-10 space-y-10 md:p-20">
      <div className="text-white">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"Featured Item"}
        ></SectionTitle>
      </div>
      <div className="md:flex justify-center items-center gap-10 mx-auto ">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="space-y-3 text-white text-2xl">
          <p>Aug 20, 2025</p>
          <p className="uppercase">Where I get some?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum eaque
            eius, dolor nemo corporis praesentium modi expedita assumenda, eos
            in saepe pariatur et asperiores sunt ratione delectus! Error
            assumenda adipisci laudantium rerum dicta labore id omnis
            exercitationem, unde, ullam totam impedit? Quod nisi et temporibus
            quas totam distinctio quos expedita.
          </p>
          <button className="btn btn-warning btn-outline border-0 border-b-4">Order Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

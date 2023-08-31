import React from 'react';
import "./services.css";
import Image1 from "../../assets/UIUX.png"
import Image2 from "../../assets/tech5.png"
import Image3 from "../../assets/tech5.png"

const data = [
    {
        id: 1,
        image: Image1,
        title: "UI/UX design",
        description:
        "Well proficient in customizing User Interface Design as well as ensuring seamless and enjoyable User Experience",
    },
    {
        id: 2,
        image: Image2,
        title: "Front-end Development",
        description:
        "Experienced in front-end web development mainly (HTML, Javascript, React JS and CSS).",
    },
    {
        id: 3,
        image: Image3,
        title: "Back-end Development",
        description:
        "Experienced in back-end web development mainly (Python, Ruby, Node.js).",
    },
];


const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map (({id, image, title, description}) =>{
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt="" className="services__image" />
                            <h3 className="services__title">{title}</h3>
                            <p className="services_description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Services; 
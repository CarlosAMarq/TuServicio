import React from "react";
import Wave from "./Wave";
import './pageservice.css'
import {IoMdBook,IoMdAlbums,IoIosCash,IoMdFolderOpen, IoIosDesktop, IoIosIceCream, IoIosAlbums} from 'react-icons/io'
import Logo from "../Logo";
export default function PageServices() {
  return (
    <section id="page-service">
      <h1>¿Que ofrecemos?</h1>

    <div className="container">
      <br/>
    <h2 className="section-title wow fadeInDown animated text-center pt-5 " id="page-service">Tipo de servicios</h2>
    <div className=" text-center">Estos son servicios hechos por ascesores con el fin de ayudar a un cliente en esta rama.</div>
    
    <div className="row p-5">
    
    <div className="col-md-6 col-lg-4 col-xs-12 bg-body-tertiary">
    <div className="services-item wow fadeInRight animated" data-wow-delay="0.3s" >
    <div className="icon">
    <IoIosCash id="icon"/>
    </div>
    <div className="services-content">
    <h3><a href="#">Financiera</a></h3>
    <p>Está enfocada en la gestión de las finanzas de la empresa. Ayuda a tomar decisiones sobre inversiones, presupuestos, flujo de efectivo y estrategias financieras</p>
    </div>
    </div>
    </div>
    
    <div className="col-md-6 col-lg-4 col-xs-12 bg-body-tertiary">
    <div className="services-item wow fadeInRight animated" data-wow-delay="0.6s" >
    <div className="icon">
    <IoMdFolderOpen id="icon"/>
    </div>
    <div className="services-content">
    <h3><a href="#">Recursos Humanos</a></h3>
    <p>
Se centra en temas relacionados con el personal, como contratación, capacitación, evaluación del desempeño y resolución de conflictos laborales.
 </p>
    </div>
    </div>
    </div>
    
    <div className="col-md-6 col-lg-4 col-xs-12 bg-body-tertiary">
    <div className="services-item wow fadeInRight animated" data-wow-delay="0.9s" >
    <div className="icon">
    <IoIosDesktop id="icon"/>
    </div>
    <div className="services-content">
    <h3><a href="#">Tecnológica</a></h3>
    <p> Proporciona orientación sobre tecnología, sistemas informáticos, software y ciberseguridad. Ayuda a optimizar la infraestructura tecnológica de la empresa. </p>
    </div>
    </div>
    </div>
    
    <div className="col-md-6 col-lg-4 col-xs-12 bg-body-tertiary">
    <div className="services-item wow fadeInRight animated" data-wow-delay="1.2s" >
    <div className="icon">
    <IoIosIceCream id="icon"/>
    </div>
    <div className="services-content">
    <h3><a href="#">Ventas</a></h3>
    <p> Ofrece estrategias para mejorar las ventas y la relación con los clientes. Puede incluir técnicas de marketing y análisis de mercado </p>
    </div>
    </div>
    </div>
    
    <div className="col-md-6 col-lg-4 col-xs-12 bg-body-tertiary">
    <div className="services-item wow fadeInRight animated" data-wow-delay="1.5s" >
    <div className="icon">
    <IoIosAlbums id="icon"/>
    </div>
    <div className="services-content">
    <h3><a href="#">Administrativa</a></h3>
    <p> Se enfoca en la organización interna de la empresa, procesos operativos y gestión eficiente. Ayuda a optimizar la estructura organizativa </p>
    </div>
    </div>
    </div>
    
    <div className="col-md-6 col-lg-4 col-xs-12 bg-body-tertiary ">
    <div className="services-item wow fadeInRight animated" data-wow-delay="1.8s" >
    <div className="icon">
    <IoMdBook id="icon"/>
    </div>
    <div className="services-content">
    <h3><a href="#">Jurídica</a></h3>
    <p>
 Brinda asesoramiento legal en áreas como contratos, regulaciones, litigios y propiedad intelectual </p>
    </div>
    </div>
    </div>
    </div>
    </div>


      <div className="about-area section-padding bg-body-secondary p-5">
        <div className="container">
          <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12 info">
          <div className="about-wrapper wow fadeInLeft animated" data-wow-delay="0.3s"> 
          <div>
          <div className="site-heading">
          
          <h2 className="section-title">Creaciones de Ofertas</h2>
          </div>
          <div className="content">
          <p>
          La seccion de ofertas esta raeda con el objetivo de que si el cliente no encuentra una asesoria
          que de solucion a su problema; pos le brindamos la opcion de crear ofertas. Las ofertas tendran
          una rama a la quue se dedicara y una descripcion del trabajo que necesita, esta esta hecha para
          que un asesor capacitado en este trabajo contacte al usuario y le brinde el servicio que solicitamos. 
          </p>
          <a href="#" className="btn  btn-primary mt-3">Ver</a>
          </div>
          </div>
          </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
              


          <div className="cube-container">
  <div className="cube">
    <div className="face front"></div>
    <div className="face back"></div>
    <div className="face right"></div>
    <div className="face left"></div>
    <div className="face top"></div>
    <div className="face bottom"></div>
  </div>
</div>


              
          </div>
          </div>
        </div>
      </div>
    </section>


  );
}

import { Link } from "react-router-dom"


export const HomeScreen = () =>{
    return(
        <>
        <div className="bg-body-tertiary"
         style={{ backgroundImage: "url('https://www.bing.com/images/search?view=detailV2&ccid=xqFTHOrD&id=00DDB609B143BDA6C8DC7632948ABE0D30854327&thid=OIP.xqFTHOrDTsr9aCN6WV1X5AHaEt&mediaurl=https%3a%2f%2fblogs.upn.edu.pe%2fnegocios%2fwp-content%2fuploads%2fsites%2f6%2f2017%2f03%2fupn_blog_neg_actitud-emprendedora_14-mar.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c6a1531ceac34ecafd68237a595d57e4%3frik%3dJ0OFMA2%252bipQydg%26pid%3dImgRaw%26r%3d0&exph=363&expw=570&q=Emprendedor+Oportunista&simid=608012068077309651&FORM=IRPRST&ck=177C95E286BF15EFAF3B864842C5B6FE&selectedIndex=2&itb=0')",
          backgroundSize: 'cover', backgroundPosition: 'center' ,
          height:  '100vh'}}>
            
                
            <div className="container py-5 pt-5  ">
                <h1 className="display-5 fw-bold text-center">Argencia "Tu Servicio"</h1>
                <p className=" fs-4 text-center">Hola binevenido a nuestra Argencia; si necesita ayuda para sacar a 
                    frente su negocio aqui podra contratar un profecionar con el objetivo de que este
                    lo ayude en su negocio</p>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-primary btn-lg "
                        to="/login">Get Started </Link>
                    </div>
                
            </div>
        </div>
        </>
    )
}
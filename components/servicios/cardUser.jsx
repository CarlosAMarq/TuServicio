


export const CardUser = ({
    name,
    info

}) => {

    


    return (
        <>
            <div className="col">
                <div className="card shadow-sm" key="{servicios.id}">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" 
            xmlns="http://www.w3.org/2000/svg" role="img" 
            aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" 
            focusable="false"><title>Placeholder</title><rect width="100%" 
            height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" 
            dy=".3em">servicios</text></svg>
                    <div className="card-body">
                        <div className="card-info">
                            <h4 className="card-text ">{name}</h4>
                            <p className="card-text">{info}</p>
                        </div>

                        <div className="btn-group">
                            <button type="button" className="btn btn-sm  btn-danger text-light shadow-sm ">Solicitar</button>
                            
                        </div>
                    </div>
                </div>
            </div>



        </>

    )
}
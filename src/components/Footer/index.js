const Footer = () => {

    const styleFooter = {
        marginTop: '5%',
        width: '100%',
        height: '200px',
        backgroundColor: '#00000e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <>
            <div id="footer" style={styleFooter}>
                <div className="col-6 md:col-6 sm:col-12">
                    
                        <img style={{width: '150px', height: '150px'}} alt="logo" src="media/MvLogo.png"></img>
                 
                </div>
                <div className="col-6 md:col-6 sm:col-12">

                </div>
            </div>
        </>
    );

}

export default Footer
import * as S from './styles';
import { InputTextarea } from 'primereact/inputtextarea';

const Contact = () => {

    const style_content = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <>
            <div style={{width: '100%'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00000e" fill-opacity="1" d="M0,32L26.7,74.7C53.3,117,107,203,160,218.7C213.3,235,267,181,320,138.7C373.3,96,427,64,480,48C533.3,32,587,32,640,48C693.3,64,747,96,800,133.3C853.3,171,907,213,960,192C1013.3,171,1067,85,1120,90.7C1173.3,96,1227,192,1280,192C1333.3,192,1387,96,1413,48L1440,0L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
            </div>

            <div id="contact">
                <div style={style_content} >
                    <S.CardContact data-aos="zoom-in" data-aos-once="true" data-aos-offset="300" data-aos-easing="ease-in-sine" className="md:w-50rem" style={{boxShadow: '7px 7px'}}>
                    <S.TitleContact>Contato ✉️</S.TitleContact>
                        <h3>
                            Entre em contato comigo via:
                        </h3>
                        <S.contactDiv href="mailto:matheusvaz765@gmail.com">
                            <div style={{width: '50px'}}>
                                ✉️
                            </div>
                            <h2>Email</h2> 
                        </S.contactDiv>

                        <S.contactDiv href="whatsapp://send?abid=+5555984088361">
                            <div style={{width: '50px'}}>
                                <S.StyledWhatsappIcon></S.StyledWhatsappIcon>
                            </div>
                            <h2>Whatsapp</h2> 
                        </S.contactDiv>

                        <S.contactDiv href="tel:+5555984088361">
                            <div style={{width: '50px'}}>
                                📱
                            </div>
                            <h2>Celular</h2> 
                        </S.contactDiv>
                        
                    </S.CardContact>

                    
                </div>
            </div>
        </>
    );

}

export default Contact
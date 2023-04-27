import React from "react";

const ProfilePhoto = () => {

    const style_div = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-150px'
    };

    const style_photo = {
        width: '278px',
        height: '270px',
        backgroundColor: '#b5a7a7',
        position: 'absolute',
        borderRadius: '437px',
        background: "url('https://cf.workana.com/logos/09cf6f06ded4aba223b232dd2dfb0631/cj/56823274_787204115006311_8794291962032160768_n_192_192.jpg')",
        backgrounRepeat: 'noRepeat',
        backgroundSize: 'cover',
        border: '3px solid white',
    };

    return (
        <div id="contentPhoto" style={style_div}>
            <div id="profilePhoto" style={style_photo}>
    
            </div>
        </div>
    );
};
    
export default ProfilePhoto;
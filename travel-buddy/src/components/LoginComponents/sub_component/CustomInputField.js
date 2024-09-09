import React, { useState } from 'react';
import eye_visible from './../img/eye_visible.png';
import eye_hide from './../img/eye_hide.png';

export const CustomInputField = ({ id, type, value, onChange, label, error, name }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="Login_register_input_group">
            <input 
                type={isPasswordVisible ? 'text' : type} 
                id={id} 
                name={name} 
                value={value} 
                onChange={onChange} 
                required 
            />
            <span className="bar"></span>
            {type === 'password' && (
                <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="show_password_button"
                >
                    <img 
                        src={isPasswordVisible ? eye_visible : eye_hide} 
                        height={25} 
                        alt="Toggle Password Visibility" 
                    />
                </button>
            )}
            
            <label htmlFor={id}>{label}</label>
            
            {error && (
                <div id={`${id}_error`} className="all_error_for_input">
                    {error}
                </div>
            )}
        </div>
    );
};

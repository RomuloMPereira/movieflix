import React from 'react';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({ text }: Props) => {
    return (
        <div className="default-button">
            <button className="btn btn-primary btn-icon">
                <h5>{text}</h5>
            </button>
            <div className="btn-icon-content">
                <ArrowIcon />
            </div>
        </div>
    );
}

export default Button;
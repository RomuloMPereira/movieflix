import React from 'react';
import './styles.scss';

const Pagination = () => {

    return (
        <div className="pagination-container">
            <div className="pagination-item active">
                1
            </div>
            <div className="pagination-item">
                2
            </div>
            <div className="pagination-item">
                3
            </div>
        </div>
    );
}

export default Pagination;
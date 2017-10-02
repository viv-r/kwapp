import React from 'react';

export default props => (
    <div className="pt-card pt-elevation-2">
        <style jsx>{`
            div {
                overflow: scroll;
                margin: 10px;
                padding: 10px;
            }
        `}</style>

        {props.children}
    </div>
);
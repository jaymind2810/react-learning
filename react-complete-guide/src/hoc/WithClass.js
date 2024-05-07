import React from "react";

const WithClass = (WrippedComponent, className) => {
    return props => (
        <div className="{className}">
            <WrippedComponent {...props} />
        </div>
    )
}

export default WithClass










// const WithClass = props => (
//     <div className="{props.classes}">
//         {props.children}
//     </div>
// );

// export default WithClass
// import React, { useState } from 'react';

// function One() {
//     const [value, setValue] = useState('');
//     function onChange(e) {
//         setValue(e.target.value);
//     }
//     return (
//         <>
//             <input type="text" onChange={onChange}/>
//             <div>
//                 {value}
//             </div>
//         </>
//     )
// }

// export default One;

import React from 'react';
import useSeona from '../Hook/useSeona';

function One() {
    const [value, onChange] = useSeona("");
    return (
        <>
            <input type="text" onChange={onChange}/>
            <div>
                {value}
            </div>
        </>
    )
}
export default One;
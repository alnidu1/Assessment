import React, {useState, useEffect} from 'react';


function Clock(){
    const[time, setTime]= useState(new Date().toLocaleTimeString());

    useEffect(() => { 
        const intervalID = setInterval(() => { 
            setTime(new Date().toLocaleTimeString()); 
        }, 1000); 
        return () => { 
            clearInterval(intervalID); 
        }; 
    }, []);

    return(
       <div>
            <h1>Current time: {time}</h1>

       </div>
    );
}

export default Clock;
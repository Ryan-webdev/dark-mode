// Import `useLocalStorage`
import {useLocalStorage} from './useLocalStorage'

//Import and set up your effect hook.
import {useEffect} from 'react';

export const useDarkMode = (key, initialValue) =>{
    //Call `useLocalStorage` and pass in the key you want to use to store whether 
    //or not dark mode is enabled. Remember, this hook returns an array with a value 
    //and a setter in an array, exactly like the state hook, so make sure to capture 
    //those values in a `const` - `const [someValue, setSomeValue] = useLocalStorage('your key here')`
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(()=>{
        //selecting the HTML elment 'body'
        const body = document.querySelector('body')
        

        if(darkMode){
            //if darkMode is not enabled, this toggles the dark-mode class on
           return setDarkMode(body.classList.toggle('dark-mode', true));
        }else{
            //if darkMode is already on this toggles the class off.
          return  setDarkMode(body.classList.toggle('dark-mode', false));
        }
        //only runs when this component is called
    }, [darkMode]);
    return[darkMode, setDarkMode]
} 
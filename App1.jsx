import React from 'react';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition'
export const App1 = () => {
const{
transscript, 
listening, 
resetTransscript,
 borwserSupportsSpeechRecognition
} = useSpeechRecognition();

if(!borwserSupportsSpeechRecognition){
    return null;
    }

    return(
        
        <div>
        
        <p>Microphone: {listening? 'on' : 'off'}</p>
        
        <button onClick={SpeechRecognition.startListening} >Start</button>
        <button onClick={SpeechRecognition.stopListening} >Stop</button>
        
        <button onClick={resetTransscript}>Reset</button>
        <p>{transscript}</p>
        </div>
    )
}

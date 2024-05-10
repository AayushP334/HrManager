import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import './i.css';

const SpeechtoText = () => {
    const { transcript, resetTranscript } = useSpeechRecognition();

    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true });
        console.log('listening starts');
        return () => {
            SpeechRecognition.stopListening();
            console.log('listening stops..');
        };
    }, []);

    return (
        <div>
            <form>
                <textarea value={transcript}></textarea>
                <button type="button" onClick={resetTranscript}>Clear Text</button>
                <button type="button" onClick={() => {
                    SpeechRecognition.stopListening();
                    console.log('listening stops..');
                }}>Stop Listening</button>
            </form>
        </div>
    );
}

export default SpeechtoText;

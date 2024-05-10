import { ReactMic } from 'react-mic';
import React, { useState } from 'react';
import mic from './mic';

const Example = () => {
  const [record, setRecord] = useState(false);
  const [transcript, setTranscript] = useState({ text: '' });

  const startRecording = () => {
    setRecord(true);
  }

  const stopRecording = () => {
    setRecord(false);
  }

  const onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  const onStop = (recordedBlob) => {
    setTranscript({ text: recordedBlob.transcription });
    // Send recordedBlob to server for speech-to-text conversion
    sendAudioToServer(recordedBlob.blob);
  }

  // Function to send recorded audio data to the server
  const sendAudioToServer = (audioBlob) => {
    // Send audioBlob to server using fetch or any other method
    const formData = new FormData();
    formData.append('audio', audioBlob);

    fetch('/api/speech-to-text', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      // Receive text transcription from server and update transcript state
      setTranscript({text:data.transcription});
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div id="mic">
      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        
        backgroundColor="#fff" />
      <button onClick={startRecording} type="button">Start</button>
      <button onClick={stopRecording} type="button">Stop</button>
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <p>Transcript:</p>
        <div>{transcript.text}</div>
      </div>
    </div>
  );
}

export default Example;

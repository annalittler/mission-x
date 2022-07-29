import React, { useState } from 'react';
import { PickerOverlay } from 'filestack-react-18';
import axios from 'axios';
import './SubmitContent.css';


function SubmitContent() {
    // States for FileStack visibility and URL extraction
    const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    // Accessing the password from the .env
    const FILESTACK_API_KEY = process.env.REACT_APP_FILESTACK_API_KEY; 

    // Function to make FileStack uploading window visible
    const handleVisible = () => {
        setIsPickerOverlayVisible(!isPickerOverlayVisible);
      };
    
    // Function to post the information in the endpoint  
    const submitUrl = (imageUrl) => {
        axios.post('http://localhost:4000/submitProject', {
            StudentID: 10,
            ProjectID: 10,
            DateStarted: '2022/07/12 04:08:15',
            DateSubmitted: new Date().toISOString(),
            DateCompleted: '2022/07/16 16:23:42',
            Submission: imageUrl          
        })
        // When successful:
        .then((response) => {
            console.log(response.status);
            console.log('Successful');
        })
        // If an error occurs:
        .catch((err) => {
            console.log(err)
        });
    };  
            
    return(
        <div className='content-dashboard-background'>
            <section className='submit-photo'>
                <img src='./images/Make Project Screen.png' alt='Screenshot' id='picture'/>
                <h1>Submit project photo</h1>
                <p>After completing yout project, 
                    take a screenshot of your project and upload it here</p>
                <img src='./images/Send Photo Button.png' alt='Send Screenshot' id='pink-button' onClick={handleVisible}/>
            </section>
            <div>
                {/* Picker is not visible until handleVisible is toogled */}
                {isPickerOverlayVisible && (
                <PickerOverlay
                    apikey={FILESTACK_API_KEY}
                    onSuccess={(result) => {
                    setImageUrl(result.filesUploaded[0].url);
                    setIsPickerOverlayVisible(false);
                    submitUrl(result.filesUploaded[0].url)}}
                />
                )}
            </div>
            <section className='call-teacher'>
                <img src='./images/Teacher-Student.png' alt='Teacher-Student' id='picture' />
                <h1>Show your teacher</h1>
                <p>If your teacher is in the same room as you, 
                    click the button below to let them know you are done</p>
                <img src='./images/Call Teacher Pink Button.png' alt='Call Teacher' id='pink-button'/>
            </section>
        </div>
    )
}
export default SubmitContent;
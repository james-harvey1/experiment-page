// id_management.js

function getParticipantID() {
    let urlParams = new URLSearchParams(window.location.search);
    let participantID = urlParams.get('id');

    if (participantID) {
        localStorage.setItem('participantId', participantID); // Store in localStorage
    } else {
        participantID = localStorage.getItem('participantId'); // Check localStorage
    }

    return participantID; // Return ID or null if not found.
}

function displayParticipantID(id) {
    if (id) {
        let displayElement = document.getElementById('participant-info');
        if (!displayElement) {
            displayElement = document.createElement('div');
            displayElement.id = 'participant-info';
            document.body.prepend(displayElement); // Add to the top of the page
        }
        displayElement.textContent = "Participant ID: " + id;
    }
}

// No $(document).ready() needed here because we are calling these functions from the PCIbex script, which already runs after the DOM is ready.

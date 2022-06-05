import { useRouter } from "next/router";

function CandidateForm() {

    const router = useRouter();
    // function takes in form data and makes api call to send email
    async function sendEmail() {
        var candidateName = document.getElementById("name").value;
        var candidateEmail = document.getElementById("email").value;

        let data= {
            candidateName,
            candidateEmail
        }

        // backend call -> goes to api/contact.js to send email to user

        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })

          // route back to initiate-bg-check page after email sent

          router.push("/initiate-bg-check");
          
    }
    return (
                <div>
                    <label for="name">Name: </label><input id="name" type="text" />
                    <br />
                    <br />
                    <label for="email">Email ID: </label><input id="email" type="text"></input>
                    <br /> <br />
                    <button onClick={sendEmail}> Send Email</button>
                </div>
    );

}

export default CandidateForm
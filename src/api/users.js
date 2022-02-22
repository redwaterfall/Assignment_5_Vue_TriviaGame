
const apiURL = "https://gcr-assignment-api.herokuapp.com/trivia";
const apiKey = "RVHxDtAgU0u5x46b4jhl9Q==";


export async function apiUserRegister(user, highScore) {
    try {
        const response = await fetch(`${apiURL}`, {
                method: 'POST',
                headers: {
                    'X-API-Key': apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: user,
                    highScore: highScore
                })
            })
            
            const { data } = await response.json();
            //const test = await response.json();
            console.log("Data from api " + data)
            return [null, data];
        }
        catch (error) {
            return [error.message, null];
        }
        
    }
    export async function apiUserSetHighScore(user, highScore) {
        try {
            const response = await fetch(`${apiURL}`, {
                method: 'POST',
                headers: {
                    'X-API-Key': apiKey,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: user,
                    highScore: highScore
                })
                })
                
                const {success, data} = await response.json();
                
                return [null, data];
            }
            catch (error) {
                return [error.message, null];
            }
            
        }

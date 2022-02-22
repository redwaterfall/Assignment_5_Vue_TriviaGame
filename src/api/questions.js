






export async function getQuestions(categoryID,type) {
    const URL = `https://opentdb.com/api.php?amount=10&category=${categoryID}&difficulty=easy&type=${type}`
    try {

        const result = await fetch(URL);
        const data = await result.json();
        
        return data.results;
    }
    catch (error) {
        console.log(error)
    }
}


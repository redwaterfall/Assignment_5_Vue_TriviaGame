
export async function getCatagory(Catagory_URL) {

    try {

        const result = await fetch(Catagory_URL);
        const data = await result.json();
        
        return data.trivia_categories;
    }
    catch (error) {
        console.log(error)
    }
}
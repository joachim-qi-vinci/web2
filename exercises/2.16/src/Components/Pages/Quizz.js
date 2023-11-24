const Quizz = () => {
// code here
fetch('../../../api-json-server/api-json-server/db.json')
.then((response) => {
    if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
    return response.json();
})
.then( (response)=>{
    renderPage(response)
})
.catch((err)=> {
    console.error('JOKE ::error: ', err);
})
renderPage()
}

function renderPage(question){
    const main = document.querySelector('main')
    main.innerHTML = `Hello`
}
export default Quizz;
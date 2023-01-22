// axios.get('https://swapi.dev/api/people/1')
// .then((res)=>{
//     console.log(res.data);
// }).catch((e)=>{
//     console.log("error!!!", e);
// });
const jokes = document.querySelector('#jokes');

const getPeople = async ()=>{
  try {
    const config = { headers:{Accept:"application/json"}}
    const res = await axios.get("https://icanhazdadjoke.com/",config);
    console.log(res.data.joke);
    const newLI = document.createElement('LI');
    newLI.append(res.data.joke);
    jokes.append(newLI); 
  } catch (e) {
    console.log(e);
  }
 

   
}
const button = document.querySelector('button');
button.addEventListener('click',getPeople)
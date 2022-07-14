const myBtn = document.querySelector(`button`)


function clickBtn(){
  console.log(`button clicked`)
  axios.get(`https://swapi.dev/api/planets/?search=Alderaan`)
  .then(res => {
    const {residents} = res.data.results[0]
    console.log(residents)
    for (let i=0; i< residents.length; i++){
      axios.get(`${residents[i]}`)
      .then(response =>{
        console.log(response.data)
        const residentTitle = document.createElement(`section`)
        residentTitle.innerHTML = response.data.name 
        document.body.appendChild(residentTitle)
      })
      .catch(err => console.log(err))
    }
  })
  .catch(err => console.log(err))
}

myBtn.addEventListener(`click`,clickBtn)




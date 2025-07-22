const button = document.getElementById('clickButton');
const inputfilename= document.getElementById('inputfiled');
const namme = document.getElementById('namee');


button.addEventListener('click', () => {
    const value = inputfilename.value;
    
    localStorage.setItem('name', value);
    location.reload();
});
// by using innertext we can change the text of the element

window.addEventListener('load', () => {
    const savedName = localStorage.getItem('name');
    if (savedName) {
        namme.innerText = savedName;
    }
});

// prototype prototypal inheritance
const p1={
    name:"wachan",
    getFullname(){
        return this.name
    }
}
const p2= Object.create(p1);
console.log(p2.getFullname());
p2.__proto__.name="hack";
console.log(p2.getFullname());
///fdvdvdv
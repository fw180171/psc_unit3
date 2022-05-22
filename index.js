
function Student(nam, cour, uni, img, bach){
    this.name=nam;
    this.course=cour;
    this.unit=uni;
    this.image=img;
    this.batch=`Ft-Web${bach}`;
}




function collectAll(){
    event.preventDefault() 
    let form = document.getElementById("student");
    let name=form.name.value;
    let course = form.course.value;
    let unit= form.unit.value;
    let image=form.image.value;
    let batch= form.batch.value

    let s1= new Student(name, course, unit, image, batch);
    let data =JSON.parse(localStorage.getItem("students")) || [];

    data.push(s1);
    localStorage.setItem("students", JSON.stringify(data));
    
    console.log(s1);
}

function calculate(){
    let data =JSON.parse(localStorage.getItem("students")) || [];

    let obj={};
    for(let i=0; i<data.length; i++){

        if(obj[data[i].batch]==undefined){
            obj[data[i].batch]=1;
        }
    }
    for(let i=0; i<data.length; i++){

        obj[data[i].batch]++;
     }
      console.log(obj)
     let top= document.getElementById("nav");
     for(let i in obj){
         
        let p = document.createElement("p")
        p.append(i,"-",obj[i])
        top.append(p)
     }
}
calculate()
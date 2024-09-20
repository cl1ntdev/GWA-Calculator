const container = document.querySelector('.container')
const tableForData = document.querySelector('.table-for-data')
const gwaShow = document.querySelector('.gwa-show')
var totSub = 1;

document.querySelector('.add-new').addEventListener('click',()=>{
    totSub++
    var newSub = document.createElement('div')
    newSub.className = `subject${totSub} subshow`
    newSub.innerHTML = `
        <input type="text" placeholder="Input Subject" class="input-sub${totSub} sub">
        <input type="text" placeholder="Input Grade" class="input-uni${totSub} grade">
        <input type="text" placeholder="Input Unit" class="input-grad${totSub} unit">
    `
    const newRemoveButton = document.createElement('button')
    newRemoveButton.className = 'remove-sub'
    newRemoveButton.innerText = 'Remove'
    newRemoveButton.onclick = ()=>{
        totSub--
        newSub.remove()
    }
    newSub.appendChild(newRemoveButton)
    tableForData.appendChild(newSub)
})

document.querySelector('.remove-sub').addEventListener('click',(e)=>{
    totSub--
    e.target.parentElement.remove()
}) // used for the default values after loading

document.querySelector('.calculate-gwa').addEventListener('click',()=>{
    var allInputSubs = document.querySelectorAll('.subshow')
    var allUnits = document.querySelectorAll('.unit')
    var totValGrdUni = gradeUnitTot(allInputSubs) //weighted grade points
    var totUnits = totAllUnit(allUnits)
    
    var gwa = totValGrdUni / totUnits
    console.log(gwa)
    gwaShow.innerText = 'GWA: ' + gwa 
})

const totAllUnit = (el) =>{
   var total = 0
   for(let i = 0;i<el.length;i++){
    total+=parseFloat(el[i].value)
   }
   return total
}

const gradeUnitTot = (el) =>{
    var allTotal = 0
    for(let i = 0;i<el.length;i++){
        var curGrade = parseFloat(el[i].querySelector('.grade').value)
        var curUnit = parseFloat(el[i].querySelector('.unit').value)
        var tot = curGrade * curUnit
        allTotal+=tot
    }
    return allTotal
}


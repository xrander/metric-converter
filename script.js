const inputNum = document.querySelector("#input-num");


const convertBtn = document.querySelector("#convert-btn")
const lengthOutput = document.querySelector("#length-output")
const volumeOutput = document.querySelector("#volume-output")
const massOutput = document.querySelector("#mass-output")


function toLengthImperial(inputValue) {
    let res = inputValue * 3.28084
    res = res.toFixed(3)
    return res
}
function toLengthMetric(inputValue) {
    let res = inputValue * 0.3048
    res = res.toFixed(3)
    return res
}

function toVolumeImperial(inputValue) {
    let res = inputValue * 0.2642
    res = res.toFixed(2)
    return res
}

function toVolumeMetric(inputValue) {
    let res = inputValue * 3.7854
    res = res.toFixed(2)
    return res
}

function toMassImperial(inputValue) {
    let res = inputValue * 2.205
    res = res.toFixed(2)
    return res
}

function toMassMetric(inputValue) {
    let res =  inputValue * 0.4536
    res = res.toFixed(2)
    return res
}

convertBtn.addEventListener('click', () => {
    baseNum = Number(inputNum.value)
    lengthOutput.innerHTML = `
        ${baseNum} meters = ${toLengthImperial(baseNum)} feet | ${baseNum} feet = ${toVolumeMetric(baseNum)} meters
    `

    volumeOutput.innerHTML = `
        ${baseNum} liters = ${toVolumeImperial(baseNum)} gallons | ${baseNum} gallons = ${toVolumeMetric(baseNum)} litres
    `

    massOutput.innerHTML = `
        ${baseNum} kilos = ${toMassImperial(baseNum)} pounds | ${baseNum} pounds = ${toMassMetric(baseNum)} kilos
    `
})


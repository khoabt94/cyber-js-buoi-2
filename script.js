// Em đã đi quá xa rồi nên không thể giải các bài này bằng if-else.....

///////////////////////////////////////////////////////////////////////////////////////////////////
// HELPER FUNCTION
const gatherData = (form) => {
    const formData = [...form.querySelectorAll('.input')].map(el => +el.value)
    if (formData.some(el => el === 0)) {
        alert('Vui Lòng Nhập Đầy Đủ Số Liệu!')
        return
    }
    if (!formData.some(el => Number.isInteger(el))) {
        alert('Vui Lòng Nhập Số Nguyên!')
        return
    }
    return formData
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
// BAI TAP CO BAN

//////////////////////////////////////////////
// BAI 1
const e1 = document.querySelector('.e1')
const e1Form = e1.querySelector('.e1Form')
const e1btnSortIncrease = e1.querySelector('.e1btnSortIncrease')
const e1btnSortDecrease = e1.querySelector('.e1btnSortDecrease')
const e1Result = e1.querySelector('.e1Result')

const e1SortIncrease = arr => arr.sort((a, b) => a - b)
const e1SortDecrease = arr => arr.sort((a, b) => b - a)

e1btnSortIncrease.addEventListener('click', () => {
    const inputArr = gatherData(e1Form)
    const resultArr = e1SortIncrease(inputArr)
    e1Result.textContent = resultArr.join(', ')
})

e1btnSortDecrease.addEventListener('click', () => {
    const inputArr = gatherData(e1Form)
    const resultArr = e1SortDecrease(inputArr)
    e1Result.textContent = resultArr.join(', ')
})

//////////////////////////////////////////////
// BAI 2
const e2 = document.querySelector('.e2')
const e2Result = e2.querySelector('.e2Result')
const e2Input = e2.querySelector('.input')

e2Input.addEventListener('change', (e) => {
    const value = e.target.value
    e2Result.textContent = value
})

//////////////////////////////////////////////
// BAI 3
const e3 = document.querySelector('.e3')
const e3Form = e3.querySelector('.e3Form')
const e3btnOddEvent = e3.querySelector('.e3btnOddEvent')
const e3Result = e3.querySelector('.e3Result')

const e3OddEvent = arr => {
    return arr.reduce((acc, el) => {
        acc[el % 2 === 0 ? 'even' : 'odd'] += 1
        return acc
    }, {odd: 0, even: 0})
}

e3btnOddEvent.addEventListener('click', () => {
    const inputArr = gatherData(e3Form)
    if (inputArr.some(el => el < 0)) {
        alert('Bài 3 - Cơ bản chỉ nhận số nguyên dương!')
        return
    }
    const resultArr = e3OddEvent(inputArr)
    e3Result.textContent = `Có ${resultArr.odd} số lẻ và ${resultArr.even} số chẵn`
})

//////////////////////////////////////////////
// BAI 4
const e4 = document.querySelector('.e4')
const e4Form = e4.querySelector('.e4Form')
const e4btnOddEvent = e4.querySelector('.e4btnOddEvent')
const e4Result = e4.querySelector('.e4Result')

const e4Triangle = arr => {
    const arrSet = [...new Set(arr.sort((a, b) => a - b))]
    if (arrSet.length === 1) return 'Tam Giác Đều'
    if (arrSet.length === 2) return 'Tam Giác Cân'
    const squareSum = arrSet[0]**2 + arrSet[1]**2
    if (squareSum === arrSet[2]**2) return 'Tam Giác Vuông'
    return 'Tam Giác Thường'
}

e4btnOddEvent.addEventListener('click', () => {
    const inputArr = gatherData(e4Form)
    if (inputArr.some(el => el < 0)) {
        alert('Bài 4 - Cơ bản chỉ nhận số nguyên dương!')
        return
    }
    const result = e4Triangle(inputArr)
    e4Result.textContent = result
})


/////////////////////////////////////////////////////////////////////////////////////////////////////
// BAI TAP NANG CAO

//////////////////////////////////////////////
// BAI 1
const f1 = document.querySelector('.f1')
const f1Form = f1.querySelector('.f1Form')
const f1btnTomorrow = f1.querySelector('.f1btnTomorrow')
const f1btnYesterday = f1.querySelector('.f1btnYesterday')
const f1Result = f1.querySelector('.f1Result')

const f1Tomorrow = ([date, month, year]) => {
    const dateStr = new Date(year, month - 1, date)
    const tomorrowStr = new Date(dateStr.setDate(dateStr.getDate() + 1))
    return tomorrowStr.toDateString()
}

const f1Yesterday = ([date, month, year]) => {
    const dateStr = new Date(year, month - 1, date)
    const tomorrowStr = new Date(dateStr.setDate(dateStr.getDate() - 1))
    return tomorrowStr.toDateString()
}

f1btnTomorrow.addEventListener('click', () => {
    const inputArr = gatherData(f1Form)
    if (inputArr.some(el => el < 0) || inputArr[0] > 31 || inputArr[1] > 12) {
        alert('Bài 1 - Nâng cao chỉ nhận số nguyên dương, ngày nhỏ hơn hoặc bằng 30, tháng nhỏ hơn hoặc bằng 12!')
        return
    }
    const result = f1Tomorrow(inputArr)
    f1Result.textContent = result
})

f1btnYesterday.addEventListener('click', () => {
    const inputArr = gatherData(f1Form)
    if (inputArr.some(el => el < 0) || inputArr[0] > 31 || inputArr[1] > 12) {
        alert('Bài 1 - Nâng cao chỉ nhận số nguyên dương, ngày nhỏ hơn hoặc bằng 30, tháng nhỏ hơn hoặc bằng 12!')
        return
    }
    const result = f1Yesterday(inputArr)
    f1Result.textContent = result
})

//////////////////////////////////////////////
// BAI 2
const f2 = document.querySelector('.f2')
const f2Form = f2.querySelector('.f2Form')
const f2btnDays = f2.querySelector('.f2btnDays')
const f2Result = f2.querySelector('.f2Result')

// Month zero index but Date is 0 will return to previous month
const f2DayinMonth = ([month, year]) => new Date(year, month, 0).getDate()

f2btnDays.addEventListener('click', () => {
    const inputArr = gatherData(f2Form)
    if (inputArr.some(el => el < 0) || inputArr[0] > 12) {
        alert('Bài 2 - Nâng cao chỉ nhận số nguyên dương, tháng nhỏ hơn hoặc bằng 12!')
        return
    }
    const result = f2DayinMonth(inputArr)
    f2Result.textContent = result
})

//////////////////////////////////////////////
// BAI 3
const f3 = document.querySelector('.f3')
const f3Form = f3.querySelector('.f3Form')
const f3btnRead = f3.querySelector('.f3btnRead')
const f3ResultVn = f3.querySelector('.f3ResultVn')
const f3VnWord = ['Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín']

const f3VnRead = arr => {
    const word = Array(3).fill('')
    if (Math.abs(arr[0]) === 0) word[0] = ''
    else word[0] = `${f3VnWord[Math.abs(arr[0]) - 1]} Trăm` 

    if (arr[1] === 0) word[1] = ''
    else word[1] = `${f3VnWord[arr[1] - 1]} Mươi`
    
    if (arr[2] === 0) word[1] = ''
    else word[2] = `${f3VnWord[arr[2] - 1]}`
    
    if (arr[1] === 1) word[1] = 'Mười'
    if (arr[2] === 1) word[2] = 'Mốt'
    if (arr[1] === 1 && arr[2] === 1) word[2] = 'Một'
    if (arr[2] === 5) word[2] = 'lăm'
    if (arr[0] < 0) word.unshift('Âm')

    return word

}

f3btnRead.addEventListener('click', () => {
    const inputArr = gatherData(f3Form)
    const resultVN = f3VnRead(inputArr)
    f3ResultVn.textContent = resultVN.join(' ')
})

//////////////////////////////////////////////
// BAI 4
const f4 = document.querySelector('.f4')
const f4Form = document.querySelector('.f4Form')
const f4FormA = [...f4Form.querySelectorAll('.svA')]
const f4FormB = [...f4Form.querySelectorAll('.svB')]
const f4FormC = [...f4Form.querySelectorAll('.svC')]
const f4FormS = [...f4Form.querySelectorAll('.svS')]


const f4btnDistance = f4.querySelector('.f4btnDistance')
const f4Result = f4.querySelector('.f4Result')

const f4Distance = (arr1, arr2) => {
    const sum = arr1.reduce((acc, el, i) => acc + (el - arr2[i])**2, 0)
    return Math.sqrt(sum)
}

f4btnDistance.addEventListener('click', () => {
    const valueA = f4FormA.map(el => +el.value)
    const valueB = f4FormB.map(el => +el.value)
    const valueC = f4FormC.map(el => +el.value)
    const valueS = f4FormS.map(el => +el.value)

    const distanceA = +f4Distance(valueA, valueS).toFixed(2)
    const distanceB = +f4Distance(valueB, valueS).toFixed(2)
    const distanceC = +f4Distance(valueC, valueS).toFixed(2)
    const distanceMin = Math.min(distanceA, distanceB, distanceC)

    const results = distanceMin === distanceA 
        ? `Sinh viên A gần trường nhất, khoảng cách là ${distanceA}`
        : (distanceMin === distanceB 
        ? `Sinh viên B gần trường nhất, khoảng cách là ${distanceB}`
        : `Sinh viên C gần trường nhất, khoảng cách là ${distanceC}`
        )
    f4Result.textContent = results
})
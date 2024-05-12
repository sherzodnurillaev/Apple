const btns = document.querySelectorAll('.color div')
const img = document.querySelector('.transition_pho img')
const links = document.querySelectorAll('.transition_pho button')
const pers = document.querySelectorAll('.transition_pho div')
const exe = document.querySelector('.exe')
const di = document.querySelector('.box a')
const mo = document.querySelector('.modal')
const ov = document.querySelector('.overline')
const im = document.querySelector('.header img')
const mids = document.querySelectorAll('.mid_lon')
const mides = document.querySelectorAll('.miden')
const men = document.querySelector('.men')
const mens = document.querySelector('.men span')

const iphones = {
    white: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZE9GbVRLdFoyOVBmczRNaU91Q1BaNWlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemN5bURtdG84aElEZERZa0lIV3FCN1lBPT0=&traceId=1',
    black:  'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZW95OFpIcWQ1d0NuTUppaGxOVkdhQWlCQmV2WTA2cncybDF2YzFnKzI0S2prMCtUNWwzYWR0UVU3TWVsbEdUeXRjODhrWk5XcFl2eGdtMU93TW5UemNnaGZTejMxa0hnUE1YYTBGeVJZdVBBPT0=&traceId=1',
    blue:   'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y1JhMkZic05CWW9VU1dxSWZUUWVyT3B3azBNWWRMTTJUR1Y1SkFQMTJmY3dDb1F2RTNvUEVHRkpGaGtOSVFHak1BVzRkYUlmdElTYk5KZFpJVWpSSncvTitpdit2K0pPbnlhL04zRlVpb29BPT0=&traceId=1',
    gold:   'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZEk5aWVjRmFBS2tnWEF6QzlCMm5HL0pOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2hBa0RRdWFDUTBBczVnS0JqV3BGbkxRPT0=&traceId=1',
}

const linke = {
    midBut: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-2-202309_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UW1GeTRObi9UaVF4S3FUNERNMWVhZ2FRQXQ2R0JQTk5udUZxTkR3ZVlpS0o0bnJBQlJYRTdzdWVwMVBVb2c4L0lYUWYrQkRLNitCbE9QRVRqNHErMkE3b3pFWnhZZ2g0M0pRR0pEdHVSRUcyRlVVa0JFTnZqc0lHcUFYQnFjNXpkc3NlSXRDWlQ3WVl5dEd4ZUF1dDFRPT0=&traceId=1',
    midBut_: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UW1GeTRObi9UaVF4S3FUNERNMWVhZ2FRQXQ2R0JQTk5udUZxTkR3ZVlpSmVJdk5rWHR5c3l5ME9ZNVV1Y1o0SjBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0Q5QmVFZ0s0ZTVTcDJpVVJkaDNNVDdmbW94YnYxc1YvNXZ4emJGL0IxNFp3PT0=&traceId=1',
}

btns.forEach(btn => {
    btn.onclick = () => {
        const color = btn.className.toLowerCase()
        img.setAttribute('src', iphones[color])
        links.forEach(link => {
            link.style.display = 'none'
        })
        exe.style.display = 'block'
    }
})

links.forEach(link => {
    link.onclick = () => {
        const imags = link.className
        img.setAttribute('src', linke[imags])
    }
})

exe.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UW1GeTRObi9UaVF4S3FUNERNMWVhZ2FRQXQ2R0JQTk5udUZxTkR3ZVlpSmVJdk5rWHR5c3l5ME9ZNVV1Y1o0SjBoUVhuTWlrY2hIK090ZGZZbk9HeE1xUVVnSHY5eU9CcGxDMkFhalkvT0Q5QmVFZ0s0ZTVTcDJpVVJkaDNNVDdmbW94YnYxc1YvNXZ4emJGL0IxNFp3PT0=&traceId=1')
    links.forEach(link => {
        link.style.display = 'block'
    })
    exe.style.display = 'none'
}

di.onclick = () => {
    mo.style.display = 'block'
    ov.style.display = 'block'
}
im.onclick = () => {
    mo.style.display = 'none'
    ov.style.display = 'none'
}

mids.forEach(mid => {
    mid.onclick = () => {
    mides.forEach(mide => {
            mide.style.height = '100%'
        })
    }
})
mids.forEach(mid => {
    mid.ondblclick = () => {
    mides.forEach(mide => {
            mide.style.height = '0'
        })
    }
})

// men.onclick = () => {
//     mens.innerHTML = 'frfr'
// }

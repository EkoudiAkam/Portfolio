import React from 'react'


const PDF_URL = 'http://localhost:5173/cv.pdf'
const Cv = () => {
    const download = (url) => {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const blobURL = window.URL.createObjectURL(new Blob([blob]))
                const fileName = url.split('/').pop()
                const aTag = document.createElement('a')
                aTag.href = blobURL
                aTag.setAttribute('download',fileName)
                document.body.appendChild(aTag)
                aTag.click()
                aTag.remove()
            })

    }
    return (
        <div>
            <button onClick={() => {download(PDF_URL)}}>Cv</button>
        </div>
)
}

export default Cv

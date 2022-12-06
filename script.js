document.addEventListener("DOMContentLoaded", initSlider);


function initSlider() {
    const videos = ['https://streaming.video.yandex.ru/get/yndx-video/m-42220-17a7be0554e-ca9878b3e384ce9b/720p.mp4',
    'https://streaming.video.yandex.ru/get/yndx-video/m-67230-17a7be12814-d4349e064a96e559/720p.mp4',
    'https://streaming.video.yandex.ru/get/yndx-video/m-28644-17a7be1a0ee-d835336e9d859e4a/720p.mp4',
    'https://streaming.video.yandex.ru/get/yndx-video/m-43474-17a7be21d43-cfb3f6c623bf8b7b/720p.mp4',
    'https://streaming.video.yandex.ru/get/yndx-video/m-28644-17a85a07b69-ac436aecf5e86a78/720p.mp4',
    'https://streaming.video.yandex.ru/get/yndx-video/m-42220-17a7be31056-f283c899f4d444f0/720p.mp4',
    'https://streaming.video.yandex.ru/get/yndx-video/m-67230-17a7be35fa3-95150f9a730d87/720p.mp4',
    'https://streaming.video.yandex.ru/get/yndx-video/m-28644-17a7be3bc45-8adfd7acc40bb5f1/720p.mp4',
    'https://streaming.video.yandex.ru/get/yndx-video/m-38232-17a7be46e2e-4900b1d2d2696114/720p.mp4',
    'https://streaming.video.yandex.ru/get/yndx-video/m-42220-17a7be4dec5-264e0ac54d3efdd0/720p.mp4'
    ]

    let videoBox = document.querySelector('.video-slider')
    let dotsBox = document.querySelector('.dots')

    initDots(dotsBox, videos.length)

    function initDots(box, number) {
        for(let i = 0; i < number; i++) {
            let dot = document.createElement('div')

            let img = document.createElement('img')
            img.src = 'icons/grey.svg'
            img.dataset.index = i
            img.classList.add('dot')
            img.addEventListener('click', changeSlide)

            if (i == 0) {
                img.classList.add('active')
                img.src = 'icons/black.svg'
            }

            dot.append(img)
            box.append(dot)
        }
    }

    function changeSlide(event) {
        let dot = event.target
        let index = +dot.dataset.index

        let video = videoBox.querySelector('source')
        
        changeDot(index)
        changeVideo(video, index)
    }

    function changeDot(index) {
        let allDots = document.querySelectorAll('.dot')
        
        allDots.forEach(dot => {    
            if (dot.classList.contains('active')) {
                dot.src = 'icons/grey.svg'
                dot.classList.remove('active')
                return
            }
        })

        allDots[index].src = 'icons/black.svg'
        allDots[index].classList.add('active')
    }

    function changeVideo(video, index) {
        video.src = videos[index]
        videoBox.load()
    }

}


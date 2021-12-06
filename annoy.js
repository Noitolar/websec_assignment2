let popup_list = []


function random_int(min, max) {
    let rand = Math.random()
    return Math.floor(rand * (max - min) + min)
}


function infinite_alert_loop() {
    let counter = 1
    while (counter < 10000) {
        alert("好耶( ᐛ )!")
        counter += 1
    }
}


function annoying_window_popup() {
    document.addEventListener("click", () => {
        let size_x = random_int(200, 400)
        let size_y = random_int(200, 400)
        let position_x = random_int(0, document.documentElement.clientWidth / 2)
        let position_y = random_int(0, document.documentElement.clientHeight / 2)
        const popup_window = open(`${location.href}beluga.webp`, "", `width=${size_x}, height=${size_y}`)
        if (!popup_window) return
        popup_list.push(popup_window)
        setInterval(() => {
            popup_window.moveTo(position_x, position_y)
            popup_window.resizeTo(size_x, size_y)
            position_x = random_int(0, document.documentElement.clientWidth / 2)
            position_y = random_int(0, document.documentElement.clientHeight / 2)
            size_x = random_int(200, 400)
            size_y = random_int(200, 400)
        }, 200)
    })
}


function focus_all_windows() {
    document.addEventListener("mousemove", () => {
        popup_list.forEach(popup_window => {
            if (!popup_window.closed) {
                popup_window.focus()
            }
        })
    })
}
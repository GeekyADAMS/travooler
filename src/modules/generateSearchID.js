export default function () {
    let k4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }
    return k4()+k4()+k4()+k4()
}
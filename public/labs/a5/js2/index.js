// let gu = {
//     si: 'da',
//     cf: 'qe'
// }
// let uj = {
//     cf: 'do',
//     co: 'db',
//     ...gu,
// }
// gu = {
//     ...uj,
//     cf: 'wh',
//     co: 'nd'
// }
// console.log(gu.si)
// console.log(uj.cf)
// console.log(gu.co)
//
//
// let cb = [76,34,27,77,45];
// let hq = [88,51,109,46];
// let xe = [...cb, 9, 10, 11, hq]
//
// console.log(xe.length)

const PC1 = () => <h1>GO1</h1>

function PC2() {
    return(<h1>GO2</h1>)
}

const PC3 = () => { return(<h1>GO3</h1>) }

console.log(PC1)

console.log(PC2())
console.log(PC3)

const A = () => {
    const [a, b] = useState(false)
    return(
        <div>
            {  a && <span onClick={() => b(false)}>C</span>}
            { !a && <span onClick={() => b(true) }>D</span>}
        </div>
    )
}
import useFetch from "../Effetc/useData";
import "../data/use.css"
import Tom from "./catapi";
const Cat = ({ cat: { name, description, temperament } }) => {
    return (
        <div className="hello">
            <h1>Mèo Víp Pro</h1>
            <Tom />
            <h1>{name.toUpperCase()}</h1>
            <p>{description}</p>
            <p>{temperament}</p>
            <button type="button" className="btn">Mua Hàng</button>
        </div>

    )
}
const Main = (props) => {
    const url = "https://api.thecatapi.com/v1/breeds";
    const data = useFetch(url)
    return (
        <div className="app">
            <p>Chào các bạn đến với customer Hook</p>
            <p>Mong là gọi đc API</p>
            <div className='fetch'>
                <p>Số con mèo lấy đc là{data.length}</p>
                {data.map((cat) => (
                    <Cat cat={cat} />
                ))}
            </div>
        </div>
    )
}
export default Main
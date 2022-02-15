import useFetch from "../Effetc/useData";
const Cats = ({ cat: { url } }) => {
    return (
        <div className="c">
            <img src={url} alt="hello" />
        </div>
    )
}
const Tom = (props) => {
    const URL = "https://api.thecatapi.com/v1/images/search?breed_id=abys";
    const data = useFetch(URL)
    return (
        <div className="cat">
            {data.map((cat) => (
                <Cats cat={cat} />
            ))}
        </div>
    )
}
export default Tom
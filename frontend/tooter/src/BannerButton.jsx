import "./BannerButton.css"
export default function BannerButton( {text} ){
    return (
        <div className="container bannerButton py-2 px-3 m-2">
            <h3>{text}</h3>
        </div>
    )
}
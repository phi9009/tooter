import BannerButton from "./BannerButton";

export default function BannerBar (){

    return(
        <div className="col-3 border">
            <BannerButton text = "Home"/>
            <BannerButton text = "Explore"/>
            <BannerButton text = "Notifications"/>
            <BannerButton text = "Messages"/>
            <BannerButton text = "Bookmarks"/>
            <BannerButton text = "Profile"/>
            <BannerButton text = "More"/>
        </div>
    )

}
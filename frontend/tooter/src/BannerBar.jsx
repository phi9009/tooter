import BannerButton from "./BannerButton";
import BannerLogo from "./BannerLogo";

export default function BannerBar (){

    return(
        <div className="col-3 border">
            <BannerLogo />
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
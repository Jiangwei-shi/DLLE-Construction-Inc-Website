'use client';

import {SimpleGrid, Text} from "@mantine/core";
import Item from "./Item";
import classes from './MainPage.module.css';


export default function MainPage(){
    const pictureUrl1 = "/1.jpg"
    const pictureUrl2 = "/2.jpg"
    const pictureUrl3 = "/3.jpg"
    const pictureUrl4 = "/4.jpg"
    const pictureUrl5 = "/5.jpg"
    const videoUrl = "/palette.mp4"
    return (
        <SimpleGrid cols={1} spacing="0" verticalSpacing="0">
            <Item
                title="Start your decorating journey"
                desc="desc"
                descLink=""
                backgroundImg={pictureUrl2}
                leftBtnText="Order now"
                leftBtnLink=""
                rightBtnText="Learn more"
                rightBtnLink=""
                twoButtons={true}
            />
            <Item
                title="Create Your Dream Space Today"
                desc="desc"
                descLink=""
                backgroundImg={pictureUrl1}
                leftBtnText="left"
                leftBtnLink=""
                rightBtnText="right"
                rightBtnLink=""
                twoButtons={true}
            />
            <Item
                title="Shape Your Sanctuary Today"
                desc="desc"
                descLink=""
                backgroundImg={pictureUrl3}
                leftBtnText="left"
                leftBtnLink=""
                rightBtnText="right"
                rightBtnLink=""
                twoButtons={true}
            />
            <Item
                title="Live in Beauty, Live in Style"
                desc="desc"
                descLink=""
                backgroundImg={pictureUrl4}
                leftBtnText="left"
                leftBtnLink=""
                rightBtnText="right"
                rightBtnLink=""
                twoButtons={true}
            />
            <Item
                title="Reimagine city, Redefine Comfort"
                desc="desc"
                descLink=""
                backgroundImg={pictureUrl5}
                leftBtnText="left"
                leftBtnLink=""
                rightBtnText="right"
                rightBtnLink=""
                twoButtons={true}
            />
            <div className={classes.backgroundContainer}>
                <video className={classes.backgroundVideo} autoPlay loop muted>
                    <source src={videoUrl} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="content-overlay">
                    <Text className={classes.title}>
                        开始装修
                    </Text>
                </div>
            </div>
        </SimpleGrid>
    );
}

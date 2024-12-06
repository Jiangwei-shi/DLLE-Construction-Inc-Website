'use client';

import {SimpleGrid} from "@mantine/core";
import Item from "./Item";


export default function MainPage(){
    const pictureUrl1 = "/1.jpg"
    const pictureUrl2 = "/2.jpg"
    return (
    <SimpleGrid cols={1} spacing="0" verticalSpacing="0">
        <Item
            title="picture1"
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
            title="picture1"
            desc="desc"
            descLink=""
            backgroundImg={pictureUrl2}
            leftBtnText="left"
            leftBtnLink=""
            rightBtnText="right"
            rightBtnLink=""
            twoButtons={true}
        />
        <Item
            title="picture1"
            desc="desc"
            descLink=""
            backgroundImg={pictureUrl2}
            leftBtnText="left"
            leftBtnLink=""
            rightBtnText="right"
            rightBtnLink=""
            twoButtons={true}
        />
        <Item
            title="picture1"
            desc="desc"
            descLink=""
            backgroundImg={pictureUrl2}
            leftBtnText="left"
            leftBtnLink=""
            rightBtnText="right"
            rightBtnLink=""
            twoButtons={true}
        />
    </SimpleGrid>
    );
}

'use client';

import {SimpleGrid} from "@mantine/core";
import Item from "./Item";

export default function MainPage(){
    const pictureUrl = "/1.jpg"
    return (
    <SimpleGrid cols={1} spacing="xs" verticalSpacing="xs">
        <Item
            title="picture1"
            desc="desc"
            descLink=""
            backgroundImg={pictureUrl}
            leftBtnText="left"
            leftBtnLink=""
            rightBtnText="right"
            rightBtnLink=""
            twoButtons={true}
        />
    </SimpleGrid>
    );
}

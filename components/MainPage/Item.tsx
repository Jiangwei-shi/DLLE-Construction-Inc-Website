'use client';


import {Anchor, Text, Button, Card, Group, Container} from "@mantine/core";
import classes from './Item.module.css';

export default function Item({title, desc, descLink, backgroundImg,leftBtnText,
                                 leftBtnLink,rightBtnText,rightBtnLink,twoButtons}){
    return (
    <div style={{backgroundImage: `url(${backgroundImg})`}} className={classes.itemBackground}>
        <Container className={classes.container}>
            <Text className={classes.title}>{title}</Text>
            {/*<Text className={classes.descriptionLink}>*/}
            {/*    <a href={descLink} target="_blank" rel="noopener noreferrer">{desc}</a>*/}
            {/*</Text>*/}
            <Group justify="space-between" grow mt="md" ml="xl" mr = "xl">
                <Button component="a" href={leftBtnLink} target="_blank" variant="filled">
                    {leftBtnText}
                </Button>
                {twoButtons && (
                    <Button component="a" href={rightBtnLink} target="_blank" variant="white">
                        {rightBtnText}
                    </Button>
                )}
            </Group>
        </Container>
    </div>
)
    ;
}

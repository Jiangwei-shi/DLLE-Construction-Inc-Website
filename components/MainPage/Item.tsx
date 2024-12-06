'use client';


import {Anchor, Text, Button, Card, Group, Container} from "@mantine/core";
import classes from './Item.module.css';

export default function Item({title, desc, descLink, backgroundImg,leftBtnText,
                                 leftBtnLink,rightBtnText,rightBtnLink,twoButtons}){
    return (
    <div style={{backgroundImage: `url(${backgroundImg})`}} className={classes.itemBackground}>
        <Container size={420} className={classes.container}>
            <Text weight={500} size="lg" className={classes.title}>{title}</Text>
            <Text size="sm" className={classes.title}>
                <a href={descLink} target="_blank" rel="noopener noreferrer"
                   className={classes.descriptionLink}>{desc}</a>
            </Text>
            <Group position="center" mt="md">
                <Button component="a" href={leftBtnLink} target="_blank" variant="white">
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

'use client';


import {Anchor, Text, Button, Card, Group, Container} from "@mantine/core";

export default function Item({title, desc, descLink, backgroundImg,leftBtnText,
                                 leftBtnLink,rightBtnText,rightBtnLink,twoButtons}){
    return (
        <div style={{
            height: '100vh', // 设置 div 高度为视口高度
            width: '100vw', // 设置 div 宽度为视口宽度
            backgroundImage: `url(${backgroundImg})`, // 设置背景图片
            backgroundSize: 'cover', // 背景图片覆盖整个容器
            backgroundPosition: 'center', // 图片居中显示
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Container size={420} style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '8px'}}>
                <Text weight={500} size="lg" style={{color: '#fff', marginBottom: '1rem'}}>{title}</Text>
                <Text size="sm" style={{color: '#fff', marginBottom: '1rem'}}>
                    <a href={descLink} target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}>{desc}</a>
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
    );
}

import Aos from 'aos';
import React, { useEffect } from 'react'
import { Project, ProjectContainer, Cards, NamaProject, TitleText, CardProject, ImgCard, HoverCard, HoverContainer, Icons, IconToLink} from './project.styles'

function Projects() {
    useEffect(() => {
        Aos.init({
        });
    }, []);
    return (
        <Project id="projects">
                <NamaProject >
                    Project
                </NamaProject>
            <ProjectContainer>
                <Cards>
                    <CardProject data-aos="fade-up" data-aos-delay="50">
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/4208985/screenshots/16831101/media/0c4c2b4396a0a16e23189a876b7c375f.png"/>
                        <HoverCard> 
                            <HoverContainer>
                                <TitleText>Title text.... </TitleText>
                                <Icons>
                                    <IconToLink/>
                                </Icons>
                            </HoverContainer>
                        </HoverCard>
                    </CardProject>
                    <CardProject data-aos="fade-up" data-aos-delay="50">
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/4208985/screenshots/16831101/media/0c4c2b4396a0a16e23189a876b7c375f.png"/>
                        <HoverCard> 
                            <HoverContainer>
                                <TitleText>Title text.... </TitleText>
                                <Icons>
                                    <IconToLink/>
                                </Icons>
                            </HoverContainer>
                        </HoverCard>
                    </CardProject>
                    <CardProject data-aos="fade-up" data-aos-delay="50">
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/4208985/screenshots/16831101/media/0c4c2b4396a0a16e23189a876b7c375f.png"/>
                        <HoverCard> 
                            <HoverContainer>
                                <TitleText>Title text.... </TitleText>
                                <Icons>
                                    <IconToLink/>
                                </Icons>
                            </HoverContainer>
                        </HoverCard>
                    </CardProject>
                    <CardProject data-aos="fade-up" data-aos-delay="50">
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/4208985/screenshots/16831101/media/0c4c2b4396a0a16e23189a876b7c375f.png"/>
                        <HoverCard> 
                            <HoverContainer>
                                <TitleText>Title text.... </TitleText>
                                <Icons>
                                    <IconToLink/>
                                </Icons>
                            </HoverContainer>
                        </HoverCard>
                    </CardProject>
                    <CardProject data-aos="fade-up" data-aos-delay="50">
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/4208985/screenshots/16831101/media/0c4c2b4396a0a16e23189a876b7c375f.png"/>
                        <HoverCard> 
                            <HoverContainer>
                                <TitleText>Title text.... </TitleText>
                                <Icons>
                                    <IconToLink/>
                                </Icons>
                            </HoverContainer>
                        </HoverCard>
                    </CardProject>
                    <CardProject data-aos="fade-up" data-aos-delay="50">
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/4208985/screenshots/16831101/media/0c4c2b4396a0a16e23189a876b7c375f.png"/>
                        <HoverCard> 
                            <HoverContainer>
                                <TitleText>Title text.... </TitleText>
                                <Icons>
                                    <IconToLink/>
                                </Icons>
                            </HoverContainer>
                        </HoverCard>
                    </CardProject>
                    <CardProject data-aos="fade-up" data-aos-delay="50">
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/4208985/screenshots/16831101/media/0c4c2b4396a0a16e23189a876b7c375f.png"/>
                        <HoverCard> 
                            <HoverContainer>
                                <TitleText>Title text.... </TitleText>
                                <Icons>
                                    <IconToLink/>
                                </Icons>
                            </HoverContainer>
                        </HoverCard>
                    </CardProject>
                    <CardProject data-aos="fade-up" data-aos-delay="50">
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/4208985/screenshots/16831101/media/0c4c2b4396a0a16e23189a876b7c375f.png"/>
                        <HoverCard> 
                            <HoverContainer>
                                <TitleText>Title text.... </TitleText>
                                <Icons>
                                    <IconToLink/>
                                </Icons>
                            </HoverContainer>
                        </HoverCard>
                    </CardProject>
                </Cards>
            </ProjectContainer>
        </Project>
    )
}

export default Projects

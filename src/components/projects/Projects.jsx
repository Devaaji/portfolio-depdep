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
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/59947/screenshots/16845051/media/ce9cde74acf08203954312a78d7f2e13.jpg?compress=1&resize=1600x1200"/>
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
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/97388/screenshots/16845414/media/73a8cc95f4a72ba9e6c28df5a040ef21.png?compress=1&resize=1600x1200"/>
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
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/427857/screenshots/16841612/media/dc59c3897c233dc46b286307cfad462f.png?compress=1&resize=1600x1200"/>
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
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/1575908/screenshots/16843493/media/b0865852731b77b330d3021481578c7b.jpg?compress=1&resize=1600x1200"/>
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
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/2202649/screenshots/16842049/media/a592ecee723f18bcdfe6660eeec07f35.png?compress=1&resize=1600x1200"/>
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
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/15687/screenshots/16844687/media/ce88defbd132821bc2a180c467317f18.png?compress=1&resize=1600x1200"/>
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
                        <ImgCard alt="" src="https://cdn.dribbble.com/users/1309691/screenshots/16842018/media/bd0f864b4d0ef49952871cb3bef269de.jpg?compress=1&resize=1600x1200"/>
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

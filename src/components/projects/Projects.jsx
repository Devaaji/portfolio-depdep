import Aos from 'aos';
import React, { useEffect } from 'react'
import { Project, ProjectContainer, Cards, NamaProject, TitleText, CardProject, ImgCard, HoverCard, HoverContainer, Icons, IconToLink, CardTitle, Github, LinkTo } from './project.styles'
import pahawang from '../../images/pahawangisland.png'
import nekolyrics from '../../images/nekolyrics.png'
function Projects() {

    useEffect(() => {
        Aos.init({
        });
    }, []);
    return (
        <Project>
            <NamaProject id="projects">
                Project
            </NamaProject>
            <ProjectContainer>
                <Cards>
                    <CardProject data-aos="fade-up" data-aos-delay="50">
                        <ImgCard alt="" src={pahawang} />
                        <HoverCard>
                            <HoverContainer>
                                <CardTitle>
                                    <TitleText>Pahawang Island </TitleText>
                                </CardTitle>
                                <Icons>
                                    <LinkTo href="https://github.com/Devaaji/pahawang-island">
                                    <Github />
                                    </LinkTo>
                                    <LinkTo href="https://devaaji.github.io/pahawang-island/">
                                    <IconToLink />
                                    </LinkTo>
                                </Icons>
                            </HoverContainer>
                        </HoverCard>
                    </CardProject>
                    <CardProject data-aos="fade-up" data-aos-delay="50">
                        <ImgCard alt="" src={nekolyrics} />
                        <HoverCard>
                            <HoverContainer>
                                <TitleText>NekoLyrics | Lirik  </TitleText>
                                <Icons>
                                <LinkTo href="https://github.com/Devaaji/NekoLyrics">
                                    <Github />
                                    </LinkTo>
                                    <LinkTo href="https://neko-lyrics-depdep.herokuapp.com/">
                                    <IconToLink />
                                    </LinkTo>
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

import React, { useState, useEffect } from 'react';
import projectList from '../data/projectList.json'


export default function Split() {
    // Add state to track selected project index
    const [selectedIndex, setSelectedIndex] = useState();

    return <>
        <div className='split left'>
            <SelectedProjectInfo i={selectedIndex} />
            <ImageMontage i={selectedIndex} />
        </div>
        <div className='split right'>
            <IndexBlock onProjectHover={setSelectedIndex} />
        </div>
    </>
}

// ----------------------------------------------------

function SVGDefinitions() {
    return <>
        <svg style={{ display: 'none' }}>
            <symbol id='category-circle' viewBox='0 0 10 10'>
                <circle cx='5' cy='5' r='4.5' />
            </symbol>
        </svg>
    </>
}
function CategorySVG () {
    return <>
        <svg className='category' width='10' height='10'>
            <use href='#category-circle' />
        </svg>
    </>
}

// ----------------------------------------------------


function IndexBlock({ onProjectHover }) {

    const handleClick = (projectInfo, event) => {
        event.preventDefault();
        const projectUrl = getProjectPageUrl(projectInfo);
        window.location.href = projectUrl;
    };

    return <>
        <SVGDefinitions />
        <div className='indexblock-wrapper'>
            {projectList.map((projectInfo, projectIndex) => (
                <div className='indexblock' 
                     key={projectIndex}
                     onMouseEnter={() => onProjectHover(projectIndex)}
                     onClick={(e) => handleClick(projectInfo, e)}
                >
                    <div className='indexblock-top'>
                        <p> {projectInfo.PublishDate} </p>
                        <h3> {projectInfo.EngName} </h3>
                    </div>
                    <div className='indexblock-bottom'>
                        <div className='indexblock-category'>
                            {projectInfo.Field.map((field, fieldIndex) => (
                                <p key={`${projectIndex}-${fieldIndex}`}>
                                    <CategorySVG />
                                    {field}
                                </p>
                            ))}
                        </div>
                        <p> {projectInfo.Name} </p>
                    </div>
                </div>
            ))}
        </div>
    </>
}

// Get Project Page Directory
const getProjectPageUrl = (projectInfo) => {
    if (!projectInfo.IMG || !projectInfo.IMG[0] || !projectInfo.URL) return '#';
    
    const imgPath = projectInfo.IMG[0];
    const basePath = imgPath.split('/index')[0];
    const urlSegment = projectInfo.URL.split('org/a/').pop();
    
    return `${basePath}/${urlSegment}.html`;
};


// ----------------------------------------------------

function SelectedProjectInfo({ i }) {
    if (i === undefined || !projectList[i]) {
        return <>
            <h1 className='indexHero'>
                ETHAN KONG <br />
                <div style={{color: 'var(--color-highlight)'}}>PORTFOLIO</div>
            </h1>
        </>;
    }
    return (
        <div className='selected-project-info'>
            <div className='textblock-collumn'>
                {projectList[i].Type.map((type, typeIndex) => (
                    <p className='textblock type' key={`${i}-${typeIndex}`}>{type}</p>
                ))}
            </div>
            <div className='textblock-collumn'>
                <p className='textblock category'>SKILLSET</p>
                <div className='textblock skills'>
                    {projectList[i].Skillsets.map((skill, skillIndex) => (
                        <React.Fragment key={`${i}-${skillIndex}`}>
                            <p>{skill}</p>
                            {skillIndex < projectList[i].Skillsets.length - 1 && <p>|</p>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <h2 className='textblock'> {projectList[i].EngName} </h2>
            <div className='textblock-collumn'>
                <p className='textblock category'>BRIEF</p>
                <p className='textblock brief'> {projectList[i].Brief} </p>
            </div>
        </div>
    );
}

// Image Montage Preview
function ImageMontage({ i }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
    }, [i]);

    useEffect(() => {
        if (i === undefined || !projectList[i]) return;

        const interval = setInterval(() => {
            setActiveIndex(current => 
                current === projectList[i].IMG.length - 1 ? 0 : current + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [i]);


    if (i === undefined || !projectList[i]) {
        return <></>
    }
    return <>
       <div className='image-montage'>
            {projectList[i].IMG.map((img, imgIndex) => (
                <img className={`montage-image ${imgIndex === activeIndex ? 'active' : ''}`}
                     key={`${i}-${imgIndex}`}
                     src={`${img}`} 
                     onError={(e) => console.log('Image failed to load:', img)}
                />
            ))}
        </div> 
    </>
}
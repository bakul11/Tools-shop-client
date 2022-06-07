import React, { useEffect, useState } from 'react';
import ToolsCard from '../ToolsCard/ToolsCard';
import Zoom from 'react-reveal/Zoom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import useTools from '../../Hooks/useTools';
import LoadingLogo from '../../../images/lodingLogo.gif'


const ToolsServices = () => {
    const [tools, setTools, loader] = useTools();

    const loadingMeg = <img src={ LoadingLogo } alt='Loading' className='img-fluid' style={ { height: '100px', width: '100px' } }></img>

    return (
        <div className='container margin'>
            <Zoom>
                <h3 className='text-center mb-2 text-capitalize'>useful latest tools</h3>
                <div className="service-title d-flex justify-content-center align-items-center mb-5">
                    <div className="extra-line bg-dark me-2" style={ { height: '2px', width: '50px', borderRadius: '50px' } }></div>
                    <div className="extra-line text-danger fs-1"><FontAwesomeIcon icon={ faScrewdriverWrench }></FontAwesomeIcon></div>
                    <div className="extra-line bg-dark ms-2" style={ { height: '2px', width: '50px', borderRadius: '50px' } }></div>
                </div>
            </Zoom>
            <div className="row gy-5">
                {
                    tools.map(tool => <ToolsCard tool={ tool } key={ tool.name }></ToolsCard>)
                }
                <div className="div text-center mt-5">
                    {
                        loader && loadingMeg
                    }
                </div>
            </div>

        </div>
    );
};

export default ToolsServices;